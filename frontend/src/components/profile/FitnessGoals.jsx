import profileData from "../../data/profileData";


function FitnessGoals() {


  const goals = profileData.goals || [

    {
      label:"Weight",
      value:75,
      current:72
    },


    {
      label:"Protein",
      value:150,
      current:145
    },


    {
      label:"Workouts",
      value:5,
      current:4
    },


    {
      label:"Steps",
      value:10000,
      current:8200
    }

  ];



  return (

    <div className="bg-white border border-slate-200 rounded-[28px] shadow-sm p-6">


      <h2 className="text-xl font-semibold">
        Fitness Goals
      </h2>


      <p className="text-sm text-slate-500 mt-1 mb-4">
        Progress toward your targets.
      </p>



      <div className="space-y-5">


        {
          goals.map((goal)=>{


            const percentage = Math.min(
              (goal.current / goal.value) * 100,
              100
            );


            return (

              <div key={goal.label}>


                <div className="flex justify-between text-sm mb-1">

                  <span>
                    {goal.label}
                  </span>


                  <span className="text-slate-500">
                    {goal.current} / {goal.value}
                  </span>


                </div>



                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">


                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{
                      width:`${percentage}%`
                    }}
                  />


                </div>


              </div>

            );

          })
        }


      </div>


    </div>

  );

}


export default FitnessGoals;