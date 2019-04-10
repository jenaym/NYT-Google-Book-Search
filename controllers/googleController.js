const axios = require("axios");
const db = require("../models");


// Google Books API call + results

module.exports = {
    findAll: function(req, res) {
        const { query: params } = req;
        
        axios.get("https://www.googleapis.com/books/v1/volumes", {params})
        .then(results =>
            results.data.items.filter(
                result =>

                result.volumeInfo.title &&
                result.volumeInfo.authors &&
                result.volumeInfo.description &&
                result.volumeInfo.infoLink &&
                result.volumeInfo.imageLinks.thumbnail
            )
        )
        .then(apiBooks =>
            db.Book.find().then(dbBooks =>
                apiBooks.filter(apiBook =>
                    dbBooks.every(dbModel =>
                        dbModel.googleBookId.toString() !== apiBook.id)))
        )
        .then(books => res.json(books))
        .catch(function(err) {
            res.status(422).json(err)
        });
    }
}