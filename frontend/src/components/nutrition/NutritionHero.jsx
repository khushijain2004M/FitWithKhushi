function NutritionHero() {
  return (
    <div className="bg-white border border-slate-200 rounded-[32px] shadow-sm p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-blue-600">
            Daily Goal
          </p>

          <h2 className="text-3xl font-bold text-slate-700 mt-2">
            2,150 / 2,500 Calories
          </h2>

          <p className="text-slate-600 mt-2">
            You have 350 calories remaining today.
          </p>
        </div>

        <button className="px-5 py-3 rounded-2xl bg-blue-500 text-white font-semibold hover:bg-blue-700 transition">
          Add Food
        </button>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-slate-600">Daily Progress</span>
          <span className="font-semibold text-blue-900">86%</span>
        </div>

        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full w-[86%] bg-blue-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default NutritionHero;