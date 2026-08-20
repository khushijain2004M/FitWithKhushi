import { CalendarDays, Check, Clock } from "lucide-react";

function WeeklyPlan() {
const plan = [
{ day: "Mon", workout: "Push", status: "done" },
{ day: "Tue", workout: "Pull", status: "done" },
{ day: "Today", workout: "Legs", status: "current" },
{ day: "Thu", workout: "Recovery", status: "upcoming" },
{ day: "Fri", workout: "Cardio", status: "upcoming" },
{ day: "Sat", workout: "Core", status: "upcoming" },
{ day: "Sun", workout: "Recovery", status: "upcoming" },
];

return ( <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm"> <div className="mb-4 flex items-center gap-2"> <CalendarDays
       size={18}
       className="text-blue-600"
     />


    <h3 className="font-semibold text-slate-900">
      Weekly Strategy
    </h3>
  </div>

  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-7">
    {plan.map((item) => (
      <div
        key={item.day}
        className={`rounded-2xl border p-3 transition-all ${
          item.status === "done"
            ? "border-green-200 bg-green-50"
            : item.status === "current"
            ? "border-blue-200 bg-blue-50 ring-2 ring-blue-100"
            : "border-slate-200 bg-slate-50"
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-slate-500">
            {item.day}
          </p>

          {item.status === "done" && (
            <Check
              size={14}
              className="text-green-600"
            />
          )}

          {item.status === "current" && (
            <Clock
              size={14}
              className="text-blue-600"
            />
          )}
        </div>

        <h4 className="mt-2 text-sm font-semibold text-slate-900">
          {item.workout}
        </h4>

        <p className="mt-1 text-xs text-slate-500">
          {item.status === "done"
            ? "Completed"
            : item.status === "current"
            ? "Today's Focus"
            : "Upcoming"}
        </p>
      </div>
    ))}
  </div>
</div>


);
}

export default WeeklyPlan;
