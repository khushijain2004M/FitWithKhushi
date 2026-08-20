const express = require("express");

const {
  createNutrition,
  getNutritions,
  getNutrition,
  updateNutrition,
  deleteNutrition,
  getTodayNutrition,
  getWeeklyNutrition,
} = require("../controllers/nutritionController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(protect);

//
// 🟢 TODAY NUTRITION
//
router.get("/today", getTodayNutrition);

//
// 🟢 WEEKLY NUTRITION
//
router.get("/weekly", getWeeklyNutrition);

//
// 🟢 COLLECTION ROUTE
//
router.route("/")
  .post(createNutrition)
  .get(getNutritions);

//
// 🟢 SINGLE CRUD
//
router.route("/:id")
  .get(getNutrition)
  .put(updateNutrition)
  .delete(deleteNutrition);

module.exports = router;