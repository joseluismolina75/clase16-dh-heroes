const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
        res.send('Hola Mundo');
    });

const port = 3030
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
}
);