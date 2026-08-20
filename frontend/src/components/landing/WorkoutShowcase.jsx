import { motion } from "framer-motion";
import {
  Dumbbell,
  Timer,
  Flame,
  Target,
  ArrowRight,
  CircleCheck,
  TrendingUp,
  Activity,
} from "lucide-react";

function WorkoutShowcase() {
  const workouts = [
    {
      name: "Push Day",
      duration: "75 min",
      calories: "620",
      progress: 82,
      color: "bg-blue-500",
    },
    {
      name: "Pull Day",
      duration: "68 min",
      calories: "540",
      progress: 74,
      color: "bg-green-500",
    },
    {
      name: "Leg Day",
      duration: "90 min",
      calories: "710",
      progress: 96,
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative"
          >

            <div className="bg-white rounded-[34px] border border-slate-200 shadow-xl p-7">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-2xl font-bold">
                    Today's Workout
                  </h2>

                  <p className="text-slate-500">
                    Weekly Training Plan
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
                  <Dumbbell
                    className="text-white"
                    size={22}
                  />
                </div>

              </div>

              <div className="space-y-5 mt-8">

                {workouts.map((workout) => (

                  <div
                    key={workout.name}
                    className="rounded-3xl border border-slate-200 p-5"
                  >

                    <div className="flex justify-between">

                      <div>

                        <h3 className="font-bold text-lg">
                          {workout.name}
                        </h3>

                        <div className="flex gap-5 mt-2 text-sm text-slate-500">

                          <span className="flex items-center gap-1">
                            <Timer size={15}/>
                            {workout.duration}
                          </span>

                          <span className="flex items-center gap-1">
                            <Flame size={15}/>
                            {workout.calories}
                          </span>

                        </div>

                      </div>

                      <CircleCheck
                        className="text-green-500"
                        size={22}
                      />

                    </div>

                    <div className="mt-5">

                      <div className="flex justify-between text-sm mb-2">
                        <span>Completion</span>
                        <span>{workout.progress}%</span>
                      </div>

                      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">

                        <div
                          className={`h-full rounded-full ${workout.color}`}
                          style={{
                            width: `${workout.progress}%`,
                          }}
                        />

                      </div>

                    </div>

                  </div>

                ))}

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
              className="absolute -left-10 top-20 bg-white border border-slate-200 rounded-3xl shadow-xl p-5 w-56"
            >

              <Activity
                className="text-blue-600 mb-3"
                size={22}
              />

              <h3 className="font-bold">
                Weekly Streak
              </h3>

              <p className="text-4xl font-bold mt-3">
                18
              </p>

              <p className="text-sm text-slate-500">
                Days Active
              </p>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
              WORKOUT ENGINE
            </span>

            <h2 className="text-5xl font-bold mt-6 leading-tight">
              Smarter Training
              <br />
              Every Single Day
            </h2>

            <p className="mt-6 text-lg text-slate-500 leading-8">
              Build customized workout plans, monitor
              every session and improve your performance
              with detailed analytics.
            </p>

            <div className="space-y-7 mt-10">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Target
                    className="text-blue-600"
                    size={20}
                  />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Goal Based Planning
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Every workout adapts to your personal goals.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <TrendingUp
                    className="text-green-600"
                    size={20}
                  />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Progressive Overload
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Improve strength through intelligent progression.
                  </p>

                </div>

              </div>

            </div>

            <button className="mt-10 px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold flex items-center gap-2">

              Start Training

              <ArrowRight size={18}/>

            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default WorkoutShowcase;