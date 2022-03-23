const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')

const app = express()

app.use(express.json())

const MONGO_URI =
  "mongodb+srv://solomon:solomontest@cluster0.4cupn.mongodb.net/kodecamp?retryWrites=true&w=majority"

app.use('/user', user)

mongoose.connect(MONGO_URI).then((res) => {
    console.log(res)
    app.listen(3000, () => {console.log('Listening')})
})

console.log('first')