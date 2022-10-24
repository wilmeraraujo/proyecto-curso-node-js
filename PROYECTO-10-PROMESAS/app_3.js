function ordenarProducto(producto){
    return new Promise((resolve,reject) => {
        console.log(`Ordenando: ${producto} de ejemplo.`);
        setTimeout(() => {
            if(producto === 'taza'){
                resolve('Ordenando una taza con el logo de ejemplo');
            }else{
                reject('Este producto no esta disponible actualmente');    
            }
        },1000) ;
    });
}

function procesarPedido(respuesta){
    return new Promise(resolve => {
        console.log('Procesando respuesta');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(() => {
            resolve('Gracias por tu compra, disfruta tu producto');
        }, 2000);
    });
}
//primera forma = >encadenar promesas
//ordenando procesos asyncronos 
/*ordenarProducto('taza')
    .then(respuesta => {
        console.log('Respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta); 
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada);
    })
    .catch(error => {
        console.log(error);
    });
*/
//segunda forma y mas adecuada 0 usar async await
async function realizarPedido(producto){
    try {
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recibida');
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
}

realizarPedido('taza');