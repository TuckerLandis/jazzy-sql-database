const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

// pg config
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
    
    let queryText = `SELECT * FROM "artist" ORDER BY "birthdate" DESC;`

    pool.query(queryText)
        .then((result) => {

            res.send(result.rows);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
});

app.post('/artist', (req, res) => {
    console.log('req.body', req.body)

    let queryText = `INSERT INTO "artist" ("name", "birthdate") 
    VALUES ($1, $2);`

    let values = [req.body.name, req.body.birthdate];

    pool.query(queryText, values)
        .then((result) => {
            res.sendStatus(201);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
});


// song routes
app.get('/song', (req, res) => {
    console.log(`In /songs GET`);
    let queryText = `SELECT * FROM "song" ORDER BY "title" DESC;`

    pool.query(queryText)
        .then((result) => {

            res.send(result.rows);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
});


app.post('/song', (req, res) => {
    console.log('req.body', req.body)

    let queryText = `INSERT INTO "song" ("title", "length", "released") 
    VALUES ($1, $2, $3);`

    let values = [req.body.title, req.body.released, req.body.released];

    pool.query(queryText, values)
        .then((result) => {
            res.sendStatus(201);

        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
});