const express = require('express'),
      router = express.Router({mergeParams: true}),
      knex = require('../db/knex'),
      bcryp = require('bcrypt'),
      helpers = require('../helpers/authHelpers');
  
  



