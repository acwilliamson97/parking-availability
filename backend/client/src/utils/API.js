import axios from "axios";



export default {
    // Gets all books
    getBooks: function() {
      return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function(id) {
      return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
    }
  };


/*
export default {

GET
getManager(id)
getUser(id)
getGarage(id)
getSpot(id)
getSpots
getGarages

POST
addGarage
addSpot
addManager
addUser

PUT
addSpotToUser
addGarageToUser
addUserToGarage

}

*/