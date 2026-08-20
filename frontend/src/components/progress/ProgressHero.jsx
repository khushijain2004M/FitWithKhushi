import {
  TrendingUp,
  Dumbbell,
  Target,
  Trophy,
} from "lucide-react";

function ProgressHero() {
  return (
    <div
      className="
      relative
      overflow-hidden
      bg-white
      rounded-[28px]
      border
      border-slate-200
      shadow-sm
      p-5
      "
    >
      {/* Background Accent */}
      <div
        className="
        absolute
        top-0
        right-0
        w-32
        h-32
        bg-blue-100
        rounded-full
        blur-3xl
        opacity-40
        -translate-y-16
        translate-x-16
        "
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-blue-600 text-sm font-medium">
              Overall Progress
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              You're making great progress! 🔥
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Weight down 1.2kg • Strength up 18%
            </p>
          </div>

          <button
            className="
            px-3
            py-1.5
            rounded-xl
            border
            border-slate-200
            bg-orange-300
            text-xs
            font-medium
            hover:bg-blue-300
            transition
            "
          >
            This Month
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-2">
              <Target
                size={14}
                className="text-white"
              />
            </div>

            <p className="text-xs text-slate-500">
              Weight Lost
            </p>

            <h4 className="text-xl font-bold text-slate-900">
              1.2kg
            </h4>
          </div>

          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-2">
              <Dumbbell
                size={14}
                className="text-white"
              />
            </div>

            <p className="text-xs text-slate-500">
              Workouts
            </p>

            <h4 className="text-xl font-bold text-slate-900">
              24
            </h4>
          </div>

          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-2">
              <Trophy
                size={14}
                className="text-white"
              />
            </div>

            <p className="text-xs text-slate-500">
              Fitness Score
            </p>

            <h4 className="text-xl font-bold text-slate-900">
              87
            </h4>
          </div>

          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-2">
              <TrendingUp
                size={14}
                className="text-white"
              />
            </div>

            <p className="text-xs text-slate-500">
              Growth
            </p>

            <h4 className="text-xl font-bold text-slate-900">
              +18%
            </h4>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-5">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-slate-600">
              Monthly Goal Progress
            </span>

            <span className="text-xs font-semibold text-blue-600">
              78%
            </span>
          </div>

          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-[78%] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressHero;