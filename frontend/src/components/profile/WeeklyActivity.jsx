import { useEffect, useState } from "react";

import profileData from "../../data/profileData";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip
} from "recharts";



function WeeklyActivity(){


  const [showChart,setShowChart] =
    useState(false);



  useEffect(()=>{

    const frame =
      requestAnimationFrame(()=>{
        setShowChart(true);
      });


    return ()=>cancelAnimationFrame(frame);


  },[]);




  const weekly =
    profileData.weeklyActivity || [];



  const data =
    weekly.map((value,index)=>({

      day:[
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
      ][index],

      value

    }));




  return (

    <div className="bg-white border border-slate-200 rounded-[28px] shadow-sm p-6">


      <h2 className="text-xl font-semibold">
        Weekly Activity
      </h2>


      <p className="text-sm text-slate-500 mt-1 mb-4">
        Workout frequency this week.
      </p>




      <div className="h-56 w-full min-w-0">


        {
          showChart &&

          <ResponsiveContainer
            width="100%"
            height={220}
          >

            <BarChart data={data}>


              <XAxis
                dataKey="day"
              />


              <Tooltip />


              <Bar
                dataKey="value"
                fill="#3B82F6"
                radius={[
                  8,
                  8,
                  0,
                  0
                ]}
              />


            </BarChart>


          </ResponsiveContainer>

        }


      </div>


    </div>

  );

}


export default WeeklyActivity;