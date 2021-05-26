const express = require('express');
const bodyParser = require('body-parser');
const artistRt = require('./routes/artist')
const songRt = require('./routes/song')
const pool = require('./modules/pools');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

//routes
app.use('/artist', artistRt)
app.use('/song', songRt )

