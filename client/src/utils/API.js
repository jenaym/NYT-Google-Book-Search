
import axios from "axios";


export default {
  // searches books using Google Books API
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q }});
  },
  // Saves a book to the database
  saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
  },
  // Gets Saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
