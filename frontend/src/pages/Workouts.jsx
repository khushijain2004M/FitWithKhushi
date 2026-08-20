import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import MainLayout from "../components/layout/MainLayout";

import {
  fetchWorkouts,
  fetchTodayWorkout,
} from "../store/slices/workoutSlice";

import TodayWorkoutCard from "../components/workouts/TodayWorkoutCard";
import WorkoutStats from "../components/workouts/WorkoutStats";
import WeeklyPlan from "../components/workouts/WeeklyPlan";
import RecentWorkoutList from "../components/workouts/RecentWorkoutList";
import CreateWorkoutModal from "../components/workouts/CreateWorkoutModal";

function Workouts() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchWorkouts());
    dispatch(fetchTodayWorkout());
  }, [dispatch]);

  return (
    <MainLayout>
      <div>
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-slate-900">
            Workouts
          </h1>

          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            + Add Workout
          </button>
        </div>

        {/* CORE UI */}
        <TodayWorkoutCard />

        <div className="mt-6">
          <WorkoutStats />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          <WeeklyPlan />
          <RecentWorkoutList />
        </div>

        {/* MODAL */}
        {open && (
          <CreateWorkoutModal onClose={() => setOpen(false)} />
        )}
      </div>
    </MainLayout>
  );
}

export default Workouts;