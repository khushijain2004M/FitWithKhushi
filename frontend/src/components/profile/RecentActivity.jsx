import profileData from "../../data/profileData";


function RecentActivity(){


  const activities =
    profileData.recentActivity || [];



  return (

    <div className="bg-white border border-slate-200 rounded-[28px] shadow-sm p-6">


      <h2 className="text-xl font-semibold">
        Recent Activity
      </h2>


      <p className="text-sm text-slate-500 mt-1 mb-4">
        Latest updates from your fitness journey.
      </p>



      <div className="space-y-4">


        {
          activities.map((item)=>(


            <div
              key={item.id}
              className="flex gap-4"
            >


              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />



              <div className="flex-1">


                <div className="flex justify-between">


                  <p className="font-semibold text-slate-900">
                    {item.name}
                  </p>



                  <span className="text-xs text-slate-500">
                    {item.time}
                  </span>


                </div>



                <p className="text-xs text-slate-500">
                  {item.type}
                </p>


              </div>



            </div>


          ))
        }



        {
          activities.length === 0 &&
          <p className="text-sm text-slate-400">
            No recent activity available.
          </p>
        }



      </div>


    </div>

  );

}


export default RecentActivity;