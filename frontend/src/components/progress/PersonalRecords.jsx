import {
  Dumbbell,
  Flame,
  Trophy,
  Activity,
  TrendingUp,
} from "lucide-react";

function PersonalRecords() {
  const records = [
    {
      title: "Heaviest Squat",
      value: "120kg",
      change: "+10kg",
      icon: Dumbbell,
    },
    {
      title: "Longest Streak",
      value: "14 Days",
      change: "+3 Days",
      icon: Flame,
    },
    {
      title: "Best Month",
      value: "24 Workouts",
      change: "+6",
      icon: Trophy,
    },
    {
      title: "Fastest Run",
      value: "5K • 24m",
      change: "-2m",
      icon: Activity,
    },
  ];

  return (
    <div
      className="
      bg-violet-50
      rounded-[28px]
      border
      border-violet-100
      shadow-sm
      p-5
      hover:-translate-y-1
      hover:shadow-lg
      transition-all
      duration-300
      "
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Personal Records
        </h3>

        <div
          className="
          w-8
          h-8
          rounded-xl
          bg-gradient-to-br
          from-violet-500
          to-purple-600
          flex
          items-center
          justify-center
          "
        >
          <Trophy
            size={16}
            className="text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {records.map((record) => {
          const Icon = record.icon;

          return (
            <div
              key={record.title}
              className="
              bg-white
              border
              border-violet-100
              rounded-2xl
              p-3
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
              "
            >
              <div
                className="
                w-8
                h-8
                rounded-xl
                bg-gradient-to-br
                from-violet-500
                to-purple-600
                flex
                items-center
                justify-center
                mb-2
                "
              >
                <Icon
                  size={14}
                  className="text-white"
                />
              </div>

              <p className="text-xs text-slate-500">
                {record.title}
              </p>

              <h4 className="text-lg font-bold mt-1 text-slate-900">
                {record.value}
              </h4>

              <div
                className="
                flex
                items-center
                gap-1
                mt-1
                text-[11px]
                font-medium
                text-emerald-600
                "
              >
                <TrendingUp size={11} />
                {record.change}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PersonalRecords;