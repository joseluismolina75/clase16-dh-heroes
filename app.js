const express = require('express');
const path = require('path');

const app = express();

//configuramos donde está nuestra carpeta estática
app.use(express.static(path.join(__dirname, 'public'))) 

    app.get('/', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
    });

        app.get('/babbage', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'babbage.html'));
    });

        app.get('/berners-lee', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'berners-lee.html'));
    });

        app.get('/clarke', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'clarke.html'));
    });

        app.get('/hamilton', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'hamilton.html'));
    });

        app.get('/hopper', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'hopper.html'));
    });

        app.get('/lovelace', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'lovelace.html'));
    });

        app.get('/turing', (req, res) => {
        //res.send('Hola Mundo');
        res.sendFile(path.join(__dirname, 'views', 'turing.html'));
    });


const port = 3030
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
}
);