const http = require('http');
//solicitud
/*const servidor = http.createServer((req,res) => {
    console.log('===> req (Solicitud)');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.end('hola mundo');
});*/
//respuesta
const servidor = http.createServer((req,res) => {
    console.log('===> res (Respuesta)');
    //console.log(res.statusCode);// 200 OK
    res.setHeader('content-type','application/json');
    console.log(res.getHeaders());
    //res.statusCode = 404;
    //console.log(res.statusCode);// 404 not found
    res.end('hola mundo');
});

const PUERTO = 3000;

servidor.listen(PUERTO,() =>{
    console.log(`El servidor esta escuchando en: http://localhost:${PUERTO}...`);
});