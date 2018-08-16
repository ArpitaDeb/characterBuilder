const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.use('/assets', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

