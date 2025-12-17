// 6) Create an EventEmitter instance, Register an event "greet" and print a message when
// triggered. Fire that event manually using .emit().(B)
// const { log } = require("console");

const EventEmitter=require("events");
const emitter=new EventEmitter();

emitter.on('greet',(name)=>{
    console.log(`Hello ${name}`);
    
})
emitter.emit('greet','Radhika');

setInterval(()=>{
    emitter.emit('greet','World');
},1000);