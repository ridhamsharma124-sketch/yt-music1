const express = require('express')
const app = express()

const cors = require('cors');
const AuthRoutes = require('./routes/AuthRoutes');
require("dotenv").config();

require("./database/index")


app.use(express.json());   // 👈 VERY IMPORTANT
app.use(express.urlencoded({ extended: true })); // optional
app.use(cors())
app.get ('/', (req,res)=>{
    res.send ("Radhey-Radhey")
}); 




app.use("/auth",AuthRoutes)
app.listen (process.env.PORT,process.env.HOST,()=>{
    console.log(`Server is running on http://${process.env.HOST}:${process.env.PORT}`)
}) 