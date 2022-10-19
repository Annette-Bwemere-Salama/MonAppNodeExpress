
const express = require('express');
const router = express.Router();

//Route vers la page d'acceuil

router.get('/', (req, res) => {
    // res.send('Page d\'accueil WikiAnnette bwemere');
    res.sendFile(__dirname + "/components/pages/index.html")
});


//Router vers la page ) propos

router.get('/about', (req, res) => {
    // res.send('À propos de ce Wiki ');
    res.sendFile(__dirname + "/components/pages/index.html")

});

module.exports = router