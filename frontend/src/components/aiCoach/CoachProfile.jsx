import {
Bot,
Sparkles,
Activity,
} from "lucide-react";

function CoachProfile() {
return ( <div className="h-full rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm"> <div className="flex items-start justify-between"> <div> <h3 className="font-semibold text-slate-900">
Coach Nova </h3>


      <p className="mt-1 text-xs text-slate-500">
        AI Fitness Assistant
      </p>
    </div>

    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
      <Bot
        size={18}
        className="text-violet-600"
      />
    </div>
  </div>

  <div className="mt-4 rounded-2xl border border-violet-100 bg-violet-50 p-3">
    <div className="flex items-center gap-2">
      <Sparkles
        size={14}
        className="text-violet-600"
      />

      <span className="text-xs font-medium text-violet-700">
        CURRENT FOCUS
      </span>
    </div>

    <p className="mt-2 text-sm font-medium text-slate-800">
      Monitoring recovery and optimizing
      training intensity.
    </p>
  </div>

  <div className="mt-4 grid grid-cols-2 gap-2">
    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs text-slate-500">
        Confidence
      </p>

      <h4 className="mt-1 font-bold text-violet-600">
        94%
      </h4>
    </div>

    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs text-slate-500">
        Insights
      </p>

      <h4 className="mt-1 font-bold text-slate-900">
        7
      </h4>
    </div>

    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs text-slate-500">
        Updated
      </p>

      <h4 className="mt-1 font-bold text-slate-900">
        2h
      </h4>
    </div>

    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs text-slate-500">
        Status
      </p>

      <div className="mt-1 flex items-center gap-1">
        <Activity
          size={12}
          className="text-emerald-500"
        />

        <span className="text-sm font-medium text-emerald-600">
          Active
        </span>
      </div>
    </div>
  </div>

  <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
    <p className="text-xs text-slate-500">
      Last Recommendation
    </p>

    <p className="mt-1 text-sm text-slate-700">
      Prioritize upper-body training today
      due to strong recovery metrics.
    </p>
  </div>
</div>

);
}

export default CoachProfile;
