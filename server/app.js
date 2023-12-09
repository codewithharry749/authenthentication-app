const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


const dbconnect = require('./db/conne');
app.use(express.json());
app.use(require('./router/auth'));


app.get('/',(req,res)=>{
    res.send("hello from home")
});

app.get('/signup',(req,res)=>{
    res.send("hello from home")
});

dbconnect();

app.listen(port , '127.0.0.1' , ()=>{
    console.log(`we are live at port ${port} `);
});