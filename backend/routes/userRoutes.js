const express = require("express");

const {
  getUserProfile,
  updateUserProfile,
  changePassword,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
router.put("/password", protect, changePassword);

module.exports = router;