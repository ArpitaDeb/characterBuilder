const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.set('view engine', 'pug');

app.listen(process.env.PORT || port, () => {
    console.log(`Server running on port ${port}`);
});



app.get('/', (req, res) => {
    res.render('index', {});
});


app.get('/final', (req,res) => {
    res.render('finalSummary',{});
});
