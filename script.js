const express = require('express')
const app = express()
const mongoose = require('mongoose')
const data = {user:"abhi",password:"123"}
const loginmodel = require('./Mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/Login');

app.post('/',async(req,res)=>
{
    console.log(record)

    const response = await loginmodel.insertMany({
        user:"fknd",
        password:"123"
    });
    
    console.log(response);
    res.json({ status : "ok" })
})

app.listen(5000,()=>{
    console.log("port is running");
})