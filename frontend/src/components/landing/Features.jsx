import { motion } from "framer-motion";
import {
  Brain,
  Dumbbell,
  Apple,
  BarChart3,
  HeartPulse,
  Trophy,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Coach",
      description:
        "Receive intelligent workout recommendations based on your recovery, goals and training history.",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Dumbbell,
      title: "Workout Planner",
      description:
        "Create structured workout routines, monitor progress and stay consistent every week.",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: Apple,
      title: "Nutrition Tracking",
      description:
        "Log meals, monitor macros, hydration and calorie intake with ease.",
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description:
        "Interactive charts and insights to measure long-term improvements.",
      color: "bg-violet-100",
      iconColor: "text-violet-600",
    },
    {
      icon: HeartPulse,
      title: "Recovery Analysis",
      description:
        "Understand readiness, fatigue and muscle recovery before every workout.",
      color: "bg-red-100",
      iconColor: "text-red-500",
    },
    {
      icon: Trophy,
      title: "Goal Achievement",
      description:
        "Track streaks, unlock achievements and stay motivated every day.",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  return (
    <section
      id="features"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
            FEATURES
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-6">
            Everything You Need To Build
            <span className="text-blue-600">
              {" "}A Better You
            </span>
          </h2>

          <p className="text-slate-500 text-lg mt-6 leading-8">
            FitWithSudesh combines intelligent coaching, workout planning,
            nutrition management and analytics into one seamless platform.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-20">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                className="
                  group
                  bg-white
                  rounded-[30px]
                  border
                  border-slate-200
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  p-7
                "
              >

                <div
                  className={`
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    ${feature.color}
                  `}
                >
                  <Icon
                    className={feature.iconColor}
                    size={24}
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-7">
                  {feature.title}
                </h3>

                <p className="text-slate-500 leading-7 mt-4">
                  {feature.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition">
                  Learn More
                  <span>→</span>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;
