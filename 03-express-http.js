const express = require('express')

//ref

const app = express()

//app.request(route,controller callback)
app.get('/',(req,res)=> {
    res.status(200).json({msg:"you are in Home page"})
})
app.post(`/api/login`,(req,res)=>{
    res.status(200),json({msg:"you are login page"})
})
app.patch(`/api/user/edit/123`,(req,res)=>{
    res.status(200),json({msg:"you are in edit user route"})

})
app.delete(`/api/user/delete/:id`,(req,res)=>{
    res.status(200),json({msg:"you are in user delete route"})
})
app.all(`/*`,(req,res)=>{
    res.status(404),json({msg:"Request not found"})
})

app.listen(3503,()=>{
    console.log(`server is started and running @http://localhost:3503`)
})
/*  
  app.get => to send read request
  app.post => to send create request
  app.path
  app.put/path => to send update request
  app.delete => to send delete request
  app.all => defalut requestq
*/