const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// });

app.post('/', (req, res) => {
    res.send('This is a POST');
});

app.post('submitCharClass', (req, res) => {
    console.log('Class Submitted')
})
