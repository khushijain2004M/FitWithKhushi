import { useSelector } from "react-redux";
import profileData from "../../data/profileData";


function ProfileStats() {

  const { user } = useSelector(
    (state) => state.auth
  );


  const stats = [

    {
      label:"Calories Burned",
      value:profileData.caloriesBurned,
      trend:"+8%"
    },


    {
      label:"Workout Hours",
      value:profileData.totalHours,
      trend:"+5%"
    },


    {
      label:"Workouts",
      value:profileData.workouts,
      trend:"+3%"
    },


    {
      label:"Current Weight",
      value:profileData.weight
    },


    {
      label:"Goal",
      value:profileData.goal
    },


    {
      label:"User",
      value:user?.fullName || "User"
    }

  ];



  return (

    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mt-6">


      {stats.map((item)=>(


        <div
          key={item.label}
          className="bg-white/90 backdrop-blur border border-slate-200/60 rounded-3xl px-5 py-4 shadow-sm hover:shadow-md transition"
        >


          <p className="text-xs uppercase tracking-wide text-slate-500">
            {item.label}
          </p>



          <div className="flex items-end justify-between mt-2">


            <p className="text-xl font-bold text-slate-900">
              {item.value}
            </p>



            {
              item.trend &&
              <span className="text-xs font-semibold text-green-600">
                {item.trend}
              </span>
            }


          </div>


        </div>


      ))}



    </div>

  );

}


export default ProfileStats;