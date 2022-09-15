const http = require('http');
const url = require('url');
const port = 1337;
const host = 'localhost';

const server = http.createServer(function (req, res) {
    console.log("rama");
    const parsedURL = url.parse(req.url, true);
    if (parsedURL.pathname == '/echo' && parsedURL.query.message) {
        res.end(parsedURL.query.message);
    } else {
        res.end("Page not found");
    }
});

server.listen(port, host, function () {
    console.log('Web server is running on port 1337');
});