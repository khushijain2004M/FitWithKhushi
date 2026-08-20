function MealList({ foodLog }) {
  return (
    <div className="bg-white border border-slate-200 rounded-[28px] shadow-sm p-6">
      <h2 className="text-xl font-semibold">Food Log</h2>

      <p className="text-sm text-slate-500 mt-1 mb-6">
        Foods consumed throughout the day.
      </p>

      <div className="space-y-4">
        {foodLog.map((food) => (
          <div
            key={food.name}
            className="bg-slate-50 rounded-2xl p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">
                  {food.name}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {food.time}
                </p>

                <div className="flex gap-4 mt-2 text-xs text-slate-500">
                  <span>P {food.protein}</span>
                  <span>C {food.carbs}</span>
                  <span>F {food.fat}</span>
                </div>
              </div>

              <span className="font-semibold text-blue-600">
                {food.calories} cal
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealList;