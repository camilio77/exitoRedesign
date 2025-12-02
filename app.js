const express = require('express')
const app = express();

app.use(express.static(process.env.EXPRESS_STATIC))

app.get('/home', function (req, res) {
    res.sendFile(`${process.env.EXPRESS_STATIC}/views/home.html`, {root: __dirname})
})

app.listen({host: process.env.EXPRESS_HOST, port: process.env.EXPRESS_PORT}, ()=>{
    console.log(`http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}/home`);
})