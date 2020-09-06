const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//Express HBS Engine

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {

        nombre: 'pedro',

    });

})


app.get('/about', (req, res) => {

    res.render('about');

})



// app.get('/', (req, res) => {

//     let salida = {
//         nombre: 'javier',
//         edad: 32,
//         url: req.url
//     };

//     res.send(salida);

//     // res.send('Hello World')
// })

// app.get('/data', (req, res) => {

//     let salida = {
//         nombre: 'edilberto',
//         edad: 100,
//         url: req.url
//     };

//     res.send(salida);

//     // res.send('Hello World')
// })



app.listen(port, () => {

    console.log(`Escuchando peticiones en el puerto ${port}`);

});