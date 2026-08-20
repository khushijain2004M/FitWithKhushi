import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Cell,
} from "recharts";


function WeeklyActivity({ activity = [] }) {


  const data = activity.map((item) => ({

    day: item.day,

    calories: item.calories,

    active: item.workouts > 0,

  }));



  return (

    <div
      className="
      bg-white
      rounded-[28px]
      border
      border-slate-200
      shadow-sm
      p-6
      h-[350px]
      min-w-0
      "
    >


      <div className="flex items-center justify-between mb-8">


        <div>

          <h2 className="text-xl font-semibold text-slate-900">
            Weekly Activity
          </h2>


          <p className="text-sm text-slate-500 mt-1">
            Calories burned this week
          </p>


        </div>



        <button
          className="
          px-4
          py-2
          text-sm
          font-medium
          rounded-xl
          bg-slate-50
          border
          border-slate-200
          hover:bg-slate-100
          transition
          "
        >
          This Week
        </button>


      </div>





      <div className="w-full h-[230px] min-w-0">


        <ResponsiveContainer
          width="100%"
          height={230}
        >


          <BarChart data={data}>


            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill:"#64748b",
                fontSize:12
              }}
            />



            <Tooltip
              cursor={false}
              contentStyle={{
                borderRadius:"16px",
                border:"none",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.08)"
              }}
            />



            <Bar
              dataKey="calories"
              radius={[
                14,
                14,
                14,
                14
              ]}
              barSize={42}
            >


              {
                data.map((entry,index)=>(

                  <Cell
                    key={index}
                    fill={
                      entry.active
                      ? "#2563eb"
                      : "#dbeafe"
                    }
                  />

                ))
              }


            </Bar>


          </BarChart>


        </ResponsiveContainer>


      </div>



    </div>

  );

}


export default WeeklyActivity;