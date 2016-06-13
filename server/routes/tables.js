const express = require('express'),
      router = express.Router({mergeParams: true}),
      knex = require('../db/kenx'),
      helpers = require('../helpers/authHelpers');


