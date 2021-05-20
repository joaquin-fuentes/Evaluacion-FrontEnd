const express = require("express")
const app = express()

app.listen(3000, ()=>{
    console.log('Servidor corriendo en puerto 3000');
});


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/home.html');
});

app.get('/R2', (req,res)=>{
    res.sendFile(__dirname + '/SolicitudR2/R2.html');
});

app.get('/R3', (req,res)=>{
    res.sendFile(__dirname + '/SolicitudR3/R3.html');
});

app.get('/R4', (req,res)=>{
    res.sendFile(__dirname + '/SolicitudR4/R4.html');
});