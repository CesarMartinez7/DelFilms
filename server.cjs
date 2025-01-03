const express = require("express")
const path = require("node:path")


const PORT = process.env.PORT || 3000 



const app = express()


app.use(express.json())
app.use(express.static(path.join(__dirname,"dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"dist","index.html"))
})


app.listen(PORT,()=>{
    console.log("Server is running on port:          3000")
    console.log("Listening on:                       http://localhost:3000")
})