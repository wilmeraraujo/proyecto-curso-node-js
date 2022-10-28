const express = require('express');
const app = express();

//Routers
const routerProgramacion= require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);
const routerMatematicas= require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

//routing
/*app.get('/', (req,res) => {
    res.send('Mi primer servidor expres. Cursos.');
});*/
/*
app.get('/api/cursos', (req,res) => {
    res.send(JSON.stringify(infoCursos));
});*/

/*app.get('/api/cursos/programacion', (req,res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});*/

/*
app.get('/api/cursos/matematicas', (req,res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});*/
/*app.get('/api/cursos/matematicas/:tema', (req,res) => {
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);
    if (resultados.length === 0 ){
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    res.send(JSON.stringify(resultados));
});*/
//remplzamos la route creada api/cursos/programacion  => routeProgramacion guarda esa ruta 

/*app.get('/api/cursos/programacion/:tema/:nivel', (req,res) => {
    const nivel = req.params.nivel;
    const tema = req.params.tema;
    const resultados = infoCursos.programacion.filter(curso => curso.tema === tema && curso.nivel === nivel);
    if (resultados.length === 0 ){
        return res.status(404).send(`No se encontraron cursos de ${tema} de nivel ${nivel}`);
    }
    res.send(JSON.stringify(resultados));
});*/
/*
app.get('/api/cursos/programacion/:lenguaje', (req,res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.tema === lenguaje);
    if (resultados.length === 0){
        return res.status(404).send(`No se encontratron cursos de: ${lenguaje}`);
    }
    res.send(JSON.stringify(resultados));
});*/

const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}...`);
});
