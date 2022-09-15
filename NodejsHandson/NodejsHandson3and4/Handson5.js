const http = require('http');
console.log("rama");
const server = http.createServer((req,res)=>{
    if (req.url === '/Home') {
        res.end('<h1>Welcome to HOME page!</h1>')
        }
        else if(req.url =='/about'){
            res.end('<h1>vision -We envision becoming a global leader in Cloud Consultancy through our invaluable and trustworthy customer service and experience.</h1>'
            );
            req.end('<h2>Mission-As a trusted yet dynamic digital transformation partner – as dynamic as the cloud itself – we will continue to broaden the horizons of the business landscape through innovative and in-depth enterprise disruption.</h2?');
        }
        else if(req.url =='/contact')
        {
    res.end('Address-Hinjewedi  South Pune');
    res.end("phone No-9575159611");
    res.end('<a href="https://www.blazeclan.com/careers/"></a>');
    res.end("Email-Blazeclan@gmail.com");
        }
        else{
    res.end("Enter Valid end point")
        }

});
server.listen(8080,()=>{
console.log("server running");
});

