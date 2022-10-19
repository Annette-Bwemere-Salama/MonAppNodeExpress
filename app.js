const express = require('express');
// const logger = require('morgan');
const app = express();
const port = 3070;
// const maDate = new Date();
// const square = require('./square');
const wiki = require('./wiki.js');



app.get('/', (req, res,) => {
    res.sendFile(__dirname + "/public/index.html")
    // res.send('Hello World!' + ' ' + 'Nous sommes' + ' ' + maDate + " " + 'Annette Bwemere à votre service + l\'aire d\'un carré dont la largeur est de 4 est la suivante' + ' ' + square.area(4))
});


app.use('/wiki', wiki);

// app.use(logger('dev'));

// app.use(express.static('public'));
// app.use(express.static('media', express.static('public')));



app.listen(port, () => {
    console.log(`Application exemple à l'écoute sur le port ${port}!`)
});
