const EventEmitter = require('events')

const ev = new EventEmitter();

ev.on('custev1', function(result){
    console.log(result);
})

ev.on('custev1', function(result){
    console.log(result + " something");
})

ev.emit('custev1', 'payload');

