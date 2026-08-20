import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function RecentWorkoutList() {

  const { workouts } = useSelector(
    (state) => state.workout
  );

  const navigate = useNavigate();


  return (

    <div className="p-4 bg-white rounded-xl shadow">

      <h2 className="font-semibold mb-3">
        Recent Workouts
      </h2>


      <div className="space-y-2">

        {workouts?.slice(0,5).map((workout)=>(

          <div
            key={workout._id}
            onClick={() =>
              navigate(`/workouts/${workout._id}`)
            }
            className="
              text-sm
              border-b
              pb-2
              cursor-pointer
              hover:text-blue-600
            "
          >

            {workout.title}

          </div>

        ))}

      </div>

    </div>

  );
}


export default RecentWorkoutList;