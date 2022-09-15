const fs = require('fs');  
  
fs.createReadStream('pipe.txt').pipe(fs.createWriteStream('pipes.txt'));