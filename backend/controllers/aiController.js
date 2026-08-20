const asyncHandler = require("../utils/asyncHandler");

//
// 🟢 AI READINESS SCORE
//
exports.getReadiness = asyncHandler(async (req, res) => {
  // simple placeholder logic (can later replace with ML model)
  const score = Math.floor(Math.random() * 40) + 60; // 60–100

  res.status(200).json({
    success: true,
    readiness: {
      score,
      label:
        score > 85
          ? "Excellent"
          : score > 70
          ? "Good"
          : "Moderate",
    },
  });
});

//
// 🟢 AI RECOVERY INSIGHT
//
exports.getRecovery = asyncHandler(async (req, res) => {
  const statusPool = ["Good", "Moderate", "Needs Rest"];
  const status =
    statusPool[Math.floor(Math.random() * statusPool.length)];

  res.status(200).json({
    success: true,
    recovery: {
      status,
      message:
        status === "Good"
          ? "You are fully recovered. Ready for high intensity training."
          : status === "Moderate"
          ? "Light workout recommended today."
          : "Rest day suggested for optimal recovery.",
    },
  });
});

//
// 🟢 AI WEEKLY PLAN
//
exports.getWeeklyPlan = asyncHandler(async (req, res) => {
  const plan = ["Push", "Pull", "Legs", "Cardio", "Rest", "Full Body", "Rest"];

  res.status(200).json({
    success: true,
    weeklyPlan: plan,
  });
});

//
// 🟢 AI CHAT (simple rule-based mock)
//
exports.chatCoach = asyncHandler(async (req, res) => {
  const { message } = req.body;

  let reply =
    "I’m your AI coach. Tell me more about your goal.";

  if (message?.toLowerCase().includes("fat")) {
    reply = "Focus on calorie deficit + cardio 3x per week.";
  }

  if (message?.toLowerCase().includes("muscle")) {
    reply = "Increase protein intake and follow progressive overload.";
  }

  if (message?.toLowerCase().includes("tired")) {
    reply = "Take a recovery day and prioritize sleep.";
  }

  res.status(200).json({
    success: true,
    reply,
  });
});