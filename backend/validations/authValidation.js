const { body } = require("express-validator");

exports.registerValidation = [
    body("fullName")
        .trim()
        .notEmpty()
        .withMessage("Full name is required")
        .isLength({ min: 3 })
        .withMessage("Full name must be at least 3 characters"),

    body("email")
        .trim()
        .isEmail()
        .withMessage("Please enter a valid email"),

    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
];

exports.loginValidation = [
    body("email")
        .trim()
        .isEmail()
        .withMessage("Please enter a valid email"),

    body("password")
        .notEmpty()
        .withMessage("Password is required"),
];

exports.emailValidation = [
    body("email")
        .trim()
        .isEmail()
        .withMessage("Please enter a valid email"),
];

exports.tokenValidation = [
    body("token")
        .trim()
        .notEmpty()
        .withMessage("A valid token is required"),
];

exports.resetPasswordValidation = [
    ...exports.tokenValidation,
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
];
