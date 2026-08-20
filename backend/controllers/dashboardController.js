const Workout = require("../models/Workout");
const Nutrition = require("../models/Nutrition");
const Progress = require("../models/Progress");
const User = require("../models/User");

const asyncHandler = require("../utils/asyncHandler");


exports.getDashboard = asyncHandler(async (req, res) => {

  const userId = req.user._id;


  // User
  const user = await User.findById(userId)
    .select("-password");



  // Workout Stats
  const totalWorkouts = await Workout.countDocuments({
    user: userId,
  });


  const completedWorkouts = await Workout.countDocuments({
    user: userId,
    completed: true,
  });



  // Recent Workouts
  const recentWorkouts = await Workout.find({
    user: userId,
  })
    .sort({
      createdAt: -1,
    })
    .limit(5);



  // Latest Progress
  const latestProgress = await Progress.findOne({
    user: userId,
  })
    .sort({
      date: -1,
    });



  // Today's Nutrition
  const today = new Date();

  today.setHours(
    0,
    0,
    0,
    0
  );


  const todayNutrition = await Nutrition.findOne({

    user:userId,

    date:{
      $gte:today,
    },

  });





  // Last 7 Days Workouts
  const weekStart = new Date();

  weekStart.setDate(
    weekStart.getDate() - 6
  );

  weekStart.setHours(
    0,
    0,
    0,
    0
  );



  const weeklyWorkouts = await Workout.find({

    user:userId,

    createdAt:{
      $gte:weekStart,
    },

  });






  // Weekly Activity (Monday -> Sunday)

  const weeklyActivity = [];


  const weekDays = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];



  // Find Monday of current week

  const currentDate = new Date();

  currentDate.setHours(
    0,
    0,
    0,
    0
  );


  const currentDay =
    currentDate.getDay();


  const mondayOffset =
    currentDay === 0
      ? -6
      : 1 - currentDay;



  const monday = new Date(currentDate);


  monday.setDate(
    monday.getDate() + mondayOffset
  );




  for(let i = 0; i < 7; i++){


    const day = new Date(monday);


    day.setDate(
      monday.getDate() + i
    );



    const nextDay = new Date(day);


    nextDay.setDate(
      nextDay.getDate() + 1
    );




    const workouts =
      weeklyWorkouts.filter(

        (workout)=>

          workout.createdAt >= day &&

          workout.createdAt < nextDay

      );




    weeklyActivity.push({

      day: weekDays[i],


      workouts: workouts.length,


      calories:

        workouts.reduce(

          (sum, workout)=>

            sum + workout.caloriesBurned,

          0

        ),

    });


  }







  const weeklyCalories =

    weeklyActivity.reduce(

      (sum, day)=>

        sum + day.calories,

      0

    );







  // Completion Rate

  const completionRate =

    totalWorkouts === 0

      ? 0

      :

      Math.round(

        (completedWorkouts / totalWorkouts) * 100

      );






  // Temporary streak calculation

  const streak =
    completedWorkouts;


  const streakProgress =

    Math.min(

      (streak / 10) * 100,

      100

    );


  const weeklyGrowth = 2;







  res.status(200).json({

    success:true,


    user,


    stats:{


      totalWorkouts,


      completedWorkouts,


      completionRate,


      weeklyCalories,


      todayCalories:
        todayNutrition?.calories || 0,


      currentWeight:
        latestProgress?.weight || 0,


      fitnessScore:
        latestProgress?.fitnessScore || 0,


      streak,


      streakProgress,


      weeklyGrowth,

    },



    recentWorkouts,


    latestProgress,


    todayNutrition,


    weeklyActivity,


  });


});