const db = require("../models");
const axios = require("axios");

// Google Books API call + results

module.exports = {
    findBooks: function(req, res) {
        const { query: params } = req;
        const URL = "https://www.googleapis.com/books/v1/volumes";
        
        axios.get(URL, {params})
        .then(function(results) {
            let bookResults = results.data.items;
            bookResults.filter(function(book) {
                book.volumeInfo.title && book.volumeInfo.authors &&
                book.volumeInfo.description && book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail
            })
        })
        .then(function(apiBooks) {
            db.Book.find().then(dbModel =>
                apiBooks.filter(apiBook =>
                    dbModel.every(dbBook =>
                        dbBook.googleBookId.toString() !== apiBook.id)))
        })
        .then(function(allBooks) {
            res.json(allBooks)
        })
        .catch(function(err) {
            res.status(422).json(err)
        });
    }
}