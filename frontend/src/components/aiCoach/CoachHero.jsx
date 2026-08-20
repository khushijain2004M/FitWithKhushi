import {
Bot,
Play,
MessageSquare,
TrendingUp,
} from "lucide-react";

function CoachHero() {
return ( <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm"> <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-100 opacity-40 blur-3xl" />


  <div className="relative z-10 grid items-center gap-4 lg:grid-cols-12">
    <div className="lg:col-span-8">
      <div className="mb-2 flex items-center gap-2 text-blue-600">
        <Bot size={16} />

        <span className="text-sm font-medium">
          AI Daily Briefing
        </span>
      </div>

      <h2 className="text-2xl font-bold text-slate-900">
        Good Morning, Sudesh 👋
      </h2>

      <div className="mt-2 flex items-center gap-2 text-emerald-600">
        <TrendingUp size={14} />

        <span className="text-sm font-medium">
          Performance Trend Improving
        </span>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Today's Focus
        </p>

        <h3 className="mt-1 text-base font-semibold text-slate-900">
          Upper Body Strength Session
        </h3>

        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          Based on your recovery score, sleep quality, and
          recent workout performance, you're ready for a
          high-intensity push workout today.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <button className="flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-medium text-white transition hover:bg-blue-700">
          <Play size={15} />
          Start Workout
        </button>

        <button className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
          <MessageSquare size={15} />
          Ask Coach
        </button>
      </div>
    </div>

    <div className="lg:col-span-4">
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3">
          <p className="text-xs text-slate-500">
            Recovery
          </p>

          <h3 className="mt-1 text-xl font-bold text-emerald-600">
            92%
          </h3>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3">
          <p className="text-xs text-slate-500">
            Readiness
          </p>

          <h3 className="mt-1 text-xl font-bold text-orange-500">
            84%
          </h3>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3">
          <p className="text-xs text-slate-500">
            AI Confidence
          </p>

          <h3 className="mt-1 text-xl font-bold text-violet-600">
            94%
          </h3>
        </div>
      </div>
    </div>
  </div>
</div>


);
}
export default CoachHero;


