var readline = require('readline');
  
var rl = readline.createInterface(
     process.stdin, process.stdout);

rl.question('What is your age? ', (age) => {
    console.log('Your age is: ' + age);
});
var r2 = readline.createInterface(
    process.stdin, process.stdout);

r1.question('What is your birth date? ', (date) => {
   console.log('Birth datew  is: ' + date);
});