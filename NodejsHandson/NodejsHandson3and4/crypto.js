const crypto = require ("crypto");
var hash = crypto.createHash('sha512');
//passing the data to be hashed
data = hash.update('pipe.txt', 'utf-8');
//Creating the hash in the required format
gen_hash= data.digest('hex');
console.log("hash : " + gen_hash);