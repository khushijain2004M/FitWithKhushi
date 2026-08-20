function NutritionTips({ nutritionStats }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mt-6">
      {nutritionStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="bg-white border border-slate-200 rounded-3xl px-5 py-4 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.iconBg}`}
              >
                <Icon size={18} className={stat.iconColor} />
              </div>

              <p className="text-slate-500 text-sm font-medium">
                {stat.title}
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              {stat.value}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default NutritionTips;