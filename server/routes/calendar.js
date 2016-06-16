const express = require('express'),
      router = express.Router({mergeParams: true}),
      knex = require('../db/knex'),
      helpers = require('../helpers/authHelpers');

    

//GET Calendar/:calendar_date
router.route('/')
      .get((req, res)=>{
        knex('calendar').join('tables', 'table_id', 'id').where('venue_id', req.params.venue_id).then((calendar)=>{
          res.send(calendar);
        }).catch((err)=>{
          res.send(err);
        })
      })
      .post((req, res)=>{
        knex('calendar').insert(req.body.calendar).returning('*').then((calendar)=>{
          res.send(calendar);
        }).catch((err)=>{
          res.send(err);
        })
      })

router.route('/:date')
      .get((req, res)=>{
        knex('calendar').join('tables', 'table_id', 'id').where({'venue_id': req.params.venue_id, 'date': req.params.date}).then((tables)=>{
          res.send(tables);
        }).catch((err)=>{
          res.send(err);
        })
      })
      .put((req, res)=>{
        knex('calendar').update(req.body.calendar).where('table_id', req.body.calendar.table_id).returning('*').then((tables)=>{
          res.send(tables);
        }).catch((err)=>{
          res.send(err);
        })
      })


module.exports = router;