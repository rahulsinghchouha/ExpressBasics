const express = require("express");
const app =express();

const PORT = 3000;

//adding middleware
app.use(express.json());

//get request

app.get("/",(req,res)=>{
    res.send("This is heading");
})

app.post("/car",(req,res)=>{

    res.send("Recieved a post request ");

});

app.listen(PORT,()=>{
    console.log("App started");
})

