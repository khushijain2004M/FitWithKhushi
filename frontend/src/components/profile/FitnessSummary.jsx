import profileData from "../../data/profileData";

import {
  Flame,
  Activity,
  Clock,
  Trophy
} from "lucide-react";


function FitnessSummary() {


  const stats = [

    {
      label:"Workouts",
      value:profileData.workouts || 0,
      icon:Activity,
      color:"text-blue-500"
    },


    {
      label:"Calories",
      value:profileData.caloriesBurned || 0,
      icon:Flame,
      color:"text-orange-500"
    },


    {
      label:"Hours",
      value:profileData.totalHours || 0,
      icon:Clock,
      color:"text-purple-500"
    },


    {
      label:"Streak",
      value:profileData.streak || 0,
      icon:Trophy,
      color:"text-green-500"
    }

  ];



  return (

    <div className="bg-white border border-slate-200 rounded-[28px] shadow-sm p-6">


      <h2 className="text-xl font-semibold">
        Fitness Summary
      </h2>


      <p className="text-sm text-slate-500 mt-1 mb-4">
        Performance overview.
      </p>



      <div className="grid grid-cols-2 gap-4">


        {
          stats.map((item)=>{

            const Icon = item.icon;


            return (

              <div
                key={item.label}
                className="bg-slate-50 rounded-2xl p-4 border border-slate-100"
              >

                <Icon
                  className={item.color}
                  size={18}
                />


                <p className="text-sm text-slate-500 mt-2">
                  {item.label}
                </p>


                <p className="text-2xl font-bold text-slate-900 mt-1">
                  {item.value}
                </p>


              </div>

            );

          })
        }


      </div>


    </div>

  );

}


export default FitnessSummary;