const users = [];

const uuid = require("uuid");
const { v4 } = uuid;

const obj = {
  createUser(user) {
    user.id = v4();
    users.push(user);
    return user;
  },
  getUserById(id) {
    const userById = users.find((user) => user.id === id);
    return userById;
  },
  getUsers() {
    return users;
  },
  updateUser(user, updateUser) {
    user.name = updateUser.name;
    user.surname = updateUser.surname;
  },
  deleteUser(id) {
    const userIndex = manager.users.findIndex((user) => user.id === id);
    const deletedUser = users.splice(userIndex, 1);
    return deletedUser;
  },
  getBookById(user, bookId) {
    const bookById = user.books.find((book) => book.id == bookId);
    return bookById;
  },
  createBook(book) {
    book.id = v4();
    return book;
  },
  deleteBook(bookId,books) {
    const bookIndex = books.findIndex((book) => book.id === bookId);
    const deletedBook = books.splice(bookIndex, 1);
    return deletedBook;
  },
};

module.exports = obj;
