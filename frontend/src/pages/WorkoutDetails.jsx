import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "../components/layout/MainLayout";
import { fetchWorkoutById } from "../store/slices/workoutSlice";

function WorkoutDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedWorkout } = useSelector(
    (state) => state.workout
  );

  useEffect(() => {
    dispatch(fetchWorkoutById(id));
  }, [dispatch, id]);

  if (!selectedWorkout) {
    return (
      <MainLayout>
        <p className="p-6 text-gray-500">
          Loading workout...
        </p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold">
          {selectedWorkout.name}
        </h1>

        <p className="text-gray-500 mt-1">
          Type: {selectedWorkout.type}
        </p>

        <p className="mt-4">
          Duration: {selectedWorkout.duration} mins
        </p>

        <div className="mt-6">
          <h2 className="font-semibold mb-2">
            Exercises
          </h2>

          {selectedWorkout.exercises?.length ? (
            <ul className="space-y-2">
              {selectedWorkout.exercises.map((ex, i) => (
                <li
                  key={i}
                  className="p-3 bg-white rounded shadow"
                >
                  {ex.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">
              No exercises added
            </p>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default WorkoutDetails;