import {
  Scale,
  Activity,
  Target,
  Ruler,
  TrendingDown,
} from "lucide-react";


function BodyMeasurements({ latestProgress }) {


  const stats = [
    {
      label: "Weight",
      value: `${latestProgress?.weight || 0} kg`,
      change: "",
      icon: Scale,
    },
    {
      label: "Body Fat",
      value: `${latestProgress?.bodyFat || 0}%`,
      change: "",
      icon: Activity,
    },
    {
      label: "Muscle Mass",
      value: `${latestProgress?.muscleMass || 0} kg`,
      change: "",
      icon: Target,
    },
    {
      label: "BMI",
      value: `${latestProgress?.bmi || 0}`,
      change: "",
      icon: Ruler,
    },
  ];


  return (
    <div
      className="
      bg-slate-50
      rounded-[28px]
      border
      border-slate-200
      shadow-sm
      p-5
      hover:-translate-y-1
      hover:shadow-lg
      transition-all
      duration-300
      "
    >

      <div className="flex items-center justify-between mb-4">

        <h3 className="text-lg font-semibold text-slate-900">
          Body Measurements
        </h3>


        <div
          className="
          w-8
          h-8
          rounded-xl
          bg-blue-500
          flex
          items-center
          justify-center
          "
        >

          <Scale
            size={16}
            className="text-white"
          />

        </div>

      </div>



      <div className="grid grid-cols-2 gap-3">

        {stats.map((item) => {

          const Icon = item.icon;


          return (

            <div
              key={item.label}
              className="
              bg-white
              rounded-2xl
              p-3
              border
              border-slate-100
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
              "
            >

              <div
                className="
                w-8
                h-8
                rounded-xl
                bg-blue-500
                flex
                items-center
                justify-center
                mb-2
                "
              >

                <Icon
                  size={14}
                  className="text-white"
                />

              </div>


              <p className="text-xs text-slate-500">
                {item.label}
              </p>


              <h4 className="text-2xl font-bold mt-1 text-slate-900">
                {item.value}
              </h4>


              {item.change && (
                <div
                  className="
                  flex
                  items-center
                  gap-1
                  mt-1
                  text-[11px]
                  font-medium
                  text-emerald-600
                  "
                >

                  <TrendingDown size={11} />

                  {item.change}

                </div>
              )}

            </div>

          );

        })}

      </div>

    </div>
  );
}


export default BodyMeasurements;