const http = require('http');
const fs = require('fs');
console.log("rama");

const server = http.createServer((req,res)=>{
res.end("hello")

var stream=fs.createReadStream('files.txt')
stream.on('data', function (chunk) {
    console.log(chunk.toString());
});


});
server.listen(8080,()=>{
console.log("server running");
});
