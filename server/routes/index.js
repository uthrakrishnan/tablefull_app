const users = require('./users'),
      venues = require('./venues'),
      calendar = require('./calendar'),
      auth = require('./auth'),
      tables = require('./tables'),
      manage= require('./manage'),
      events = require('./events');
      reservations = require('./reservations')

module.exports = {users, reservations, manage, venues, calendar, tables, auth, events}