const express = require('express'),
      router = express.Router({mergeParams: true}),
      knex = require('../db/knex'),
      bcrypt = require('bcrypt'),
      helpers = require('../helpers/authHelpers'),
      request = require('request'),
      jwt= require('jwt-simple'),
      moment = require('moment'),
      SALT_WORK_FACTOR = 10;

require("locus")

//users login only  
router.post('/facebook', function(req, res) {
  var fields = ['email', 'public_profile'];
  var accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token';
  var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');
  var params = {
    client_id: '910806639065239',
    client_secret: '8861855a7caf3074aad51e9fcce1b16a',
    redirect_uri: 'http://localhost:3000/auth/facebook/callback'
  };
  // Step 1. Exchange authorization code for access token.
  request.get({ 
      url: accessTokenUrl, 
      qs: params, 
      json: true 
  }, function(err, response, accessToken) {
    eval(locus)
    if (response.statusCode !== 200) {
      return res.status(500).send({ message: accessToken.error.message });
    }

    // Step 2. Retrieve profile information about the current user.
    request.get({ url: graphApiUrl, qs: accessToken, json: true }, function(err, response, profile) {
      if (response.statusCode !== 200) {
        return res.status(500).send({ message: profile.error.message });
      }
      if (req.header('Authorization')) {
        knex('users').select('*').where('fb_id', profile.id).first().then((existingUser)=>{
          if (existingUser) {
            return res.status(409).send({ message: 'There is already a Facebook account that belongs to you' });
          }
          

          var token = req.header('Authorization').split(' ')[1];
          var payload = jwt.decode(token, config.TOKEN_SECRET);

          knex('users').where('id', payload.sub).first().then((err, user)=>{
            if (!user) {
              return res.status(400).send({ message: 'User not found' });
            }
            user.fb_id = profile.id;
            user.displayName = user.displayName || profile.name;
            knex('users').where('id', payload.sub).update(user).returning('*').then((user)=>{
              var token = createJWT(user[0]);
              res.send({token})
            })
          });
        });    
      } 
      else {
      eval(locus)  
        // Step 3. Create a new user account or return an existing one.
      knex('users').select('fb_id', 'username').where('fb_id', profile.id).first().then((existingUser)=>{
        if(existingUser) {
          var token = createJWT(existingUser);
          return res.send({ token: token });
        }          
        var user = new User();
        user.fb_id = profile.id;
        user.picture_pic = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
        user.username = profile.name;
        user.email= email
        knex('users').insert(user).returning('fb_id', 'username').then((user)=>{
          var token = createJWT(user);
          res.send({ token:token });
        });
      })
      .catch((err)=>{
        console.log(err);
      })
    };
  });
});
});
//venues only
router.post('/login', function(req, res) {
  knex('venues').select('*').where({loginName: req.body.loginName}).first().then((venue)=>{
    if(!venue) {
      return res.status(401).send({message: 'Invalid login name and/or password'})
    }
    bcrypt.compare(req.body.password, venue.password, (err, isMatch)=>{
      if(!isMatch){
        return res.status(401).send({message: 'Invalid login name and/or password'})
      }
      var ven = {
        loginName: venue.loginName,
        id: venue.id
      }
      res.send({ token: createJWT(ven)});
    })
  }).catch((err)=>{
    res.send({message: err})
  })
});

//venues only
router.post('/signup', function(req, res) {
  knex('venues').select('*').where({loginName: req.body.loginName}).first().then((err, existingVenue)=>{
    if (existingVenue) {
      return res.status(409).send({ message: 'Venue already exists' });
    }
    bcrypt
    bcrypt.hash(req.body.venue.password, SALT_WORK_FACTOR, (err, hash)=>{
      knex('venues').insert({
        loginName:req.body.venue.loginName,
        password: hash
      }).returning('*').then((venue)=>{
        res.send({token: createJWT(venue)})
      })
    })
  })
});

module.exports=router;