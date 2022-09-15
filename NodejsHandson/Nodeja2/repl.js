function myDisplayer(some) {
    console.log(some);
  }
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("I am getting resolved");
    } else {
      myReject("I am getting rejected");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  

  const promise1 = Promise.resolve(123);

  promise1.then((value) => {
    console.log(value);
    // expected output: 123
  });
  
  
  
//   While a Promise object is "pending" (working), the result is undefined.

//   When a Promise object is "fulfilled", the result is a value.
  
//   When a Promise object is "rejected", the result is an error object.