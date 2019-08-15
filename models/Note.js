db = require('../export_datbase');

module.exports.getOne = (id) => {
    // console.log('Hello World');
    return db.one(`select * from notes where id=$1`,[id])
    .catch(err=>{
        console.log(`OH NOOO!`)
            console.log(err)
    })
}

// module.exports = { getOne };   ///did not work withou{} 