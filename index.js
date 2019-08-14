//const http = require('http');
//replace hhtp with express;
const express = require('express')
const Note = require('./models/Note')
console.log(Note);
//create the server and call it app
const app = express()
//variable for the port num
const port = 3001

app.get('/notes/:noteID',(req,res)=>{
    // console.log('you asked for a specific note')
    // console.log(req.params.noteID)
    // res.send('The id: ' + req.params.noteID)
    const theID = parseInt(req.params.noteID, 10)
    console.log(theID)
    const aNote  = Note.getOne(theID);
    // console.log(aNote)
    aNote
        .then(data =>{
            console.log(data)
            res.json(data)
    })
})
// server.listen(3000)
app.listen(port)


// const server = http.createServer((req, res)=>{
    //replace with app.get

//  app.get('/notes',(req, res)=>{
//     console.log('you got a request')
//     const allNotes = Notes.getAll();
//     allNotes
//     .then((data)=>{
//         console.log(`OMG DATAZZZZ! `)
//         console.log(data)
//         // res.end(JSON.stringify(data))
//         res.json(data)
//             })})
    
// function getOne(id){
//     // console.log('Hello World');
//     return db.one(`select * from notes where id=$1`,[id])
//     .then(data=>{
//     console.log(data)
//     })
//     .catch(err=>{
//         console.log(`OH NOOO!`)
//             console.log(err)
//     })
// }
                                                    
