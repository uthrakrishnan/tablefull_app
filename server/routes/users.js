const express = require('express'),
      router = express.Router({mergeParams: true}),
      knex = require('../db/knex'),
      helpers = require('../helpers/authHelpers');


router.route('/')

      .patch((req,res)=>{
        var user = req.body.user;
        knex('users').where('fb_id', user.fb_id).update({alias: user.alias, dob: user.dob, profile_pic: user.profile_pic, blurb: user.blurb}).then(()=>{
          // req.flash('newUser', 'Added New User!');
          res.redirect(req.session.returnTo || '/venues');
          delete req.session.returnTo;
        }); 
      })
     




module.exports = router;