
const express=require("express")
const fs=require("fs")
const cors=require("cors")

const app=express()

app.use(cors())
app.use(express.json())

app.get("/getData",(req,res)=>{
fs.readFile("data.json","utf8",(err,data)=>{
if(err) return res.send([])
res.send(JSON.parse(data))
})
})

app.post("/saveData",(req,res)=>{
fs.readFile("data.json","utf8",(err,data)=>{
let json=[]
if(data) json=JSON.parse(data)
json.push(req.body)
fs.writeFile("data.json",JSON.stringify(json),()=>{
res.send("saved")
})
})
})

app.listen(5000)
