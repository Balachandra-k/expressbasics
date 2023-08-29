const express = require('express')

const port = 4567

const app = express()

//settings of body parser

app.use(express.urlencoded({extended : true})) // to receive  from data from front end
app.use(express.json())//outgoing 

app.post(`/api/auth/login`,(req,res)=>{
    const data = req.body /* recives incoming data from frontend
    */
   return res.status(200).json({login:data})
})
app.listen(port,()=>{
    console.log(`server is started @http://localhost${port}`)
})