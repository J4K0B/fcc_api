var express = require("express");
var app = express();
var unix;
var natural;
var year;
var month;
var day;
var timestamp;


app.get('/:param', function (req, res) {
  var param = req.params.param.toString();
  if (!isNaN(param)){
      timestamp = new Date(param*1000);
      unix = param;
    }
  else {
        
      timestamp = new Date(Date.parse(param));
      unix = Date.parse(param) / 1000;
  }
  year = timestamp.getFullYear();
  month = getMonth(timestamp.getMonth());
  day = timestamp.getDate();
  natural = month + " " + day + ", "+ year;
  
  res.send({
      "unix": unix,
      "natural": natural
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

function getMonth (n) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Oktober", "November", "December"];
    return months[n];
}