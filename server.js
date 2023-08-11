const express = require("express")
const app= express()
const connectdb = require("./config/connectdb")
require("dotenv").config();
const port = 4700
const appRoutes= require("./routes/appRouter")

 // connect bd
 connectdb()
 app.use(express.json());

app.use('/api',appRoutes)
  //Listen to port 4500
  app.listen(port,(err)=>{
    err
    ?console.log(err)
    :console.log(`We are running on.. http://localhost:${port}`)

  })