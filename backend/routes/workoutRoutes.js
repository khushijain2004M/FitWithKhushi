const express = require("express");

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
  getTodayWorkout,
  getWeeklyWorkouts,
} = require("../controllers/workoutController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Protect all workout routes
router.use(protect);

//
// 🟢 TODAY WORKOUT (derived endpoint)
//
router.get("/today", getTodayWorkout);

//
// 🟢 WEEKLY WORKOUTS (derived endpoint)
//
router.get("/weekly", getWeeklyWorkouts);

//
// 🟢 COLLECTION ROUTE (CRUD)
//
router.route("/")
  .post(createWorkout)
  .get(getWorkouts);

//
// 🟢 SINGLE WORKOUT CRUD
//
router.route("/:id")
  .get(getWorkout)
  .put(updateWorkout)
  .delete(deleteWorkout);

module.exports = router;