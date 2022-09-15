
const express = require('express');
  
const app = express();
const port = 3000;
  
app.get('/', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello From Express!</h1>  <h2>Fast, unopinionated, minimalist web framework</h2>");
   
});
app.get('/api', (req, res)=>{
  res.set('Content-Type', 'text/html');
  res.status(200).send("<h1>APIs</h1>  <p>With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy</p>");
 
});
app.get('/performance', (req, res)=>{
  res.set('Content-Type', 'text/html');
  res.status(200).send("<h1>Performance!</h1>  <h2>Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.</h2>");
 
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})