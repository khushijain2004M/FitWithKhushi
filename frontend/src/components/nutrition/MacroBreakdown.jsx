import { Plus } from "lucide-react";
import WaterTracker from "./WaterTracker";

function MacroBreakdown() {
  return (
    <div className="bg-white border border-slate-200 rounded-[28px] shadow-sm p-6">
      <h2 className="text-xl font-semibold">
        Macro Breakdown
      </h2>

      <p className="text-sm text-slate-500 mt-1 mb-6">
        Daily nutrition distribution.
      </p>

      <div className="space-y-5">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Protein</span>
            <span>145 / 180g</span>
          </div>

          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-[80%] bg-red-500 rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Carbs</span>
            <span>240 / 300g</span>
          </div>

          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-[78%] bg-yellow-500 rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Fat</span>
            <span>62 / 80g</span>
          </div>

          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-[75%] bg-violet-500 rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Sugar</span>
            <span>38 / 50g</span>
          </div>

          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-[70%] bg-pink-500 rounded-full" />
          </div>
        </div>
      </div>

      <WaterTracker />

      <button className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-2xl border border-slate-200 hover:bg-slate-50 transition">
        <Plus size={18} />
        Add Food Entry
      </button>
    </div>
  );
}

export default MacroBreakdown;