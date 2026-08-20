import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Bot,
  MessageCircle,
  HeartPulse,
  Moon,
} from "lucide-react";

function AIShowcase() {
  return (
    <section
      id="ai"
      className="py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
              <Sparkles size={16}/>
              AI COACH
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-6 leading-tight">
              Your Personal
              <br />
              Fitness Coach
              <span className="text-blue-600">
                {" "}Powered By AI
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-500 leading-8">
              Receive intelligent workout suggestions,
              nutrition insights and recovery recommendations
              personalized specifically for your body.
            </p>

            <div className="space-y-6 mt-10">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Brain
                    className="text-blue-600"
                    size={20}
                  />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Smart Workout Planning
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Adaptive workout recommendations based
                    on recovery and performance.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <HeartPulse
                    className="text-green-600"
                    size={20}
                  />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Recovery Analysis
                  </h3>

                  <p className="text-slate-500 mt-1">
                    AI analyzes fatigue, sleep and
                    readiness before every session.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                  <TrendingUp
                    className="text-violet-600"
                    size={20}
                  />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Continuous Progress
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Weekly insights help you improve
                    consistently over time.
                  </p>

                </div>

              </div>

            </div>

            <button className="mt-10 px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-2 transition">
              Try AI Coach
              <ArrowRight size={18}/>
            </button>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="bg-white border border-slate-200 rounded-[34px] shadow-xl p-7">

              <div className="flex items-center justify-between mb-8">

                <div className="flex items-center gap-3">

                  <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
                    <Bot
                      className="text-white"
                      size={24}
                    />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      Forge AI
                    </h3>

                    <p className="text-slate-500">
                      Online Now
                    </p>

                  </div>

                </div>

                <div className="w-3 h-3 rounded-full bg-green-500"/>

              </div>

              {/* CHAT */}

              <div className="space-y-4">

                <div className="bg-slate-100 rounded-2xl p-4 max-w-sm">

                  <p className="text-sm leading-6">
                    Good morning 👋
                    Ready for today's workout?
                  </p>

                </div>

                <div className="bg-blue-600 rounded-2xl p-4 text-white ml-auto max-w-sm">

                  <p className="text-sm leading-6">
                    Yes, what's my recovery score?
                  </p>

                </div>

                <div className="bg-slate-100 rounded-2xl p-4">

                  <div className="flex items-center gap-2 mb-3">

                    <Brain
                      size={18}
                      className="text-blue-600"
                    />

                    <h4 className="font-semibold">
                      Recovery Report
                    </h4>

                  </div>

                  <div className="space-y-4">

                    <div>

                      <div className="flex justify-between text-sm mb-1">
                        <span>Recovery</span>
                        <span>92%</span>
                      </div>

                      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full w-[92%] bg-green-500 rounded-full"/>
                      </div>

                    </div>

                    <div>

                      <div className="flex justify-between text-sm mb-1">
                        <span>Energy</span>
                        <span>88%</span>
                      </div>

                      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full w-[88%] bg-blue-500 rounded-full"/>
                      </div>

                    </div>

                  </div>

                  <div className="mt-5 bg-white rounded-xl p-4 border border-slate-200">

                    <div className="flex gap-3">

                      <Moon
                        className="text-violet-600"
                        size={20}
                      />

                      <div>

                        <h5 className="font-semibold">
                          AI Recommendation
                        </h5>

                        <p className="text-sm text-slate-500 mt-1 leading-6">
                          Increase today's volume by 10%.
                          Your sleep quality indicates
                          excellent recovery.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Floating */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -left-8 bottom-12 bg-white border border-slate-200 shadow-xl rounded-3xl p-5 w-60"
            >

              <div className="flex items-center gap-3">

                <MessageCircle
                  className="text-blue-600"
                  size={20}
                />

                <h3 className="font-bold">
                  AI Insight
                </h3>

              </div>

              <p className="text-sm text-slate-500 leading-6 mt-4">
                Protein intake is below target.
                Increase by 18g after today's workout.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default AIShowcase;