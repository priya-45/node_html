const express=require('express')
// const path=require("path");

const app =express()
// const publicpath=path.join(__dirname,"public");

app.set("view engine",'ejs');
app.set("view engine","pug")
// app.get('',(_,res)=>{
//     res.sendFile(`${publicpath}/remo_html_exte.html`)
// })

app.get('/profile',(_,res)=>{
    const user={
        name:"priya",
        email:"priya21@navgurukul.org",
        number:"xyz",
        contry:["india","pak","aafinistan","england"]
    }
    res.render('profile',{user})
})
app.get("/login",(_,res)=>{
    res.render("login")
})
app.listen(4000)






// app.get('/second',(_,res)=>{
//     res.sendFile(`${publicpath}/sec_page.html`)
// })
// app.get('/third',(_,res)=>{
//     res.sendFile(`${publicpath}/thir_page.html`)
// })
// app.get('*',(_,res)=>{
//     res.sendFile(`${publicpath}/404.html`)
// })



