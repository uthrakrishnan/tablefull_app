const express = require('express'),
      router = express.Router({mergeParams: true}),
      knex = require('../db/knex'),
      helpers = require('../helpers/authHelpers');



router.route('/')
      .get((req, res)=>{
        knex('venues').then((venues)=>{
          res.send(venues);
        }).catch((err)=>{
          res.send(err);
        })
      });

router.route('/:venue_id')
      .get((req, res)=>{
        knex('venues').where('id', req.params.venue_id).then((venue)=>{
          res.send(venue);
        }).catch((err)=>{
          res.send(err);
        })
      })

router.route('/:venue_id/calendar')
      .get((req, res)=>{
        knex('calendar').where('venue_id', req.params.venue_id).then((calendar)=>{
          res.send(calendar);
        }).catch((err)=>{
          res.send(err);
        })
      });

router.route('/:venue_id/calendar/:date')
      .get((req, res)=>{
        knex('calendar').where({'venue_id': req.params.venue_id, 'date' : req.params.date, 'status' : open}).rightOuterJoin('tables', 'table_id', 'id').then((tables)=>{
          res.send(tables);
        }).catch((err)=>{
          res.send(err);
        })
      });




module.exports = router;