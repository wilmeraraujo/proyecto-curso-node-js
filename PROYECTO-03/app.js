
//MODULO PROCESS

//console.log(process);
// env => environment => el ambiente 
//console.log(process.env);
//console.log(process.argv);
//console.log(process.argv[2]);
/*for (let i = 2; i < process.argv.length;i++){
    console.log(process.argv[i]);
}*/
//cuanta memoria se esta usando
//console.log(process.memoryUsage());

//MODULO OS
//se debe importarlo
/*const os = require('os');
console.log(os.type());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.userInfo());*/

//MODULO TIMER => temporizador o cronometro =>retrazar ejecucion
/**
 * setTimeout()
 * setImmediate()
 * setInterval()
 */
//setTimeout()
//1 segundo = 1000 milisegundos
/*function mostrarTema(tema){
    console.log(`estoy aprendiendo ${tema}`);
}
setTimeout(mostrarTema,2000,'Temas Node.js')*/
/*function sumar(a,b){
    console.log(a+b);
}

setTimeout(sumar,3000,5,6);*/

//setImmediate();=> inmediato
/*function mostrarTemas(tema){
    console.log(`Estoy aprendiendo ${tema}`);
};
//primero se ejecuta lo codigos sincronos luego los asincronos

console.log('antes de setImmediate()');

setImmediate(mostrarTemas,'Tema Node.js');

console.log('Despues de setImmediate()');*/


//setInterval()
function mostrarTemas(tema){
    console.log(`Ejecucion tras un periodo ${tema}`);
};
setInterval(mostrarTemas,1000,'tema Node.js');