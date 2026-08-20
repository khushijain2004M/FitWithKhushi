import { useSelector } from "react-redux";


function TodayWorkoutCard() {

  const { todayWorkout } = useSelector(
    (state) => state.workout
  );


  if (!todayWorkout) return null;


  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-xl font-semibold text-slate-900">
            Today's Workout
          </h2>

          <p className="text-2xl font-bold mt-2 text-blue-600">
            {todayWorkout.title}
          </p>

          <p className="text-sm text-slate-500 mt-1">
            {todayWorkout.category}
          </p>

        </div>


        <div className="text-right">

          <p className="text-sm text-slate-500">
            Duration
          </p>

          <p className="font-semibold text-slate-900">
            {todayWorkout.duration} min
          </p>

        </div>

      </div>


      <div className="mt-4 text-sm text-slate-600">

        Exercises:
        {" "}
        {todayWorkout.exercises?.length || 0}

      </div>


    </div>
  );
}


export default TodayWorkoutCard;