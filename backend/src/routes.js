const { Router } = require('express')

const BookController = require('./controllers/bookController')

const routes = Router()

routes.get('/books', BookController.index)
routes.post('/books', BookController.create)
routes.put('/books/:id', BookController.update)
routes.delete('/books/:id', BookController.delete)

module.exports = routes