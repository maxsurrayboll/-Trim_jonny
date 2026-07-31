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

// Taller: Hacer LOS 3 PRIMEROS 

//Punto 1
app.get("/ruta1taller/:saludo/:nombre", (req, res) =>
{
    const saludo = req.params.saludo;
    const nombre = req.params.nombre;
    res.json({
        saludo,
        nombre
    })
})

// Punto 2
app.get("/ruta2taller/:productos/:nombre", (req, res) => {
    const productos = req.params.productos;
    const nombre = req.params.nombre;

    res.json({
        productos,
        nombre
    });
});

//Punto 3
app.get("/ruta3taller", (req, res) => {
    const productos = req.query.productos || "Frijoles";
    const categoria = req.query.categoria || "Granos";
    const id = req.query.id || 66;

    res.json({
        productos,
        categoria,
        id
    });
});



app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto: http://localhost:${port}`);
});