const express = require('express')

const {products,users} = require('./doc/data')
const port = 3045

const app = express()

//static
    app.use(express.static('./doc'))

 app.get('/',(req,res)=>{
    return res.status(200).json({msg : "home page"})
 })

 //all products

 app.get('/api/products',(req,res)=> {
    return res.status(200).json({length:products.length,products})
 })

 //all users
 app.get('/api/users',(req,res)=> {
    return res.status(200).json({length:users.length,products})
 })

 //single product
app.get(`api/products/:productId`, (req, res)=>{
    const id = req.params.productId;
    const fproduct = products.find((item)=> item.id === Number(id))
    if(!fproduct)
    return res.status(404).json({msg: `requseted id =${id} not exists`})
res.status(200).json({products:fproduct})
})
app.listen(port, ()=>{
    console.log(`server is started @ http://localhost:${port}`)
})