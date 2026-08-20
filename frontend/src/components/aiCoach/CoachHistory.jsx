import { History } from "lucide-react";

function CoachHistory() {
const history = [
"Increase Protein Intake",
"Hydration Reminder",
"Recovery Session Added",
"Sleep Target Updated",
];

return ( <div className="h-full rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm"> <div className="mb-4 flex items-center gap-2"> <History
       size={18}
       className="text-violet-500"
     />


    <h3 className="font-semibold text-slate-900">
      AI Timeline
    </h3>
  </div>

  <div className="mb-4 grid grid-cols-3 gap-2">
    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs text-slate-500">
        Insights
      </p>

      <h4 className="mt-1 font-bold text-slate-900">
        28
      </h4>
    </div>

    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs text-slate-500">
        Actions
      </p>

      <h4 className="mt-1 font-bold text-slate-900">
        21
      </h4>
    </div>

    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs text-slate-500">
        Confidence
      </p>

      <h4 className="mt-1 font-bold text-violet-600">
        94%
      </h4>
    </div>
  </div>

  <div className="space-y-4">
    {history.map((item, index) => (
      <div
        key={index}
        className="relative flex gap-3"
      >
        <div className="relative flex flex-col items-center">
          <div className="mt-1 h-3 w-3 rounded-full bg-violet-500" />

          {index !== history.length - 1 && (
            <div className="mt-1 h-8 w-px bg-slate-200" />
          )}
        </div>

        <div className="pb-1">
          <p className="text-sm font-medium text-slate-800">
            {item}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {index === 0
              ? "Today"
              : `${index} day ago`}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


);
}

export default CoachHistory;
