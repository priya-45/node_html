const express=require('express')
const path=require("path");

const app =express()
const publicpath=path.join(__dirname,"public");
console.log(publicpath)

app.get('',(_,res)=>{
    res.sendFile(`${publicpath}/remo_html_exte.html`)
})

app.get('/second',(_,res)=>{
    res.sendFile(`${publicpath}/sec_page.html`)
})
app.get('/third',(_,res)=>{
    res.sendFile(`${publicpath}/thir_page.html`)
})
app.get('*',(_,res)=>{
    res.sendFile(`${publicpath}/404.html`)
})
app.listen(4080)