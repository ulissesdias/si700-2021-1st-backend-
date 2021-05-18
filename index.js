const express = require('express');
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());
app.listen(3000);


app.get('/', function(req, res){res.send('Hello world')});

/*
  Servidor propriamente dito
*/

const notes = [
    {id: 0, title: "Vinícius Nonato Rodrigues", description : "Aluno da Unicamp feliz"},
    {id: 1, title: "Carolina da Silva Sancho", description : "Aluna da Unicamp não tão feliz"}
]

const endpoint = "/notes";

app.get(endpoint, function(req, res){
    res.send(notes);
});

app.get(`${endpoint}/:id`, function(req, res){
    const id = req.params.id;
    const note = notes[id];

    if (!note){
        res.send("{}");
    } else {
        res.send(note);
    }   
});