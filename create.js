const express=require('express')
const path=require("path");
port=5055
const app =express()
const publicpath=path.join(__dirname,"public");
console.log(publicpath)

app.use(express.static(publicpath))
app.get("/about.htm",(req,res)=>{
    res.send("Hello World")
})



app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})


// 4060
//    localhost:5050/home.html    if you to acess home file so you write like that

//     localhost:5050/about.html    if you to acess about file so you write like that
