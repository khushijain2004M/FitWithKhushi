const express = require("express");

const {
    registerUser,
    verifyEmail,
    resendVerification,
    loginUser,
    forgotPassword,
    resetPassword,
    getCurrentUser,
    logoutUser,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

const validate = require("../middleware/validationMiddleware");

const {
    registerValidation,
    loginValidation,
    emailValidation,
    tokenValidation,
    resetPasswordValidation,
} = require("../validations/authValidation");

const router = express.Router();

router.post(
    "/register",
    registerValidation,
    validate,
    registerUser
);

router.post("/verify-email", tokenValidation, validate, verifyEmail);
router.post("/resend-verification", emailValidation, validate, resendVerification);

router.post(
    "/login",
    loginValidation,
    validate,
    loginUser
);

router.post("/forgot-password", emailValidation, validate, forgotPassword);
router.post("/reset-password", resetPasswordValidation, validate, resetPassword);

router.get("/me", protect, getCurrentUser);

router.post("/logout", logoutUser);

module.exports = router;
