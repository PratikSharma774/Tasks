const http = require('http');
console.log("rama");
const server = http.createServer((req,res)=>{
res.end("hello")

});
server.listen(8080,()=>{
console.log("server running");
});