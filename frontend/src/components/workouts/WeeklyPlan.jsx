import { ChevronRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

function WeeklyPlan() {
  const plan = [
    {
      day: "Monday",
      workout: "Push Day",
      status: "Completed",
    },
    {
      day: "Tuesday",
      workout: "Pull Day",
      status: "Today",
    },
    {
      day: "Wednesday",
      workout: "Leg Day",
      status: "Upcoming",
    },
    {
      day: "Thursday",
      workout: "Cardio",
      status: "Upcoming",
    },
    {
      day: "Friday",
      workout: "Upper Body",
      status: "Upcoming",
    },
    {
      day: "Saturday",
      workout: "Core & Mobility",
      status: "Upcoming",
    },
    {
      day: "Sunday",
      workout: "Recovery",
      status: "Upcoming",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-100 text-emerald-700";
      case "Today":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="
      bg-white
      rounded-[28px]
      border
      border-slate-200
      shadow-sm
      p-6
      "
    >
      <h2 className="text-xl font-semibold text-slate-900">
        Weekly Plan
      </h2>

      <p className="text-sm text-slate-500 mt-1 mb-6">
        Your training schedule for the week
      </p>

      <div className="space-y-3">
        {plan.map((item) => (
          <div
            key={item.day}
            className="
            flex
            items-center
            justify-between
            p-4
            rounded-2xl
            bg-slate-50
            hover:bg-slate-100
            transition-all
            "
          >
            <div>
              <h4 className="font-medium text-slate-900">
                {item.day}
              </h4>

              <p className="text-sm text-slate-500">
                {item.workout}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                  ${getStatusStyle(item.status)}
                `}
              >
                {item.status}
              </span>

              <ChevronRight
                size={18}
                className="text-slate-400"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default WeeklyPlan;