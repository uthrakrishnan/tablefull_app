const express = require('express'),
      router = express.Router({mergeParams: true}),
      knex = require('../db/knex'),
      helpers = require('../helpers/authHelpers');



router.route('/')
      .get((req, res)=>{
        knex('venues').join('tables', 'venue_id', 'id').then((data)=>{
          res.send(data);
        }).catch((err)=>{
          res.send(err);
        });
      });

router.route('/reservations/confirm')
      .post((req, res)=>{
        knex('calendar').where()
      });

module.exports = router;