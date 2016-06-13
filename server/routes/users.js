const express = require('express'),
      router = express.Router({mergeParams: true}),
      knex = require('../db/knex'),
      helpers = require('../helpers/authHelpers');


router.route('/')
      .post((req,res)=>{
         knex('users').insert(req.body.user).returning('*').then((user)=>{
          res.send(user);
         }).catch((err)=>{
          res.send(err);
         }) 
      })


router.route('/new', (req, res)=>{
  res.sendFile('/users/new')
})