const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {
  userValidationRules,
  checkValidationResult,
} = require("../middlewares/validateUser");

router.get("/", userController.getUsers);

router.post(
  "/",
  userValidationRules,
  checkValidationResult,
  userController.createUser
);

router.put(
  "/:id",
  userValidationRules,
  checkValidationResult,
  userController.updateUser
);

router.delete("/:id", userController.deleteUser);

module.exports = router;
