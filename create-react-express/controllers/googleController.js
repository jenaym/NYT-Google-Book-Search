const db = require("../models");
const axios = require("axios");

// Google Books API call + results

module.exports = {
    findAll: function(req, res) {
        const { query: params } = req;
        const URL = "https://www.googleapis.com/books/v1/volumes";
        
        axios.get(URL, {params})
        .then(results =>
            results.data.items.filter(
                // book => 
                // book.volumeInfo.title && book.volumeInfo.authors &&
                // book.volumeInfo.description && book.volumeInfo.infoLinks &&
                // book.volumeInfo.imageLinks.thumbnail
                result =>
                result.volumeInfo.title &&
                result.volumeInfo.infoLink &&
                result.volumeInfo.authors &&
                result.volumeInfo.description &&
                result.volumeInfo.imageLinks &&
                result.volumeInfo.imageLinks.thumbnail
            )
        )
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