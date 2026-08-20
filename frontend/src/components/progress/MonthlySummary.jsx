import {
  Dumbbell,
  Flame,
  TrendingDown,
  Trophy,
} from "lucide-react";

function MonthlySummary() {
  const stats = [
    {
      title: "Workouts",
      value: "24",
      icon: Dumbbell,
      bg: "bg-emerald-100",
      color: "text-emerald-600",
    },
    {
      title: "Calories",
      value: "18,450",
      icon: Flame,
      bg: "bg-orange-100",
      color: "text-orange-600",
    },
    {
      title: "Weight Lost",
      value: "1.2kg",
      icon: TrendingDown,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "Avg Score",
      value: "87",
      icon: Trophy,
      bg: "bg-violet-100",
      color: "text-violet-600",
    },
  ];

  return (
    <div
      className="
      bg-white
      rounded-[28px]
      border
      border-slate-200
      shadow-sm
      p-5
      "
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-4">
        Monthly Summary
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
              bg-slate-50
              rounded-2xl
              p-3
              border
              border-slate-100
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">
                    {item.title}
                  </p>

                  <h4 className="text-lg font-bold mt-1 text-slate-900">
                    {item.value}
                  </h4>
                </div>

                <div
                  className={`
                  w-8
                  h-8
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  ${item.bg}
                  `}
                >
                  <Icon
                    size={14}
                    className={item.color}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MonthlySummary;