const express = require('express');
const logger = require('morgan');
const app = express();
const port = 3050;
const maDate = new Date();
const square = require('./square');
const wiki = require('./wiki.js');

// const PostgressClient = require('postgres').PostgressClient;

// PostgressClient.connect('postgres://localhost:27017/animals',
//     function (err, db) {
//         if (err) throw err;

//         db.collection('mammals').find().toArray(function (err, result) {
//             if (err) throw err;
//             console.log(result);

//         });

//     });

app.get('/', (req, res,) => {
    // res.sendFile(__dirname + "/index.html")
    res.send('Hello World!' + ' ' + 'Nous sommes' + ' ' + maDate + " " + 'Annette Bwemere à votre service + l\'aire d\'un carré dont la largeur est de 4 est la suivante' + ' ' + square.area(4))
});

app.all('/secret', (req, res, next) => {
    console.log('Accès à la section secrète....');
    next();
})

app.use('/wiki', wiki);

app.use(logger('dev'));

app.use(express.static('public'));
app.use(express.static('media', express.static('public')));



app.listen(port, () => {
    console.log(`Application exemple à l'écoute sur le port ${port}!`)
});
