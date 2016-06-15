const express = require('express'),
      router = express.Router({mergeParams: true}),
      knex = require('../db/knex'),
      helpers = require('../helpers/authHelpers');


router.route('/:id')


module.exports = router;