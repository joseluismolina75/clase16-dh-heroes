const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))


    app.get('/', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
    });

        app.get('/', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'babbage.html'));
    });

        app.get('/', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'berners-lee.html'));
    });

        app.get('/', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'clarke.html'));
    });

        app.get('/', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'hamilton.html'));
    });

        app.get('/', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'hopper.html'));
    });

        app.get('/', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
    });

        app.get('/', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
    });

        app.get('/', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
    });

const port = 3030
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
}
);