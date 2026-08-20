const Workout = require("../models/Workout");
const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");

//
// 🟢 CREATE WORKOUT
//
exports.createWorkout = asyncHandler(async (req, res, next) => {
  const workout = await Workout.create({
    ...req.body,
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    workout,
  });
});

//
// 🟢 GET ALL WORKOUTS
//
exports.getWorkouts = asyncHandler(async (req, res, next) => {
  const workouts = await Workout.find({
    user: req.user._id,
  }).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: workouts.length,
    workouts,
  });
});

//
// 🟢 GET SINGLE WORKOUT
//
exports.getWorkout = asyncHandler(async (req, res, next) => {
  const workout = await Workout.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!workout) {
    return next(new AppError("Workout not found", 404));
  }

  res.status(200).json({
    success: true,
    workout,
  });
});

//
// 🟢 UPDATE WORKOUT
//
exports.updateWorkout = asyncHandler(async (req, res, next) => {
  const workout = await Workout.findOneAndUpdate(
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

  if (!workout) {
    return next(new AppError("Workout not found", 404));
  }

  res.status(200).json({
    success: true,
    workout,
  });
});

//
// 🟢 DELETE WORKOUT
//
exports.deleteWorkout = asyncHandler(async (req, res, next) => {
  const workout = await Workout.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!workout) {
    return next(new AppError("Workout not found", 404));
  }

  await workout.deleteOne();

  res.status(200).json({
    success: true,
    message: "Workout deleted successfully",
  });
});

//
// 🟢 GET TODAY WORKOUT (UI DERIVED ENDPOINT)
//
exports.getTodayWorkout = asyncHandler(async (req, res, next) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const workout = await Workout.findOne({
    user: req.user._id,
    createdAt: { $gte: start, $lte: end },
  }).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    workout: workout || null,
  });
});

//
// 🟢 GET WEEKLY WORKOUTS (UI DERIVED ENDPOINT)
//
exports.getWeeklyWorkouts = asyncHandler(async (req, res, next) => {
  const today = new Date();
  const pastWeek = new Date();
  pastWeek.setDate(today.getDate() - 7);

  const workouts = await Workout.find({
    user: req.user._id,
    createdAt: { $gte: pastWeek, $lte: today },
  }).sort({ createdAt: 1 });

  const grouped = {};

  workouts.forEach((w) => {
    const day = new Date(w.createdAt).toLocaleDateString("en-US", {
      weekday: "short",
    });

    if (!grouped[day]) grouped[day] = [];
    grouped[day].push(w);
  });

  res.status(200).json({
    success: true,
    weekly: grouped,
  });
});