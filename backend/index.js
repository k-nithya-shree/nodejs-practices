const express = require ("express");
const cors = require ("cors");  
const app = express();
const options = {origin:"*"}
app.use(cors(options));
app.use(express.json())
let studentdata=[{name:"sound"},{age:19},{rollno:233304}]
app.get('/',(req,res)=>{
    res.send(studentdata)

})

app.post("/",(req,res)=>{
    studentdata.push(req,body)
    console.log(req.body)
    res.send("done")
})


const data=['name:santhya','age:18','favourite:noodles'];
app.get("/",(req,res)=>{
    res.send(data)
})

app.listen(3333,()=>{
    console.log("started")
})
