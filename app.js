const express = require('express')
const collection1  = require('./mongo')
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(express.urlencoded(({extended:true})))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})
app.post("/",async(req,res)=>{
    const{email,pass} = req.body

    try {
        const check = await collection1.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    } catch (error) {
        res.json("notexist")
    }

})
app.post("/signup",async(req,res)=>{
    const{email,pass} = req.body

    const data = {
        email:email,
        pass:pass
    }

    try {
        const check = await collection1.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection1.insertMany({data})
        }
    } catch (error) {
        res.json("notexist")
    }

})
app.listen(8000,()=>{
    console.log("the port is connected");
})
