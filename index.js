const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.end('hello sir')
})

app.listen( 3000 ,(req,res)=>{
    console.log('http://localhost:3000')
})