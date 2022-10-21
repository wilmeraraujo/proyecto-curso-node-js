//ver metodos que tiene events
//const EventEmitter = require('events');
//console.log(EventEmitter);

//por convencion los nombres de las clases inician en mayuscula 
const EventEmitter = require('events');
const emisorProductos = new EventEmitter();

emisorProductos.on('compra',(total,numProductos) => {
    console.log(`se realizo una compra $${total}.`);
    console.log(`Numero de productos ${numProductos}.`);
});
//emitir evento
emisorProductos.emit('compra',500,10);