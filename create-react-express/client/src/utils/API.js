import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },

};

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
  },
  // Gets the book with the given id
  getSavedBooks: function() {
    return axios.get("/api/books/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
