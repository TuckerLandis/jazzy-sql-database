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

module.exports = pool;