function StatCard({
  title,
  value,
  change,
  icon,
}) {
  const styles = {
    Calories: {
      card: "bg-gradient-to-br from-blue-50 to-white",
      icon: "from-blue-100 to-blue-200",
      line: "#2563eb",
      glow: "bg-blue-200",
    },

    Workouts: {
      card: "bg-gradient-to-br from-emerald-50 to-white",
      icon: "from-emerald-100 to-emerald-200",
      line: "#10b981",
      glow: "bg-emerald-200",
    },

    Weight: {
      card: "bg-gradient-to-br from-violet-50 to-white",
      icon: "from-violet-100 to-violet-200",
      line: "#8b5cf6",
      glow: "bg-violet-200",
    },

    Hours: {
      card: "bg-gradient-to-br from-amber-50 to-white",
      icon: "from-amber-100 to-amber-200",
      line: "#f59e0b",
      glow: "bg-amber-200",
    },

    Streak: {
      card: "bg-gradient-to-br from-orange-50 to-white",
      icon: "from-orange-100 to-orange-200",
      line: "#f97316",
      glow: "bg-orange-200",
    },

    Sessions: {
      card: "bg-gradient-to-br from-cyan-50 to-white",
      icon: "from-cyan-100 to-cyan-200",
      line: "#06b6d4",
      glow: "bg-cyan-200",
    },
  };

  const current =
    styles[title] || styles.Calories;

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        p-6
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        ${current.card}
      `}
    >
      {/* Glow */}
      <div
        className={`
          absolute
          top-0
          right-0
          w-32
          h-32
          rounded-full
          blur-3xl
          opacity-0
          group-hover:opacity-40
          transition-all
          duration-500
          ${current.glow}
        `}
      />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-slate-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            {value}
          </h2>

          <p className="text-emerald-500 text-sm font-semibold mt-3">
            {change}
          </p>
        </div>

        <div className="flex flex-col items-end gap-5">
          <div
            className={`
              w-16
              h-16
              rounded-2xl
              bg-gradient-to-br
              flex
              items-center
              justify-center
              ${current.icon}
            `}
          >
            {icon}
          </div>

          <svg
            width="72"
            height="38"
            viewBox="0 0 72 38"
          >
            <path
              d="M5 28 L18 20 L30 24 L42 11 L55 17 L67 9"
              fill="none"
              stroke={current.line}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle
              cx="67"
              cy="9"
              r="3.5"
              fill={current.line}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default StatCard;