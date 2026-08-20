import { Flame, TrendingUp } from "lucide-react";

function WorkoutConsistency() {
  return (
    <div
      className="
      bg-orange-50
      rounded-[28px]
      border
      border-orange-100
      shadow-sm
      p-5
      hover:-translate-y-1
      hover:shadow-lg
      transition-all
      duration-300
      pb-2
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">
          Workout Consistency
        </h3>

        <div
          className="
          w-8
          h-8
          rounded-xl
          bg-gradient-to-br
          from-orange-500
          to-red-500
          flex
          items-center
          justify-center
          "
        >
          <Flame
            size={16}
            className="text-white"
          />
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-5xl font-bold text-orange-500 leading-none">
          14
        </h2>

        <p className="text-slate-600 mt-1 font-medium text-sm">
          Day Workout Streak
        </p>

        <div
          className="
          inline-flex
          items-center
          gap-1
          mt-2
          text-xs
          font-medium
          text-emerald-600
          "
        >
          <TrendingUp size={12} />
          +3 days from last month
        </div>
      </div>

      <div className="mt-5">
        <div className="flex justify-between text-xs mb-3">
          <span className="text-slate-500">
            Monthly Consistency
          </span>

          <span className="font-semibold text-orange-500">
            70%
          </span>
        </div>

        <div className="h-2 bg-white rounded-full overflow-hidden">
          <div className="h-full w-[70%] bg-orange-500 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-8">
        <div className="bg-white rounded-xl px-3 py-2 border border-orange-100">
          <p className="text-[11px] text-slate-500">
            Workouts
          </p>

          <h4 className="font-bold text-base mt-1">
            24
          </h4>
        </div>

        <div className="bg-white rounded-xl px-3 py-2 border border-orange-100">
          <p className="text-[11px] text-slate-500">
            Goal
          </p>

          <h4 className="font-bold text-base mt-1">
            30
          </h4>
        </div>

        <div className="bg-white rounded-xl px-3 py-2 border border-orange-100">
          <p className="text-[11px] text-slate-500">
            Rate
          </p>

          <h4 className="font-bold text-base mt-1">
            80%
          </h4>
        </div>
      </div>
    </div>
  );
}

export default WorkoutConsistency;