const eventEmitter = require('events');
const event = new eventEmitter();

event.on('SaymyName', (fanme , lname) => {
    console.log(`My name is ${fanme} ${lname}`);
});

event.on('SaymyName', (fanme)=> {
    console.log(`My name is ${fanme}`);
});

console.log("Display the msg before emit");
event.emit('SaymyName', 'John', 'Doe');