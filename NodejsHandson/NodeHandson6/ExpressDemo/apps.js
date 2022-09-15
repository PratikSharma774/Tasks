const express = require('express');
  
const app = express();
const port = 5500;
var path = require('path');
var filename = path.basename('/index.html');
console.log(filename);
app.get('/ExpressDemo/index.html', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.redirect('http://127.0.0.1:5500/ExpressDemo/index.html');
   
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})