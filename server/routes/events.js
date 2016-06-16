const express = require('express'),
      router = express.Router({mergeParams: true}),
      knex = require('../db/knex'),
      helpers = require('../helpers/authHelpers');

    
router.route('/')
      .get((req, res)=>{
        knex('events').then((events)=>{
          res.send(events);
        }).catch((err)=>{
          res.send(err);
        })
      })
      .post((req, res)=>{
        knex('events').insert(req.body.event).returning('*').then((event)=>{
          res.send(event);
        }).catch((err)=>{
          res.send(err);
        })
      })

router.route('/:event_id')
      .put((req, res)=>{
        knex('events').update(req.body.event).where('id', req.params.event_id).returning('*').then((event)=>{
          res.send(event);
        }).catch((err)=>{
          res.send(err);
        })
      })
      .delete((req, res)=>{
        knex('events').where('id', req.params.event_id).del().returning('*').then((status)=>{
          res.send('deleted');
        }).catch((err)=>{
          res.send(err);
        })
      })


module.exports = router;