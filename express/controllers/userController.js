const manager = require("../routes/manager/manager.js");

const userController = {
  createUser(req, res) {
    const { name, surname } = req.body;
    let newUser = { name, surname, books: [] };
    newUser = manager.createUser(newUser);
    res.send(newUser);
  },
  getUserById(req, res) {
    const user = manager.getUserById(req.params.userId);
    user ? res.send(user) : res.status(404).send(`user not found`);
  },
  getUsers(req, res) {
    const users = manager.getUsers();
    res.send(users);
  },
  updateUser(req, res) {
    const user = manager.getUserById(req.params.userId);
    if (!user) {
      res.status(404).send(`user not found`);
    } else {
      const { name, surname } = req.body;
      const updateUser = { name, surname };
      manager.updateUser(user, updateUser);
      res.send(user);
    }
  },
  deleteUser(req, res) {
    const id = req.params.userId;
    const user = manager.getUserById(id);
    if (!user) {
      res.status(404).send(`user not found`);
      return;
    }

    const deletedUser = manager.deleteUser(id);
    res.send(deletedUser);
  },
};

module.exports = userController;
