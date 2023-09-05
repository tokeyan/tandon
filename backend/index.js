require('dotenv').config()
const express = require('express')
const app = express()
const {connect} = require('mongoose')

app.use(express.json())

app.use("/",require("./routes/auth"))
app.use("/user",require("./controller/userAction"))

connect(process.env.MongoDB,{
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(() => console.log("mongo db connected")).catch((err) => console.log(err));


app.listen(process.env.PORT,(err) => {
    if(err) throw err;
    console.log("port connected @ " + process.env.PORT)
})