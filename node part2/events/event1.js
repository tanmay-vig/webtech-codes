const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('Saymyname', function () {
    console.log('My name is Node js!');
});

eventEmitter.emit('Saymyname');