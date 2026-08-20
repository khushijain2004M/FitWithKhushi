const Nutrition = require("../models/Nutrition");
const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");

//
// 🟢 CREATE NUTRITION ENTRY
//
exports.createNutrition = asyncHandler(async (req, res, next) => {
  const nutrition = await Nutrition.create({
    ...req.body,
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    nutrition,
  });
});

//
// 🟢 GET ALL NUTRITION ENTRIES
//
exports.getNutritions = asyncHandler(async (req, res, next) => {
  const nutritions = await Nutrition.find({
    user: req.user._id,
  }).sort({ date: -1 });

  res.status(200).json({
    success: true,
    count: nutritions.length,
    nutritions,
  });
});

//
// 🟢 GET SINGLE ENTRY
//
exports.getNutrition = asyncHandler(async (req, res, next) => {
  const nutrition = await Nutrition.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!nutrition) {
    return next(new AppError("Nutrition record not found", 404));
  }

  res.status(200).json({
    success: true,
    nutrition,
  });
});

//
// 🟢 UPDATE ENTRY
//
exports.updateNutrition = asyncHandler(async (req, res, next) => {
  const nutrition = await Nutrition.findOneAndUpdate(
    {
      _id: req.params.id,
      user: req.user._id,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!nutrition) {
    return next(new AppError("Nutrition record not found", 404));
  }

  res.status(200).json({
    success: true,
    nutrition,
  });
});

//
// 🟢 DELETE ENTRY
//
exports.deleteNutrition = asyncHandler(async (req, res, next) => {
  const nutrition = await Nutrition.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!nutrition) {
    return next(new AppError("Nutrition record not found", 404));
  }

  await nutrition.deleteOne();

  res.status(200).json({
    success: true,
    message: "Nutrition record deleted successfully",
  });
});

//
// 🟢 TODAY NUTRITION (UI DERIVED)
//
exports.getTodayNutrition = asyncHandler(async (req, res, next) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const nutrition = await Nutrition.findOne({
    user: req.user._id,
    date: { $gte: start, $lte: end },
  }).sort({ date: -1 });

  res.status(200).json({
    success: true,
    nutrition: nutrition || null,
  });
});

//
// 🟢 WEEKLY NUTRITION (UI DERIVED)
//
exports.getWeeklyNutrition = asyncHandler(async (req, res, next) => {
  const today = new Date();
  const pastWeek = new Date();
  pastWeek.setDate(today.getDate() - 7);

  const logs = await Nutrition.find({
    user: req.user._id,
    date: { $gte: pastWeek, $lte: today },
  }).sort({ date: 1 });

  const grouped = {};

  logs.forEach((entry) => {
    const day = new Date(entry.date).toLocaleDateString("en-US", {
      weekday: "short",
    });

    if (!grouped[day]) {
      grouped[day] = {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
      };
    }

    grouped[day].calories += entry.calories || 0;
    grouped[day].protein += entry.protein || 0;
    grouped[day].carbs += entry.carbs || 0;
    grouped[day].fat += entry.fat || 0;
  });

  res.status(200).json({
    success: true,
    weekly: grouped,
  });
});