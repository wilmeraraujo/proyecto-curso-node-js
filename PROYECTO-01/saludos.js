function saludar (nombre){
    return `Hola, ${nombre}`;
}
function saludarHolaMundo (){
    return `Hola mundo`;
}
//console.log(module.exports);
//exportar modulos
//module.exports.saludar = saludar;
//module.exports.saludarHolaMundo = saludarHolaMundo;
//otra manera de exportar es en objetos
module.exports = {
    saludar: saludar,
    saludarHolaMundo:saludarHolaMundo
}
//console.log(module.exports);