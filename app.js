const express = require('express'); //express package

const app = express();//running express as a function
const value = "book";

app.use((req,res,next)=>{
    console.log('In the middleware!');
    next(); //to allow the req to go on to the next middleware in line 
});
app.use((req,res,next)=>{
    console.log('In another middleware!');
    //res.send('<h1>Hello From Express!</h1>');
    res.send( { key1: value }) 
});

app.listen(3000);