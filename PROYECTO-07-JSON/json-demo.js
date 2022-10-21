//cuando importamos un json automaticamente requiere lo convierte
//en objeto de javascript
const curso = require('./curso.json');
//imprimir
console.log(curso);
//ver tipo de dato
console.log(typeof curso);
//acceder a las propiedades
console.log(curso.titulo);
console.log(curso.temas);
