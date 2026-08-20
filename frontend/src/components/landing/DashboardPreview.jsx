import { motion } from "framer-motion";
import {
  Activity,
  Flame,
  Dumbbell,
  Brain,
  TrendingUp,
  Target,
  ArrowRight,
} from "lucide-react";

function DashboardPreview() {
  const cards = [
    {
      title: "Today's Workout",
      value: "82%",
      subtitle: "Workout Completed",
      icon: Dumbbell,
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "Calories Burned",
      value: "2,140",
      subtitle: "Today's Calories",
      icon: Flame,
      bg: "bg-orange-50",
      iconBg: "bg-orange-100",
      color: "text-orange-500",
    },
    {
      title: "Recovery Score",
      value: "92",
      subtitle: "Ready to Train",
      icon: Brain,
      bg: "bg-violet-50",
      iconBg: "bg-violet-100",
      color: "text-violet-600",
    },
    {
      title: "Weekly Progress",
      value: "+18%",
      subtitle: "Compared to Last Week",
      icon: TrendingUp,
      bg: "bg-green-50",
      iconBg: "bg-green-100",
      color: "text-green-600",
    },
  ];

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
              PRODUCT OVERVIEW
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-6 leading-tight">
              Everything You Need
              <br />
              In One Dashboard
            </h2>

            <p className="text-slate-500 text-lg leading-8 mt-6">
              Monitor workouts, nutrition, AI coaching,
              recovery, analytics and progress from one
              beautifully designed dashboard.
            </p>

            <div className="space-y-6 mt-10">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Activity className="text-blue-600" size={20}/>
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Live Workout Tracking
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Monitor every session with intelligent progress tracking.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Target className="text-green-600" size={20}/>
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Goal Management
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Stay focused with smart goal tracking and milestones.
                  </p>

                </div>

              </div>

            </div>

            <button className="mt-10 px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-2 transition">
              Explore Dashboard
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

            <div className="bg-white border border-slate-200 rounded-[34px] shadow-xl p-8">

              <div className="flex justify-between items-center mb-8">

                <div>
                  <h3 className="text-2xl font-bold">
                    Dashboard
                  </h3>

                  <p className="text-slate-500">
                    Today's Overview
                  </p>
                </div>

                <div className="px-4 py-2 rounded-xl bg-green-100 text-green-600 font-semibold text-sm">
                  Live
                </div>

              </div>

              <div className="grid grid-cols-2 gap-5">

                {cards.map((card) => {

                  const Icon = card.icon;

                  return (

                    <div
                      key={card.title}
                      className={`${card.bg} rounded-3xl p-5`}
                    >

                      <div
                        className={`${card.iconBg} w-11 h-11 rounded-xl flex items-center justify-center`}
                      >
                        <Icon
                          size={20}
                          className={card.color}
                        />
                      </div>

                      <p className="text-sm text-slate-500 mt-5">
                        {card.title}
                      </p>

                      <h2 className="text-3xl font-bold mt-1">
                        {card.value}
                      </h2>

                      <p className="text-xs text-slate-500 mt-1">
                        {card.subtitle}
                      </p>

                    </div>

                  );

                })}

              </div>

              {/* Progress */}

              <div className="mt-8 bg-slate-50 rounded-3xl p-6">

                <div className="flex justify-between mb-2">

                  <span className="font-semibold">
                    Weekly Goal
                  </span>

                  <span className="text-blue-600 font-bold">
                    84%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

                  <div className="h-full w-[84%] rounded-full bg-blue-600"/>

                </div>

              </div>

            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -left-10 bottom-8 bg-white border border-slate-200 rounded-3xl shadow-xl p-5 w-64"
            >

              <div className="flex items-center gap-3">

                <Brain
                  className="text-blue-600"
                  size={22}
                />

                <h3 className="font-bold">
                  AI Insight
                </h3>

              </div>

              <p className="text-slate-500 text-sm leading-6 mt-4">
                Recovery is excellent today.
                Increase workout intensity by 10%
                and maintain your current protein intake.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;