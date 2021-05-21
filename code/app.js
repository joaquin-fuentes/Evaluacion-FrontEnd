const express = require("express")
const app = express()

app.listen(process.env.PORT || 3000,()=>{
    console.log("servidor corriendo en puerto 3000")
})


app.use(express.static('public'))



app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html')
});

app.get('/R2', (req,res)=>{
    res.sendFile(__dirname + '/views/R2.html')
});

app.get('/R3', (req,res)=>{
    res.sendFile(__dirname + '/views/R3.html')
});

app.get('/R4', (req,res)=>{
    res.sendFile(__dirname + '/views/R4.html')
});
