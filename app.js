const express = require('express'); //express package
const bodyParser = require('body-parser');

const app = express();//running express as a function

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);