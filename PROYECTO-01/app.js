//const saludo = require("./saludos.js");

//sintaxis de destructuracion para llamar un modulo en especifico
const {saludar,saludarHolaMundo}= require("./saludos.js");
//console.log(saludo);
//obtener modulos exportados
//console.log(saludo.saludar("hola wilmer"));
//console.log(saludo.saludarHolaMundo());
//para sintaxis de destructuracion
console.log(saludar("hola wilmer"));
console.log(saludarHolaMundo());
//
//otra manera de importar modulos

//los modulos built-in ya vienen incorporados en node no hay necesidad de instalarlos
//entre ellos:
/**
 * http
 * https
 * fs(file system)
 * os(operating system)
 * path
*/
