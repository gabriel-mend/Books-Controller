const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    sku:{
        type: String
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    launch: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("Book", bookSchema)
