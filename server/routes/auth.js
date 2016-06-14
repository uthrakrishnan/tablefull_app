const express = require('express'),
      router = express.Router({mergeParams: true}),
      knex = require('../db/knex'),
      bcrypt = require('bcrypt'),
      helpers = require('../helpers/authHelpers'),
      request = require('request'),
      SALT_WORK_FACTOR = 10;



//users login only  
router.post('/auth/facebook', function(req, res) {
  var fields = ['email', 'public_profile'];
  var accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token';
  var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');
  var params = {
    client_id: process.env.FACEBOOK_KEY,
    client_secret: process.env.FACEBOOK_SECRET,
    redirect_uri: 'http://localhost:3000/auth/facebook/callback'
  };

  // Step 1. Exchange authorization code for access token.
  request.get({ 
      url: accessTokenUrl, 
      qs: params, 
      json: true 
  }, function(err, response, accessToken) {
    if (response.statusCode !== 200) {
      return res.status(500).send({ message: accessToken.error.message });
    }

    // Step 2. Retrieve profile information about the current user.
    request.get({ url: graphApiUrl, qs: accessToken, json: true }, function(err, response, profile) {
      if (response.statusCode !== 200) {
        return res.status(500).send({ message: profile.error.message });
      }
      // if (req.header('Authorization')) {
      //   knex('users').select('*').where('fb_id', profile.id).first().then((existingUser)=>{
      //     if (existingUser) {
      //       return res.status(409).send({ message: 'There is already a Facebook account that belongs to you' });
      //     }
      //     var token = req.header('Authorization').split(' ')[1];
      //     var payload = jwt.decode(token, config.TOKEN_SECRET);

      //     knex('users').where('id', payload.sub).then((err, user)=>{
      //       if (!user) {
      //         return res.status(400).send({ message: 'User not found' });
      //       }
      //       user.fb_id = profile.id;
      //       user.displayName = user.displayName || profile.name;
      //       knex('user').where('id', payload.sub).update()
      //       user.save(function() {
      //         var token = createJWT(user);
      //         res.send({ token: token });
      //       });
      //     });
      //   });    
      // } 
      // else {
        // Step 3. Create a new user account or return an existing one.
      knex('users').select('*').where('fb_id', profile.id).first().then((err, existingUser)=>{
        if(existingUser) {
          var token = createJWT(existingUser);
          return res.send({ token: token });
        }          
        var user = new User();
        user.fb_id = profile.id;
        user.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
        user.displayName = profile.name;
        knex('users').insert(user).returning('*').then((user)=>{
          var token = createJWT(user);
          res.send({ token:token });
        });
      })
    });
  });
});
//venues only
router.post('/auth/login', function(req, res) {
  knex('venues').select('*').where({email: req.body.email}).first().then((venue)=>{
    if(!venue) {
      return res.status(401).send({message: 'Invalid email and/or password'})
    }
    bcrypt.compare(req.body.password, venue.password, (err, isMatch)=>{
      if(!isMatch){
        return res.status(401).send({message: 'Invalid email and/or password'})
      }
      var ven = {
        email: venue.email,
        id: venue.id
      }
      res.send({ token: createJWT(ven)});
    })
  }).catch((err)=>{
    res.send({message: err})
  })
});

//venues only
router.post('/auth/signup', function(req, res) {
  knex('venues').select('*').where({email: req.body.email}).first().then((err, existingVenue)=>{
    if (existingVenue) {
      return res.status(409).send({ message: 'Venue already exists' });
    }
    bcrypt
    bcrypt.hash(req.body.venue.password, SALT_WORK_FACTOR, (err, hash)=>{
      knex('venues').insert({
        email:req.body.venue.email,
        password: hash
      }).returning('*').then((venue)=>{
        res.send({token: createJWT(venue)})
      })
    })
  })
});


module.exports = router;
