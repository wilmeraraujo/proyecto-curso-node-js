//archivo javascritp objeto
let infoCurso = {
    "titulo": "Aprende node.js",
    "numeroVistas": 45642,
    "numLikes": 21123,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
}; 
console.log(infoCurso);
console.log(typeof infoCurso);
//se pasas de objeto a cadena de caracteres con JSON.stringify
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

//se pasa de cadena de caracteres a objeto de javascript=> JSON.parse
let infoCursoObjecto=JSON.parse(infoCursoJSON);
console.log(infoCursoObjecto);
console.log(infoCursoObjecto.titulo);