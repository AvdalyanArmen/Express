const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();

router
  .route("/users")
  .post(validateUserBody, userController.createUser)
  .get(userController.getUsers);

router
  .route("/users/:userId")
  .get(userController.getUserById)
  .put(validateUserBody, userController.updateUser)
  .delete(userController.deleteUser);

function validateUserBody(req, res, next) {
  const { name, surname } = req.body;
  if (
    !name ||
    !surname ||
    typeof name !== "string" ||
    typeof surname !== "string"
  ) {
    res.status(404).send("wrong data");
  } else {
    next();
  }
}

module.exports = router;
