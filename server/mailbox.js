var express = require('express'),
path = require('path'),
app = express(),
server = require('http').createServer(app),
bodyParser = require('body-parser'),
hbs = require('hbs');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');

app.get('/home', function(req,res){
  res.render('home')
})


server.listen(3000, function(){
  console.log('Server is running on port 3000')
})
