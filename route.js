const express=require("express")
const app=express();

app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/about",(req,res)=>{
    res.send("about page")
})
app.get("/contact",(req,res)=>{
    res.send("cantact page")
})
app.get("*",(req,res)=>{
    res.send("page not found")
})

app.listen(4000)