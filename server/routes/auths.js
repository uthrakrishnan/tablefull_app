const express = require('express'),
      router = express.Router({mergeParams: true}),
      knex = require('../db/knex'),
      
