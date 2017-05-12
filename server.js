var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

// Add headers


app.listen(3000, function(){
  console.log('running on port 3000');
})
