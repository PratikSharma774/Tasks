const { Console } = require("console");

console.trace();

function test(){
    for(let i = 0; i < 1000000000; i++){
    
    }
  }
  let start = Date.now();
  test();
  let timeTaken = Date.now() - start;
  console.log("Total time taken : " + timeTaken + " milliseconds");
  Console.log("Application started \e[0;32m" );
    console.log("Deleted \e[0;31m");