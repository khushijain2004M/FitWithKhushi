import { Trophy } from "lucide-react";


function FitnessScore({ latestProgress }) {

  const score = latestProgress?.fitnessScore || 0;


  return (

    <div
      className="
      bg-white
      rounded-[28px]
      p-5
      shadow-sm
      border
      border-slate-200
      h-full
      "
    >

      <div className="flex items-center justify-between">

        <h3 className="font-semibold text-slate-900">
          Fitness Score
        </h3>

        <Trophy
          size={18}
          className="text-yellow-500"
        />

      </div>


      <div className="mt-4 text-center">

        <div
          className="
          w-24
          h-24
          mx-auto
          rounded-full
          border-[6px]
          border-blue-500
          flex
          items-center
          justify-center
          "
        >

          <div>

            <h2 className="text-3xl font-bold text-blue-600">
              {score}
            </h2>

            <p className="text-[10px] text-slate-500">
              Score
            </p>

          </div>

        </div>


        <p className="mt-3 text-sm text-slate-500 font-medium">
          {score > 80 ? "Excellent Progress" : "Keep Improving"}
        </p>


      </div>


    </div>

  );
}


export default FitnessScore;