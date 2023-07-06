const bookController = require("../controllers/bookController");
const express = require("express");
const router = express.Router();

router
  .route("/users/:userId/books")
  .post(validateBook,bookController.createBook)
  .get(bookController.getBooks);

router
  .route("/users/:userId/books/:bookId")
  .get(bookController.getBookById)
  .put(validateBook,bookController.updateBook)
  .delete(bookController.deleteBook);


  
function validateBook(req, res, next) {
  const {bookName} = req.body;
  console.log(bookName)
  console.log(typeof bookName)

  if (!bookName || typeof bookName !== 'string' ) {
    res.status(404).send("wrong data");
  } else {
    next();
  }
}


module.exports = router;
