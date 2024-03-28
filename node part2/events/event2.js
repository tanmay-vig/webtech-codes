const eventEmitter = require('events');
const event = new eventEmitter();

event.on('SaymyName', (fanme , lname) => {
    console.log(`My name is ${fanme} ${lname}`);
});

event.emit('SaymyName', 'John', 'Doe');