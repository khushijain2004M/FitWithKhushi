import profileData from "../../data/profileData";

import {
  Award,
  Flame,
  Zap
} from "lucide-react";


const defaultAchievements = [

  {
    id:1,
    title:"7 Day Streak",
    icon:Flame,
    color:"text-orange-500"
  },

  {
    id:2,
    title:"10K Calories Burned",
    icon:Zap,
    color:"text-blue-500"
  },

  {
    id:3,
    title:"First 50 Workouts",
    icon:Award,
    color:"text-green-500"
  }

];


function Achievements(){


  const achievements =
    defaultAchievements;



  return (

    <div className="bg-white border border-slate-200 rounded-[28px] shadow-sm p-6">


      <h2 className="text-xl font-semibold">
        Achievements
      </h2>


      <p className="text-sm text-slate-500 mt-1 mb-4">
        Milestones unlocked.
      </p>



      <div className="grid grid-cols-3 gap-4">


        {
          achievements.map((achievement)=>{


            const Icon = achievement.icon;



            return (

              <div
                key={achievement.id}
                className="bg-gradient-to-br from-white to-slate-50 border border-slate-100 rounded-2xl p-4 text-center hover:shadow-md transition"
              >

                <Icon
                  className={`mx-auto mb-2 ${achievement.color}`}
                  size={22}
                />


                <p className="text-sm font-semibold text-slate-900">
                  {achievement.title}
                </p>


              </div>

            );

          })
        }


      </div>


    </div>

  );

}


export default Achievements;