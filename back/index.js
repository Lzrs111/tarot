import express from "express"
import fs from "fs"
var app = express()

app.use('/',express.static(__dirname)).listen(process.env.PORT || 3000,()=>{console.log('server started =)')})

app.get("/cards",(req,res)=>{
  fs.readFile("./build/cards.txt",(err,data)=>{
        data = data.toString()
        res.write(data)
        res.end()
        })

    })