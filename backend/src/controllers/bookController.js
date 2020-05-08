const Book = require('../models/bookModel')
const generateUniqueId = require('../utils/generateUniquedId')

module.exports = {
    async index(request, response) {
        try {
            let data = await Book.find()
            return response.status(200).send(data)
        } catch(e) {
            response.status(500).send({
                message: "Failed to process your request",
                data: e
            })
        }
    },
    async create(request, response) {
        try {
            const { title, author, price, launch } = request.body

            const sku = generateUniqueId()
            const book = new Book({
                title,
                sku: sku, 
                author,
                price,
                launch
            })
            await book.save()
            return response.status(201).send({
                message: "Created book success",
            })
        } catch(e) {
            response.status(500).send({
                message: "Failed to process your request",
                data: e
            })
        }
    },
    async update (request, response) {
        try {
            await Book.findByIdAndUpdate(request.params.id, {
                $set: {
                    title: request.body.title,
                    author: request.body.author,
                    price: request.body.price,
                    launch: request.body.launch
                }
            })
            return response.status(200).send({
                message: "Book successfully deleted",
            })
        } catch(e) {
            response.status(500).send({
                message: "Failed to process your request",
                data: e
            })
        }
    },
    async delete (request, response) {
        try {
            await Book.findByIdAndDelete(request.params.id)
            return response.status(200).send({
                message: "Book successfully deleted",
            })
        } catch(e) {
            response.status(500).send({
                message: "Failed to process your request",
                data: e
            })
        }
    }
}
