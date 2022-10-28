const  http = require('http');
const  {infoCursos} = require('./cursos');


const servidor =  http.createServer((req,res) => {
    const {method} = req;
    switch(method){
        case 'GET':
            return manejarSolicitudGET(req,res);
        case 'POST':
            return manejarSolicitudPOST(req,res);
        default:
            res.statusCode = 501;
            res.end(`El metodo no puede ser usado por el servidor: ${method}`);
    }
});

const PUERTO = 3000;
servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});

function manejarSolicitudGET(req,res){
    const path = req.url;
    if (path === '/'){
        res.writeHead(200,{'Content-Type':'application/json'});
        //res.statusCode = 200;   //--> se asigna por default
        return res.end('Bievenidos... API con node.js');
    } else if (path === '/cursos') {
        //res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos));
    } else if (path === '/cursos/programacion') {
        //res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.programacion));
    }
    res.statusCode = 404;
    res.end('Recurso solicitado no existe...');
};

function manejarSolicitudPOST(req,res){
    const path = req.url;
    if(path === '/cursos/programacion'){
        let cuerpo = '';
        req.on('data', contenido => { 
            cuerpo += contenido.toString()
        });                
        req.on('end', () => { 
            console.log(cuerpo);
            console.log(typeof cuerpo);
            //convertir a un objeto de javascript.
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);
            res.end('El servidor recibio una solicitud POST para /cursos/programacion');
         });                
    }
}