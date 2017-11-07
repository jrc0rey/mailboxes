var express = require('express'),
path = require('path'),
app = express(),
server = require('http').createServer(app),
bodyParser = require('body-parser'),
hbs = require('handlebars');


app.get('/home', function(req,res){
  res.send('Made it')
})


server.listen(3000, function(){
  console.log('Server is running on port 3000')
})
