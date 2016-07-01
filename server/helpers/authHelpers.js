const knex = require('../db/knex'),
      SALT_WORK_FACTOR = 10,
      jwt= require('jwt-simple'),
      moment= require('moment')
      bcrypt = require('bcrypt')

module.exports = {
  ensureAuthenticated: (req, res, next)=> {
    if (!req.header('Authorization')) {
      return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
    }
    var token = req.header('Authorization').split(' ')[1];

    var payload = null;
    try {
      payload = jwt.decode(token, process.env.TOKEN_SECRET);
    }
    catch (err) {
      return res.status(401).send({ message: err.message });
    }

    if (payload.exp <= moment().unix()) {
      return res.status(401).send({ message: 'Token has expired' });
    }
    req.user = payload.sub;
    next();
  },




  createJWT: (user)=> {
    var payload = {
      sub: user.id,
      iat: moment().unix(),
      exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, process.env.TOKEN_SECRET);
  },


}