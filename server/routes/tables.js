const express = require('express'),
      router = express.Router({mergeParams: true}),
      knex = require('../db/knex'),
      helpers = require('../helpers/authHelpers');


router.route('/')
      .get((req, res)=>{
        knex('tables').then((tables)=>{
          res.send(tables);
        }).catch((err)=>{
          res.send(err)
        })
      })
      .post((req, res)=>{
        knex('tables').insert(req.body.table).returning('*').then((table)=>{
          res.send(table);
        }).catch((err)=>{
          res.send(err);
        })
      })

router.route('/:table_id')
      .get((req, res)=>{
        knex('tables').where('id', req.params.table_id).then((table)=>{
          res.send(table);
        }).catch((err)=>{
          res.send(err);
        })
      })
      .put((req, res)=>{
        knex('tables').update(req.body.table).where('id', req.params.table_id).returning('*').then((table)=>{
          res.send(table);
        }).catch((err)=>{
          res.send(err);
        })
      })
      .delete((req, res)=>{
        knex('tables').where('id', req.params.table_id).first().del().then((status)=>{
          res.send('deleted');
        }).catch((err)=>{
          res.send(err);
        })
      })



module.exports = router;