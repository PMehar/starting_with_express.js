const express = require('express'); //express package
const bodyParser = require('body-parser');

const app = express();//running express as a function

app.use(bodyParser.urlencoded({extended: true}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product"method="POST"><input type="text" name="title" placeholder="Add product" required><input type="number" name="size" placeholder= "Add size"><button type ="submit" required>Add Product</button></input></form>');
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello From Express!</h1>');
});

app.listen(3000);