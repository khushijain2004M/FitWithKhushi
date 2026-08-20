import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";


function WeightProgressChart() {


  const data = [

    { week:"W1", weight:75 },

    { week:"W2", weight:74.4 },

    { week:"W3", weight:73.8 },

    { week:"W4", weight:73.2 },

    { week:"W5", weight:72.6 },

    { week:"W6", weight:72 },

  ];



  return (

    <div
      className="
      bg-white
      rounded-[28px]
      border
      border-slate-200
      shadow-sm
      p-5
      h-[280px]
      min-w-0
      "
    >



      <div className="flex items-center justify-between mb-4">


        <div>

          <h2 className="text-lg font-semibold text-slate-900">
            Weight Progress
          </h2>


          <p className="text-xs text-slate-500 mt-1">
            Weight trend over the last 6 weeks
          </p>


        </div>



        <button
          className="
          px-3
          py-1.5
          text-xs
          font-medium
          rounded-xl
          bg-slate-50
          border
          border-slate-200
          hover:bg-slate-100
          transition
          "
        >
          6 Weeks
        </button>


      </div>




      <div className="h-[210px] w-full min-w-0">


        <ResponsiveContainer
          width="100%"
          height={210}
        >


          <AreaChart data={data}>


            <defs>

              <linearGradient
                id="weightGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={0.25}
                />


                <stop
                  offset="95%"
                  stopColor="#2563eb"
                  stopOpacity={0.02}
                />


              </linearGradient>


            </defs>




            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />




            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{
                fill:"#64748b",
                fontSize:11
              }}
            />



            <YAxis
              domain={[70,76]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill:"#64748b",
                fontSize:11
              }}
            />




            <Tooltip
              contentStyle={{
                borderRadius:"14px",
                border:"none",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.08)"
              }}
            />




            <Area
              type="monotone"
              dataKey="weight"
              stroke="none"
              fill="url(#weightGradient)"
            />



            <Line
              type="monotone"
              dataKey="weight"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{
                r:4,
                fill:"#2563eb",
                strokeWidth:0
              }}
              activeDot={{
                r:6
              }}
            />


          </AreaChart>


        </ResponsiveContainer>


      </div>



    </div>

  );

}


export default WeightProgressChart;