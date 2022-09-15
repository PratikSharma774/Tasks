const http = require('http');
const fs=require('fs');
console.log("rama");
const server = http.createServer((req,res)=>{
if(req.url ="/userapi"){
fs.readFile(` ${__dirname}/UserApi/weather.json`,"utf-8",(err,data)=>
{
    console.log(data);
});
}

});
server.listen(8080,()=>{
console.log("server running");
});