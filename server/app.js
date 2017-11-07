var express = require('express'),
path = require('path'),
app = express(),
server = ('http').createServer(app),
bodyParser = require('body-parser');




server.listen(3000, function(){
  console.log('Server is running on port 3000')
})
