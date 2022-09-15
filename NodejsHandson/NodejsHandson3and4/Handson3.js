const fs=require('fs');
var path=require('path');
const os=require('os');

//os modules
console.log(os.hostname);
console.log(os.platform);
console.log(os.release);
console.log(os.freemem);
console.log(os.cpus);
console.log(os.hostname);
//event emitter 
// Import events module
//--------------------------------------------------------
 var events = require('events');

// Create an eventEmitter object
var ee = new events.EventEmitter();
//creating event handlers
const step1=()=>{console.log("Start a Car")}
const step2=()=>{console.log("Select Your Gear")}
const step3=()=>{console.log("Release the Parking Brake")}
const step4=()=>{console.log("Set a Car in Motion")}
const step5=()=>{console.log("Use Natural Gears")}
const step6=()=>{console.log("Use low gears")}
const step7=()=>{console.log("Stop a Car")}
const step8=()=>{console.log("Drive in reverse gears")}
const step9=()=>{console.log("Parka Car")}
//register event handler
ee.on('step1',step1)
ee.on('step2',step2)
ee.on('step3',step3)
ee.on('step4',step4)
ee.on('step5',step5)
ee.on('step6',step6)
ee.on('step7',step7)
ee.on('step8',step8)
ee.on('step9',step9)
//Trigger event
ee.emit('step1')
ee.emit('step2')
ee.emit('step3')
ee.emit('step4')
ee.emit('step5')
ee.emit('step6')
ee.emit('step7')
ee.emit('step8')
ee.emit('step9')
//read file from stream
var stream=fs.createReadStream('files.txt')
var write=fs.createWriteStream('pipe.txt')

stream.pipe(write);


