import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../components/layout/MainLayout";

import {
  fetchReadiness,
  fetchRecovery,
  fetchWeeklyPlan,
} from "../store/slices/aiCoachSlice";

function AICoach() {
  const dispatch = useDispatch();

  const { readiness, recovery, weeklyPlan } = useSelector(
    (state) => state.aiCoach
  );

  useEffect(() => {
    dispatch(fetchReadiness());
    dispatch(fetchRecovery());
    dispatch(fetchWeeklyPlan());
  }, [dispatch]);

  return (
    <MainLayout>
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          AI Coach
        </h1>

        {/* Readiness */}
        <div className="p-4 bg-white rounded-xl shadow mb-4">
          <h2 className="font-semibold">Readiness Score</h2>

          <p className="text-2xl">
            {readiness
              ? `${readiness.score} (${readiness.label})`
              : "--"}
          </p>
        </div>

        {/* Recovery */}
        <div className="p-4 bg-white rounded-xl shadow mb-4">
          <h2 className="font-semibold">Recovery Insight</h2>

          <p className="text-sm mt-2">
            {recovery?.message ?? "--"}
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Status: {recovery?.status ?? "--"}
          </p>
        </div>

        {/* Weekly Plan */}
        <div className="p-4 bg-white rounded-xl shadow">
          <h2 className="font-semibold">Weekly Plan</h2>

          <div className="mt-2 flex flex-wrap gap-2">
            {weeklyPlan?.map((day, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {day}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AICoach;