function WaterTracker() {
  return (
    <div className="mt-8 border-t border-slate-200 pt-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-slate-900">
          Water Intake
        </h3>

        <span className="font-semibold text-cyan-600">
          2.3L / 3.0L
        </span>
      </div>

      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full w-[77%] bg-cyan-500 rounded-full" />
      </div>

      <div className="flex justify-between mt-3 text-sm">
        <span className="text-slate-500">
          Hydration Goal
        </span>

        <span className="font-medium text-slate-700">
          77%
        </span>
      </div>
    </div>
  );
}

export default WaterTracker;