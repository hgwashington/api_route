require('dotenv').config()


const pgp = require('pg-promise')({
    query: (e)=>{
        console.log(e.query)
    }
})
//++++++++++++++++++++REFACTORED VERSION OF SETTING DB TO EQUAL PGP BELOW
// const configure = {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME
// }
// const db = pgp(configure);

const db = pgp({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})
// console.log(db)

module.exports = db