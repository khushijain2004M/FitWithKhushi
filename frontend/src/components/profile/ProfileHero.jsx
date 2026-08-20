import { useSelector } from "react-redux";
import profileData from "../../data/profileData";

import {
  Trophy,
  Flame,
  Target
} from "lucide-react";


function ProfileHero() {

  const { user } = useSelector(
    (state) => state.auth
  );


  const name = user?.fullName || "User";


  const initials = name
    .split(" ")
    .map((item) => item[0])
    .join("")
    .substring(0,2)
    .toUpperCase();



  return (

    <div className="relative bg-gradient-to-r from-blue-50 via-white to-white border border-slate-200 rounded-[32px] shadow-sm p-6 overflow-hidden">


      <div className="absolute left-0 top-6 bottom-6 w-1 bg-blue-500 rounded-full opacity-60" />



      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">



        {/* User Info */}

        <div className="flex items-center gap-5">


          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">

            {initials}

          </div>



          <div>

            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">

              {name}

            </h2>



            <div className="flex items-center gap-2 mt-1">


              <span className="text-sm text-slate-500">

                {profileData.level || "Fitness Member"}

              </span>



              <span className="w-1 h-1 bg-slate-300 rounded-full" />



              <span className="text-sm text-blue-600 font-semibold">

                Premium Member

              </span>


            </div>


          </div>


        </div>





        {/* Quick Stats */}

        <div className="flex gap-8">


          <div className="text-center">

            <Flame
              className="text-orange-500 mx-auto"
              size={16}
            />

            <p className="text-xs text-slate-500 mt-1">
              Streak
            </p>


            <p className="font-bold text-slate-900">
              {profileData.streak || 0} days
            </p>


          </div>





          <div className="text-center">


            <Trophy
              className="text-blue-500 mx-auto"
              size={16}
            />


            <p className="text-xs text-slate-500 mt-1">
              Workouts
            </p>


            <p className="font-bold text-slate-900">
              {profileData.workouts || 0}
            </p>


          </div>





          <div className="text-center">


            <Target
              className="text-green-500 mx-auto"
              size={16}
            />


            <p className="text-xs text-slate-500 mt-1">
              Goal
            </p>


            <p className="font-bold text-slate-900">
              {profileData.goal || "Fitness"}
            </p>


          </div>


        </div>


      </div>





      {/* Bottom Stats */}

      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">



        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">

          <p className="text-xs text-slate-500">
            Fitness Score
          </p>

          <p className="text-xl font-bold text-blue-600">
            87
          </p>

        </div>




        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">

          <p className="text-xs text-slate-500">
            Weight
          </p>

          <p className="text-xl font-bold text-slate-900">
            {profileData.weight}
          </p>

        </div>




        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">

          <p className="text-xs text-slate-500">
            Height
          </p>


          <p className="text-xl font-bold text-slate-900">
            {profileData.height}
          </p>


        </div>





        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">


          <p className="text-xs text-slate-500">
            Goal Type
          </p>


          <p className="text-xl font-bold text-slate-900">
            {profileData.goal}
          </p>


        </div>


      </div>


    </div>

  );
}


export default ProfileHero;