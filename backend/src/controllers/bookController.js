const Book = require('../models/bookModel')

exports.index = (req, res) => {
    Book
    .find()
    .then(data => {
        res.status(200).send(data)
    }).catch(e => {
        res.status(400).send(e)
    })
}

exports.create = (req, res) => {
    const book = new Book(req.body)
    book.save()
    .then(x => {
        res.status(201).send({ message: 'Created book success' })
    }).catch(e => {
        res.status(400).send({ message: 'Error creating book success', data: e })
    })
}

exports.update = (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            launch: req.body.launch
        }
    }).then(x => {
        res.status(200).send({ message: 'Updated book success' })
    }).catch(e => {
        res.status(400).send({ message: 'Error updating book', data: e})
    })
}

exports.delete = (req, res) => {
    Book.findOneAndRemove(req.params.id)
        .then(x => {
            res.status(200).send({ message: 'Deleted book success' })
        }).catch(e => {
            res.status(400).send({ message: 'Error deleting book', data: e})
        })
}