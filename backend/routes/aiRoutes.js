const express = require("express");

const {
  getReadiness,
  getRecovery,
  getWeeklyPlan,
  chatCoach,
} = require("../controllers/aiController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// protect all AI routes
router.use(protect);

//
// 🟢 AI ROUTES
//
router.get("/readiness", getReadiness);
router.get("/recovery", getRecovery);
router.get("/weekly-plan", getWeeklyPlan);
router.post("/chat", chatCoach);

module.exports = router;