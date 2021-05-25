const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

// pg stuff
const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    database: 'jazzy-sql',
    host: 'localhost',
    port: 5432,
})

pool.on('connect', () => {
    console.log('Connected to PG');
})

pool.on('error', (err) => {
    console.log('Error to PG', err);
})

//artist routes

app.get('/artist', (req, res) => {
    console.log(`In /songs GET`);
   // res.send(artistList);
    let queryText = `SELECT * FROM "artist" ORDER BY "birthdate" DESC;`

    pool.query(queryText)
    .then( (result) => {
        res.send(result.rows);
    }).catch (err => {
        console.log(err);
        res.sendStatus(500);
    })


});

app.post('/artist', (req, res) => {
    artistList.push(req.body);
  //  res.sendStatus(201);
});

// song routes

app.get('/song', (req, res) => {
    console.log(`In /songs GET`);
  //  res.send(songList);
});

app.post('/song', (req, res) => {
    songList.push(req.body);
   // res.sendStatus(201);
});


