const express = require('express'),
      router = express.Router({mergeParams: true}),
      knex = require('../db/knex'),
      helpers = require('../helpers/authHelpers');




router.route('/:user_id')
      //get user profile
      .get((req, res)=>{
        knex('users').where('id', req.params.user_id).then((user)=>{
          res.send(user)
        })
      })
      //update user profile
      .patch((req,res)=>{
        knex('users').where('fb_id', user.fb_id).update(req.body.user).returning('*').then((user)=>{
          res.send(user);
        }).catch((err)=>{
          res.send(err);
        })
      })
      //delete user profile
      .delete((req, res)=>{
        knex('users').where('id', req.params.user_id).first().del().then((status)=>{
          res.send('deleted')
        }).catch((err)=>{
          res.send(err)
        })
      })





module.exports = router;