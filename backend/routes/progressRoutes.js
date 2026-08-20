const express = require("express");

const {
  createProgress,
  getProgresses,
  getProgress,
  updateProgress,
  deleteProgress,
  getLatestProgress,
} = require("../controllers/progressController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// ALL routes are protected
router.use(protect);

/**
 * MAIN COLLECTION ROUTE
 */
router.route("/")
  .post(createProgress)
  .get(getProgresses);

/**
 * LATEST PROGRESS (IMPORTANT FIX)
 * MUST be ABOVE /:id to avoid being caught as param
 */
router.get("/latest", getLatestProgress);

/**
 * SINGLE PROGRESS CRUD
 */
router.route("/:id")
  .get(getProgress)
  .put(updateProgress)
  .delete(deleteProgress);

module.exports = router;