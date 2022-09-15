// Using repl in JavaScript file
const local = require('repl');
const process = require('process');
[1,2,3].length
// => 3

var a = { num: 1, obj: {}, arr: [{}, 3, "asd", {q: 3}, 1] }
a.arr.length
process.on('exit', function () {
  console.log("exited")
  });

local.start('$ '); // Starting a REPL session
  console.clear();
  process.argv();
  console.trace();
console.log(data.length);
console.log()