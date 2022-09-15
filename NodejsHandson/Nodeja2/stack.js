// Call Stack
function f1() {
    console.log('Hi by f1!');
  }
    
  function f2() {
    f1();
    console.log('Hi by f2!');
  }
    
  f2();
//   Call back Functions
console.log("John");
const message = function() {  
    console.log("This message is shown after 5 seconds");
}
 console.log("snow");
setTimeout(message, 5000);
// It happens beacuse Javascript Asynchronously execurtes the function and messages so completing next line whifunctionle processing 