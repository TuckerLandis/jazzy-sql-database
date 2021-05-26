const express = require("express");
const router = express.Router();
const pool = require('../modules/pools');


router.get('/', (req, res) => {
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

router.post('/', (req, res) => {
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

module.exports = router;