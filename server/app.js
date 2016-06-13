const express = require('express'),
      app = express(),
      morgan = require('morgan'),
      bodyParser= require('body-parser'),
      router = require('./routes');


app.use('/javascripts', express.static(__dirname + "/../client/javascripts"));
app.use('/stylesheets', express.static(__dirname + "/..client/stylesheets"));
app.use('/reservations', express.static(__dirname + "/../client/reservations"));
app.use('/users', express.static(__dirname + "/../client/users"));
app.use('/venues', express.static(__dirname + "/../client/venues"));


app.use(morgan('tiny'));
app.use(bodyParser.json({type: "application/json"}));
app.use(bodyParser.urlencoded({extended:false}));



app.listen('3000', function(){
  console.log('Listening on port 3000')
});