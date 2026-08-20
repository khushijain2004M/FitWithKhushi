import { useSelector } from "react-redux";

function WorkoutStats() {
  const { workouts } = useSelector((state) => state.workout);

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="font-semibold mb-2">Stats</h2>

      <p>Total Workouts: {workouts?.length || 0}</p>
    </div>
  );
}

export default WorkoutStats;