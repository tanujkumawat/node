//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('hello world!!');
=======
 res.send('hello world...!!!');
>>>>>>> 5730f5a748f5a0de11c4be5a83bdc7d991d49086
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
