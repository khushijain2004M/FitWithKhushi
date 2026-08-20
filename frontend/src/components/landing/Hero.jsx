import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Activity,
  Dumbbell,
  Apple,
  Brain,
  Flame,
  TrendingUp,
  Play,
  Star,
} from "lucide-react";

function Hero() {
  const stats = [
    {
      value: "150K+",
      label: "Workouts Completed",
    },
    {
      value: "4.2M",
      label: "Calories Burned",
    },
    {
      value: "98%",
      label: "Goal Success",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-36 pb-24">

      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-50 via-white to-slate-100" />

      <div className="absolute -top-44 -left-44 w-[520px] h-[520px] bg-blue-300/20 blur-[140px] rounded-full" />

      <div className="absolute top-52 right-[-180px] w-[450px] h-[450px] bg-indigo-300/20 blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <Sparkles size={16} />
              AI Powered Fitness Platform
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-[1.05] text-slate-900">

              Train
              <br />

              <span className="text-blue-600">
                Smarter.
              </span>

              <br />

              Recover
              <br />

              Better.

            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">
              FitWithSudesh combines AI coaching, workout planning,
              nutrition tracking and progress analytics into one
              intelligent fitness platform.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="px-7 py-4 rounded-2xl bg-blue-600 text-white font-semibold flex items-center gap-2 hover:bg-blue-700 transition">

                Get Started

                <ArrowRight size={18} />

              </button>

              <button className="px-7 py-4 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 flex items-center gap-2 font-semibold">

                <Play size={18} />

                Live Demo

              </button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-16">

              {stats.map((item) => (

                <div key={item.label}>

                  <h2 className="text-3xl font-bold text-slate-900">
                    {item.value}
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .9 }}
            className="relative"
          >

            {/* Main Dashboard */}

            <div className="bg-white rounded-[34px] border border-slate-200 shadow-xl p-7">

              <div className="flex items-center justify-between mb-8">

                <div>

                  <p className="text-sm text-slate-500">
                    Welcome Back
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Sudesh 👋
                  </h3>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">

                  <Brain
                    className="text-white"
                    size={26}
                  />

                </div>

              </div>

              {/* Metrics */}

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-blue-50 rounded-2xl p-5">

                  <Activity
                    className="text-blue-600 mb-3"
                    size={20}
                  />

                  <p className="text-sm text-slate-500">
                    Today's Workout
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                    82%
                  </h2>

                </div>

                <div className="bg-orange-50 rounded-2xl p-5">

                  <Flame
                    className="text-orange-500 mb-3"
                    size={20}
                  />

                  <p className="text-sm text-slate-500">
                    Calories
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                    2,140
                  </h2>

                </div>

                <div className="bg-green-50 rounded-2xl p-5">

                  <TrendingUp
                    className="text-green-600 mb-3"
                    size={20}
                  />

                  <p className="text-sm text-slate-500">
                    Progress
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                    +18%
                  </h2>

                </div>

                <div className="bg-purple-50 rounded-2xl p-5">

                  <Star
                    className="text-purple-600 mb-3"
                    size={20}
                  />

                  <p className="text-sm text-slate-500">
                    Fitness Score
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                    92
                  </h2>

                </div>

              </div>

              {/* AI Card */}

              <div className="mt-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">

                <div className="flex items-center gap-3">

                  <Brain size={20} />

                  <h3 className="font-semibold">
                    AI Coach Recommendation
                  </h3>

                </div>

                <p className="mt-3 text-blue-100 leading-7">
                  Your recovery score is excellent today.
                  Increase training volume by 10% and
                  prioritize protein intake after workout.
                </p>

              </div>

            </div>

                        {/* Floating Workout Card */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -left-10 top-12 bg-white border border-slate-200 rounded-3xl shadow-xl p-5 w-64"
            >
              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Dumbbell
                    className="text-blue-600"
                    size={18}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Push Workout
                  </h3>

                  <p className="text-xs text-slate-500">
                    Chest • Shoulders • Triceps
                  </p>
                </div>

              </div>

              <div className="mt-5">

                <div className="flex justify-between text-sm mb-2">
                  <span>Completion</span>
                  <span className="font-semibold">82%</span>
                </div>

                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[82%] rounded-full bg-blue-600" />
                </div>

              </div>
            </motion.div>

            {/* Floating Nutrition Card */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-8 bottom-12 bg-white border border-slate-200 rounded-3xl shadow-xl p-5 w-64"
            >

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">

                  <Apple
                    className="text-green-600"
                    size={18}
                  />

                </div>

                <div>

                  <h3 className="font-semibold">
                    Nutrition
                  </h3>

                  <p className="text-xs text-slate-500">
                    Today's Macros
                  </p>

                </div>

              </div>

              <div className="space-y-4 mt-5">

                <div>

                  <div className="flex justify-between text-xs mb-1">
                    <span>Protein</span>
                    <span>145g</span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-[82%] rounded-full bg-green-500" />
                  </div>

                </div>

                <div>

                  <div className="flex justify-between text-xs mb-1">
                    <span>Carbs</span>
                    <span>220g</span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-[72%] rounded-full bg-yellow-500" />
                  </div>

                </div>

                <div>

                  <div className="flex justify-between text-xs mb-1">
                    <span>Fat</span>
                    <span>62g</span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-[64%] rounded-full bg-pink-500" />
                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
