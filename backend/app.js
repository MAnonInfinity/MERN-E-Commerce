require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 8000

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.log('DB CONNECTED')
    })
    .catch((err) => {
        console.log(err)
    })


app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
})