/*const estatusPedido = () => {
    const estatus = Math.random() < 0.8;
    console.log(estatus);
    return estatus;
};
//imprimir resultado aleatorio
for (let i = 0; i < 5; i++){
    console.log(estatusPedido());
};*/

const estatusPedido = () => {
    return Math.random() < 0.8;
};
console.log(estatusPedido());
const miPedidoDePizza = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        if(estatusPedido()){
            resolve('¡Pedido exitoso!');
        } else{
            reject('¡Ocurrio un error, por favor intente nuevamente!');
        }
    },1000);
});
/*
const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
}
const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError);
}

miPedidoDePizza.then(manejarPedido,rechazarPedido);
*/
/*miPedidoDePizza
    .then((mensajeDeConfirmacion) =>{
        console.log(mensajeDeConfirmacion);
    })
    .then(null,(mensajeDeError) =>{
        console.log(mensajeDeError);
    });
 */
miPedidoDePizza
.then((mensajeDeConfirmacion) =>{
    console.log(mensajeDeConfirmacion);
})
.catch((mensajeDeError) =>{
    console.log(mensajeDeError);
});   
