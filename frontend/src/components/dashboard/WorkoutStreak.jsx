import { Flame, Trophy, TrendingUp } from "lucide-react";

function WorkoutStreak({ stats }) {
  const streak = stats?.streak ?? 0;
  const weeklyGrowth = stats?.weeklyGrowth ?? 0;
  const progress = stats?.streakProgress ?? 0;

  const circumference = 2 * Math.PI * 90;
  const offset =
    circumference - (progress / 100) * circumference;

  return (
    <div
      className="
      bg-white
      rounded-[28px]
      border
      border-slate-200
      shadow-sm
      p-6
      h-[350px]
      relative
      overflow-hidden
    "
    >
      <div
        className="
        absolute
        -top-10
        -right-10
        w-40
        h-40
        bg-orange-100
        rounded-full
        blur-3xl
        opacity-50"
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Workout Streak
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Consistency tracker
            </p>
          </div>

          <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
            <Trophy
              size={20}
              className="text-orange-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-6">
          <div className="relative w-48 h-48">
            <svg
              viewBox="0 0 220 220"
              className="w-full h-full -rotate-90"
            >
              <circle
                cx="110"
                cy="110"
                r="90"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="14"
              />

              <circle
                cx="110"
                cy="110"
                r="90"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Flame
                  size={28}
                  className="text-orange-500"
                />
              </div>

              <h1 className="text-5xl font-bold text-slate-900 mt-4">
                {streak}
              </h1>

              <p className="text-slate-500">
                Days
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-2">
          <TrendingUp
            size={16}
            className="text-emerald-500"
          />

          <span className="text-sm font-medium text-emerald-500">
            +{weeklyGrowth} days this week
          </span>
        </div>
      </div>
    </div>
  );
}

export default WorkoutStreak;