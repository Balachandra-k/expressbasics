const express = require('express')

const port = 400
 let {users} = require('./doc/data')
const app = express()

//statc
app.use(express.static('./doc'))

//body parser

app.use(express.urlencoded({extended:true}))/* encode and parse from data */
app.use(express.json()) //parse json

//to read all users - get

app.get('/api/users',(req,res)=>{
    res.status(200).json({length:users.length,users})
})

//read single user - get

app.get('/api/users/id:',(req,res)=>{
    let id = req.params.id
    let user = users.find((item) => item.id == id)
    if (!user)
    return res.status(401).json({msg:`requsted user id not found`})
})

