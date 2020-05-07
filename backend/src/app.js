const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://Admin:admin@books-ie22t.gcp.mongodb.net/test?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false 
})

app.use(cors())
app.use(express.json())
app.use(routes)

module.exports = app
