const express = require("express");
const router = express.Router();
const pool = require('../modules/pools');

router.get('/', (req, res) => {
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


router.post('/', (req, res) => {
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

module.exports = router