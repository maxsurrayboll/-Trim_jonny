import express from 'express';
import {configDotenv} from 'dotenv';
configDotenv();

const app = express();
const port = process.env.PUERTO || 3000;

app.get("/", (_, res) => {
    res.send("Aprendicez ficha 3407186");
});

app.get("/ruta1", (req, res) => {
    //templesss
    res.send("<h1>Usando res, send</h1>");
});

app.get("/ruta2", (req, res)=> {
    //templesss
res.send({"dev":"node --watch app.js", "scripts": "node app.js" });
});

app.get("/ruta3/:nombre/:apellido/:apellido2/:edad", (req, res)=> {
    //templesss rutas dinamicas
     const nameUsuario = req.params.nombre;
     const apellido = req.params.apellido;
     const apellido2 = req.params.apellido2;
     const edad = req.params.edad;
res.json({"usuario":nameUsuario, "apellido": apellido, "segundo_apellido": apellido2, "edad": edad});

});

app.get("/ruta4", (req, res)=> {
    //
     const numeros=req.query.phone || 3223064658
     const orden=req.query.orden || "sin orden"
     const pagina= req.query.pagina || 1
    res.send(`<h1>listado de aprendicez</h1>
    <h2>listado en orden: ${orden}</h2>
    <h3>pagina: ${pagina}</h3>
    <h3>numero: ${numeros}</h3>
    `);
    })



app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto: http://localhost:${port}`);
});