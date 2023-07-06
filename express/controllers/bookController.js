const manager = require("../routes/manager/manager.js");

const bookController = {
  createBook(req, res) {
    const user = manager.getUserById(req.params.userId);
    const { bookName } = req.body;
    let book = { bookName };
    book = manager.createBook(book);
    user.books.push(book);
    res.send(book);
  },
  getBooks(req, res) {
    const user = manager.getUserById(req.params.userId);
    res.send(user.books);
  },
  getBookById(req, res) {
    const user = manager.getUserById(req.params.userId);
    const book = manager.getBookById(user, req.params.bookId);
    book ? res.send(book) : res.status(404).send("book not found");
  },
  updateBook(req, res) {
    const user = manager.getUserById(req.params.userId);
    const book = manager.getBookById(user, req.params.bookId);
    const { bookName } = req.body;
    book.bookName = bookName;
    res.send(user);
  },
  deleteBook(req, res) {
    const userId = req.params.userId;
    const bookId = req.params.bookId;
    const user = manager.getUserById(userId);
    const books = user.books;
    const deletedUser = manager.deleteBook(bookId, books);
    res.send(deletedUser)
  },
};

module.exports = bookController;
