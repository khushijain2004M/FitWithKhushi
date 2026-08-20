import { Activity } from "lucide-react";

function RecoveryAnalysis() {
const recovery = 92;

const metrics = [
{
label: "Fatigue",
value: "Low",
},
{
label: "Stress",
value: "Medium",
},
{
label: "Recovery Time",
value: "18h",
},
];

const muscles = [
{
name: "Chest",
value: 100,
},
{
name: "Back",
value: 88,
},
{
name: "Shoulders",
value: 76,
},
{
name: "Legs",
value: 45,
},
];

return ( <div className="h-full rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm"> <div className="mb-4 flex items-center gap-2"> <Activity
       size={18}
       className="text-emerald-500"
     />


    <h3 className="font-semibold text-slate-900">
      Recovery Analysis
    </h3>
  </div>

  <div className="flex items-end gap-3">
    <h2 className="text-4xl font-bold text-emerald-600">
      {recovery}%
    </h2>

    <span className="mb-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-600">
      Excellent
    </span>
  </div>

  <p className="mt-1 text-sm text-slate-500">
    Recovery metrics indicate strong readiness
    for upper-body strength training today.
  </p>

  <div className="mt-5 grid grid-cols-3 gap-3">
    {metrics.map((item) => (
      <div
        key={item.label}
        className="rounded-xl bg-slate-50 p-3"
      >
        <p className="text-xs text-slate-500">
          {item.label}
        </p>

        <h4 className="mt-1 font-semibold text-slate-900">
          {item.value}
        </h4>
      </div>
    ))}
  </div>

  <div className="mt-5">
    <h4 className="mb-3 text-sm font-semibold text-slate-800">
      Muscle Recovery
    </h4>

    <div className="space-y-4">
      {muscles.map((muscle) => (
        <div key={muscle.name}>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm text-slate-600">
              {muscle.name}
            </span>

            <span className="text-xs font-medium text-slate-500">
              {muscle.value}%
            </span>
          </div>

          <div className="h-2 rounded-full bg-slate-100">
            <div
              className="h-2 rounded-full bg-emerald-500"
              style={{
                width: `${muscle.value}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


);
}

export default RecoveryAnalysis;
