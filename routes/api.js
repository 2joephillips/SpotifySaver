const express = require('express');
const request = require('request');
const router = express.Router();

const URL = 'https://sheets.googleapis.com/v4/spreadsheets/';
const SpreadSheet = '<SpreadSheet>';
const Values = '/values/Sheet1!A2:F?';
const API = 'key=<Key>'

const FULLURL = URL + SpreadSheet + Values + API
/* GET api listing. */
router.get('/api/', (req, res) => {
    res.send('api works');
});

/* Get all users. */
router.get('/api/songs', (req, res) => {
    request( FULLURL , 
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response);
            console.log(body);
            res.send(body).status(200)
        }
    })
});


module.exports = router;