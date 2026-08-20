import { Zap } from "lucide-react";

function ReadinessScore() {
const readiness = 84;

return ( <div className="h-full rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm"> <div className="mb-4 flex items-center gap-2"> <Zap
       size={18}
       className="text-orange-500"
     />


    <h3 className="font-semibold text-slate-900">
      Workout Readiness
    </h3>
  </div>

  <div className="flex items-end gap-2">
    <h2 className="text-4xl font-bold text-orange-500">
      {readiness}%
    </h2>

    <span className="mb-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-medium text-orange-600">
      High
    </span>
  </div>

  <p className="mt-1 text-sm text-slate-500">
    You're well recovered and ready for
    moderate to high intensity training.
  </p>

  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
    <div
      className="h-full rounded-full bg-orange-500"
      style={{ width: `${readiness}%` }}
    />
  </div>

  <div className="mt-5 space-y-2">
    <div className="flex items-center justify-between rounded-xl bg-green-50 px-3 py-2">
      <span className="text-sm text-slate-700">
        Strength Training
      </span>

      <span className="text-xs font-medium text-green-600">
        Recommended
      </span>
    </div>

    <div className="flex items-center justify-between rounded-xl bg-green-50 px-3 py-2">
      <span className="text-sm text-slate-700">
        Cardio Session
      </span>

      <span className="text-xs font-medium text-green-600">
        Recommended
      </span>
    </div>

    <div className="flex items-center justify-between rounded-xl bg-red-50 px-3 py-2">
      <span className="text-sm text-slate-700">
        High Volume Legs
      </span>

      <span className="text-xs font-medium text-red-600">
        Avoid Today
      </span>
    </div>
  </div>
</div>


);
}

export default ReadinessScore;
