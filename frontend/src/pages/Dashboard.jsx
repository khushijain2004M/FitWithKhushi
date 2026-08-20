import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Flame, Dumbbell, Scale } from "lucide-react";

import MainLayout from "../components/layout/MainLayout";
import StatCard from "../components/ui/StatCard";

import WeeklyActivity from "../components/dashboard/WeeklyActivity";
import WorkoutStreak from "../components/dashboard/WorkoutStreak";
import RecentWorkouts from "../components/dashboard/RecentWorkouts";
import NutritionSummary from "../components/dashboard/NutritionSummary";

import { fetchDashboard } from "../store/slices/dashboardSlice";
import { fetchLatestProgress } from "../store/slices/progressSlice";

function Dashboard() {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(
    (state) => state.dashboard
  );

  const { latestProgress } = useSelector(
    (state) => state.progress
  );

  const {
    user,
    stats,
    recentWorkouts,
    todayNutrition,
  } = data || {};

  useEffect(() => {
    dispatch(fetchDashboard());
    dispatch(fetchLatestProgress());
  }, [dispatch]);

  return (
    <MainLayout>
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mt-1 mb-5">
          Dashboard
        </h1>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white mb-6"
        >
          <div className="relative">
            <p className="text-sm opacity-80">Weekly Overview</p>

            <h2 className="text-2xl font-bold mt-2">
              Great progress this week 🚀
            </h2>

            <p className="text-sm opacity-80 mt-2">
              {stats?.totalWorkouts ?? 0} workouts •{" "}
              {stats?.weeklyCalories ?? 0} calories
            </p>
          </div>
        </motion.div>

        {/* STATUS */}
        {loading && (
          <p className="text-sm text-gray-500 mb-4">
            Loading dashboard...
          </p>
        )}

        {error && (
          <p className="text-sm text-red-500 mb-4">
            {error}
          </p>
        )}

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Calories"
            value={stats?.weeklyCalories ?? "--"}
            icon={<Flame size={20} />}
          />

          <StatCard
            title="Workouts"
            value={stats?.totalWorkouts ?? "--"}
            icon={<Dumbbell size={20} />}
          />

          <StatCard
            title="Weight"
            value={latestProgress?.weight ?? "--"}
            icon={<Scale size={20} />}
          />
        </div>

        {/* MIDDLE */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
          <div className="xl:col-span-2">
            <WeeklyActivity 
              activity={data?.weeklyActivity || []}
            />
          </div>

          <WorkoutStreak stats={stats} />
        </div>

        {/* BOTTOM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <RecentWorkouts workouts={recentWorkouts || []} />
          <NutritionSummary nutrition={todayNutrition} />
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;