const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id)=>{
    console.log(`data received on ${name}, ${id}`)
});

customEmitter.on('response', ()=>{
        console.log(`response from normal emitter`);
})
customEmitter.emit('response', 'john', 123);