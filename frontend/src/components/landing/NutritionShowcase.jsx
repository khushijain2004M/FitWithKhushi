import { motion } from "framer-motion";
import {
  Apple,
  Beef,
  Wheat,
  Droplets,
  Flame,
  ArrowRight,
  CheckCircle2,
  PieChart,
} from "lucide-react";

function NutritionShowcase() {
  const macros = [
    {
      name: "Protein",
      value: "145 / 180g",
      progress: 82,
      color: "bg-red-500",
      icon: Beef,
      bg: "bg-red-100",
      iconColor: "text-red-500",
    },
    {
      name: "Carbs",
      value: "240 / 300g",
      progress: 80,
      color: "bg-yellow-500",
      icon: Wheat,
      bg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      name: "Water",
      value: "6 / 8 Glasses",
      progress: 75,
      color: "bg-cyan-500",
      icon: Droplets,
      bg: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
  ];

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-600 font-semibold text-sm">
              NUTRITION SYSTEM
            </span>

            <h2 className="text-5xl font-bold mt-6 leading-tight text-slate-900">
              Fuel Your Body
              <br />
              With Precision
            </h2>

            <p className="mt-6 text-lg text-slate-500 leading-8">
              Track calories, macros, hydration and daily nutrition
              with AI-powered recommendations for better performance.
            </p>

            <div className="space-y-6 mt-10">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <PieChart className="text-green-600" size={20}/>
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Macro Tracking
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Protein, carbs and fats tracked automatically.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <CheckCircle2 className="text-blue-600" size={20}/>
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Daily Goals
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Stay on target with personalized nutrition goals.
                  </p>
                </div>

              </div>

            </div>

            <button className="mt-10 px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold flex items-center gap-2">
              Explore Nutrition
              <ArrowRight size={18}/>
            </button>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="bg-white border border-slate-200 rounded-[34px] shadow-xl p-7">

              <div className="flex justify-between items-center">

                <div>
                  <h2 className="text-2xl font-bold">
                    Nutrition
                  </h2>

                  <p className="text-slate-500">
                    Today's Progress
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center">
                  <Apple className="text-white" size={22}/>
                </div>

              </div>

              <div className="bg-green-50 rounded-3xl p-6 mt-8">

                <div className="flex justify-between items-center">

                  <div>
                    <p className="text-sm text-slate-500">
                      Calories Consumed
                    </p>

                    <h2 className="text-4xl font-bold mt-2">
                      2,150
                    </h2>
                  </div>

                  <Flame className="text-orange-500" size={30}/>

                </div>

              </div>

              <div className="space-y-6 mt-8">

                {macros.map((macro) => {

                  const Icon = macro.icon;

                  return (

                    <div key={macro.name}>

                      <div className="flex justify-between mb-2">

                        <div className="flex items-center gap-3">

                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${macro.bg}`}>
                            <Icon className={macro.iconColor} size={18}/>
                          </div>

                          <span className="font-semibold">
                            {macro.name}
                          </span>

                        </div>

                        <span className="text-sm text-slate-500">
                          {macro.value}
                        </span>

                      </div>

                      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">

                        <div
                          className={`h-full rounded-full ${macro.color}`}
                          style={{
                            width: `${macro.progress}%`,
                          }}
                        />

                      </div>

                    </div>

                  );

                })}

              </div>

            </div>

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -right-10 top-20 bg-white border border-slate-200 shadow-xl rounded-3xl p-5 w-56"
            >

              <h3 className="font-bold">
                Daily Goal
              </h3>

              <p className="text-4xl font-bold text-green-600 mt-3">
                86%
              </p>

              <p className="text-sm text-slate-500 mt-2">
                Great job! Keep eating balanced meals.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default NutritionShowcase;