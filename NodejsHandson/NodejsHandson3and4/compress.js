const zlib = require('zlib');  
const gzip = zlib.createGzip();   
const fs = require('fs');   
const inp = fs.createReadStream('tests.txt');   
const out = fs.createWriteStream('tests.txt.gz');   
inp.pipe(gzip).pipe(out); 