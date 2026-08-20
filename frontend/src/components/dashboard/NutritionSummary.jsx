import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";


function NutritionSummary({ nutrition }) {

  const protein = nutrition?.protein || 0;
  const carbs = nutrition?.carbs || 0;
  const fat = nutrition?.fat || 0;


  const totalMacros = protein + carbs + fat;


  const data = [
    {
      name: "Protein",
      value:
        totalMacros === 0
          ? 0
          : Math.round((protein / totalMacros) * 100),
      color: "#2563eb",
    },

    {
      name: "Carbs",
      value:
        totalMacros === 0
          ? 0
          : Math.round((carbs / totalMacros) * 100),
      color: "#10b981",
    },

    {
      name: "Fat",
      value:
        totalMacros === 0
          ? 0
          : Math.round((fat / totalMacros) * 100),
      color: "#f59e0b",
    },
  ];



  return (

    <div
      className="
      bg-white
      rounded-[28px]
      border
      border-slate-200
      shadow-sm
      p-6
      h-[300px]
      relative
      overflow-hidden
      min-w-0
      "
    >


      <div
        className="
        absolute
        -bottom-10
        -right-10
        w-40
        h-40
        bg-blue-100
        rounded-full
        blur-3xl
        opacity-40
        "
      />



      <div className="relative h-full">


        <div className="flex items-center justify-between mb-5">


          <div>

            <h2 className="text-xl font-semibold text-slate-900">
              Nutrition Summary
            </h2>


            <p className="text-sm text-slate-500 mt-1">
              Daily macro breakdown
            </p>


          </div>



          <button
            className="
            text-sm
            px-4
            py-2
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            hover:bg-slate-100
            transition
            "
          >
            View All
          </button>


        </div>





        <div className="flex items-center justify-between h-[210px] min-w-0">


          <div className="relative w-44 h-44">


            <ResponsiveContainer
              width="100%"
              height={176}
            >

              <PieChart>


                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={55}
                  outerRadius={75}
                  paddingAngle={4}
                >

                  {
                    data.map((item)=>(

                      <Cell
                        key={item.name}
                        fill={item.color}
                      />

                    ))
                  }


                </Pie>


              </PieChart>


            </ResponsiveContainer>



            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <span className="text-3xl font-bold text-slate-900">
                {nutrition?.calories ?? 0}
              </span>


              <span className="text-xs text-slate-500">
                Calories
              </span>


            </div>


          </div>





          <div className="space-y-5">


            {
              data.map((item)=>(

                <div
                  key={item.name}
                  className="flex items-center gap-3"
                >

                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor:item.color
                    }}
                  />


                  <div>

                    <p className="text-sm font-medium text-slate-700">
                      {item.name}
                    </p>


                    <p className="text-xs text-slate-500">
                      {item.value}% intake
                    </p>


                  </div>


                </div>

              ))
            }


          </div>



        </div>


      </div>


    </div>

  );
}


export default NutritionSummary;