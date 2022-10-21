//MODULO JS =>
//los metodos de este modulo son ASINCRONOS por defecto
/**
 * operaciones con archivos
 * leer
 * modificar
 * copiar
 * eliminar
 * cambiar nombre
*/
//nota se puede convertir estos metodos a sincronos
//NOTA= las funcoines asincronas no se ejecutan en orden
const  fs = require('fs');
//LEER ARCHIVO
fs.readFile('index.html','utf-8',(err,contenido) =>{
    if(err){
        console.log(err);
    }else{
        console.log(contenido);
    }    
});
//throw => permite que se detenga la ejecucion
/*fs.readFile('index.html','utf-8',(err,contenido) =>{
    if(err){
        throw err;
    }else{
        console.log(contenido);
    }    
});*/

//RENOMBRAR ARCHIVO
/*fs.rename('index.html','main.html', (err) => {
    if (err){
        throw err;
    }else{
        console.log("El nombrse cambio exitosamente");
    }
});*/

//AGREGAR CONTENIDO AL FINAL DE UN ARCHIVO
/*fs.appendFile('index.html','<p>linea nueva agregada</p>',(err) =>{
    if (err) {
        throw err;
    }else{
        console.log('Archivo actualizado.');
    }
});*/

//REMPLAZAR CONTENIDO DEL ARCHIVO
/*fs.writeFile('index.html','Contenido nuevo',(err)=>{
    if (err) {
        throw err;
    }else{
        console.log('Contenido remplazado exitosamente');
    }
});*/

//ELIMINAR ARCHIVOS
/*fs.unlink('main.html',()=>{
    if(err){
        throw err;
    }else{
        console.log('El archivo fue eliminado exitosamente');
    }
});*/

/********************************************************************** */
//CONVERTIR FUNCIONES ASINCRONAS
//LEER UN ARCHIVO
/*console.log('antes de leer el archivo...');
const archivo = fs.readFileSync('index.html','utf-8'); 
console.log(archivo);
console.log('despues de leer el archivo...');
//CAMBIAR NOMBRE AL ARCHIVO
console.log('antes de leer el archivo...');
fs.renameSync('index.html','main.html');
console.log('despues de cambiar el archivo...');

//AGREGAR CONTENIDO AL FINAL DE UN ARCHIVO
fs.appendFileSync('index.html','<p>linea nueva agregada</p>');

//REMPLAZAR CONTENIDO DEL ARCHIVO
fs.writeFileSync('index.html','Contenido nuevo');

//ELIMINAR ARCHIVOS
fs.unlinkSync('main.html');*/