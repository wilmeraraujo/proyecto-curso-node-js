const express = require('express');
const {programacion} = require('../datos/cursos.js').infoCursos;
const routerProgramacion = express.Router();
//procesa el cuerpo de la solicitud en formato jsony poderlo trabajar
//Middleware => estan fuinciones se ejecutan despues de recibit una solicitud y antes de enviar una respuesta
routerProgramacion.use(express.json());

routerProgramacion.get('/', (req,res) => {
    //res.send(JSON.stringify(programacion));
    res.json(programacion);
});

routerProgramacion.get('/:tema', (req,res) => {
    const tema = req.params.tema;
    const resultados = programacion.filter(curso => curso.tema === tema);
    if (resultados.length === 0 ){
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
        //return res.status(404).end();
    }
    if(req.query.ordenar == 'vistas'){//ordenar de mayor a menor
        return res.send(JSON.stringify(resultados.sort((a,b) => a.vistas - b.vistas)));
    }
    //res.send(JSON.stringify(resultados));
    res.json(resultados);
});

routerProgramacion.get('/:tema/:nivel', (req,res) => {
    const nivel = req.params.nivel;
    const tema = req.params.tema;
    const resultados = programacion.filter(curso => curso.tema === tema && curso.nivel === nivel);
    if (resultados.length === 0 ){
        return res.status(404).send(`No se encontraron cursos de ${tema} de nivel ${nivel}`);
    }
    //res.send(JSON.stringify(resultados));
    res.json(resultados);
});
/*
routerProgramacion.get('/:lenguaje', (req,res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.tema === lenguaje);
    if (resultados.length === 0){
        return res.status(404).send(`No se encontratron cursos de: ${lenguaje}`);
    }
    res.send(JSON.stringify(resultados));
});*/
//agregar nuevo curso
routerProgramacion.post('/', (req,res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    //res.send(JSON.stringify(programacion));
    res.json(programacion);
});

routerProgramacion.put('/:id', (req,res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;
    
    const indice = programacion.findIndex(curso => curso .id == id);
    if (indice >= 0){
        programacion[indice] = cursoActualizado;
    }
    //res.send(JSON.stringify(programacion));
    res.json(programacion);
});

routerProgramacion.patch('/:id', (req,res) => {
    const infoActualizada = req.body;
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);
    if (indice >= 0){
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar,infoActualizada);
    } 
    //res.send(JSON.stringify(programacion));
    res.json(programacion);
});

routerProgramacion.delete(':/id', (req,res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);
    
    if (indice >= 0){
        programacion.splice(indice, 1);
    }
    //res.send(JSON.stringify(programacion));
    res.json(programacion);
});

module.exports = routerProgramacion;