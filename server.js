var express = require('express');
var cors = require('cors');

var app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());

// middleware
app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://'+req.hostname + req.url);

  }else{
    next();
  }
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use(express.static('public'));


app.listen(PORT, function(){
  console.log('running on port : ', PORT);
})
