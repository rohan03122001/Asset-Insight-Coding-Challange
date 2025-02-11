/* 
    Validations
        Name    cant be empty
                min 2 and max 50
        email   should be EMAIL
                valid format
        role    must be the given role  
                Default to user
*/

const { body, validationResult } = require("express-validator");

const userValidationRules = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be 2-50 characters long"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Must be a valid email address")
    .normalizeEmail(),

  body("role")
    .optional()
    .isIn(["Admin", "User", "Editor"])
    .withMessage("Role must be Admin, User, or Editor"),
];

const checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  userValidationRules,
  checkValidationResult,
};
