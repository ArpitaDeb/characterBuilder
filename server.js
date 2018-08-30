const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.set('view engine', 'pug');

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/race',(req,res) => {
    res.render('chooseRace', {});
});

app.post('/', (req, res) => {
    res.send('This is a POST');
});

app.post('/submitCharClass', (req, res) => {
    console.log('Class Submitted')
})
