const express = require('express'),
      app = express(),
      morgan = require('morgan'),
      bodyParser= require('body-parser'),
      router = require('./routes');

require('dotenv').load();


app.use('/assets', express.static(__dirname + "/../client/"));
// app.use('/javascripts', express.static(__dirname + "/../client/javascripts"));
// app.use('/stylesheets', express.static(__dirname + "/../client/stylesheets"));
// app.use('/reservations', express.static(__dirname + "/../client/views/reservations"));
// app.use('/users', express.static(__dirname + "/../client/views/users"));
// app.use('/venues', express.static(__dirname + "/../client/views/venues"));



app.use(morgan('tiny'));
app.use(bodyParser.json({type: "application/json"}));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/venues', router.venues);
app.use('/users', router.users);
app.use('/auth', router.auth);
app.use('/reservations', router.reservations);
app.use('/manage/venue/', router.manage);
app.use('/manage/venue/:venue_id/events', router.events);
app.use('/manage/venue/:venue_id/tables', router.tables);
app.use('/manage/venue/:venue_id/calendar', router.calendar);



app.get('/', (req, res)=>{
  res.sendFile('layout.html', {root: './client'})
});

// app.get('*', (req, res)=>{
//   res.sendFile('error.html', {root: './client'})
// });


app.listen('3000', function(){
  console.log('Listening on port 3000')
});