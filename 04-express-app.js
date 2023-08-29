const express = require('express')

const path = require('path')

const app = express()

//configure settings to make folder  as static 

app.use(express.static('./doc'))

app.get(`/`,(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./doc/index.html'))
})
app.get(`/about`,(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./doc/about.html'))
})
app.get(`/contatct`,(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./doc/contatct.html'))
})
app.all(`*`,(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./doc/pnf.html'))
})
app.listen(3504,()=>{
    console.log(`server is started and running @http://localhost:3504`)
})
/*
    app.use() => middlewares /defult route / settings
    app.set() => config settings
    app.get() => get request
    app.post() => post request
    app.all() =>
    */
