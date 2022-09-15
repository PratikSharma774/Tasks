var express = require('express');
var app = express();
var PORT = 3000;
  
// With middleware
app.use('/verify', function(req, res, next){
    console.log("Authenticate and Redirect")
    res.redirect('/user');
    next();
});
  
app.get('/user', function(req, res){
    res.send("User Page");
});
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});