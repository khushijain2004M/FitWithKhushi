import {
Brain,
TrendingUp,
AlertTriangle,
Shield,
} from "lucide-react";

function AIInsightEngine() {
const insights = [
{
icon: TrendingUp,
iconColor: "text-emerald-600",
title: "Strength Progress",
description:
"Bench press performance improved 8.4% over the last 30 days.",
},
{
icon: AlertTriangle,
iconColor: "text-amber-600",
title: "Plateau Warning",
description:
"Body weight has remained unchanged for the past 2 weeks.",
},
{
icon: Brain,
iconColor: "text-violet-600",
title: "Recovery Trend",
description:
"Sleep quality improved this week, supporting faster recovery.",
},
{
icon: Shield,
iconColor: "text-blue-600",
title: "Consistency Score",
description:
"You completed 92% of planned workouts this month.",
},
];

return ( <div className="rounded-[28px] border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-5"> <div className="mb-4 flex items-center gap-2"> <Brain
       size={18}
       className="text-blue-600"
     />


    <h3 className="font-semibold text-slate-900">
      AI Insight Engine
    </h3>
  </div>

  <div className="grid gap-3 md:grid-cols-2">
    {insights.map((insight) => {
      const Icon = insight.icon;

      return (
        <div
          key={insight.title}
          className="rounded-2xl border border-white/70 bg-white p-4"
        >
          <Icon
            size={18}
            className={insight.iconColor}
          />

          <h4 className="mt-3 font-semibold text-slate-900">
            {insight.title}
          </h4>

          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            {insight.description}
          </p>
        </div>
      );
    })}
  </div>

  <div className="mt-4 flex flex-wrap gap-2">
    <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
      Recovery Details
    </button>

    <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
      Training Analysis
    </button>
  </div>
</div>


);
}

export default AIInsightEngine;
