import { motion } from "framer-motion";
import {
  BrainCircuit,
  Dumbbell,
  Activity,
  Apple,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    icon: Activity,
    title: "Workouts",
    value: "250+",
  },
  {
    icon: Apple,
    title: "Nutrition",
    value: "95%",
  },
  {
    icon: TrendingUp,
    title: "Progress",
    value: "+18%",
  },
];

const features = [
  "AI Workout Planning",
  "Smart Nutrition Tracking",
  "Recovery Analysis",
  "Progress Analytics",
];

const AuthHero = () => {
  return (
    <div className="flex h-full flex-col justify-center">
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2"
      >
        <BrainCircuit className="text-cyan-600" size={18} />

        <span className="font-semibold text-cyan-700">
          FitWithSudesh AI
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-8 text-5xl font-black leading-tight text-slate-900 xl:text-6xl"
      >
        Train
        <br />

        <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Smarter.
        </span>

        <br />

        Live Better.
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 max-w-lg text-lg leading-8 text-slate-600"
      >
        Build muscle, lose fat and stay consistent with AI-powered
        coaching, personalized workouts and intelligent nutrition
        tracking.
      </motion.p>

      {/* Features */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-10 space-y-4"
      >
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-4"
          >
            <div className="rounded-full bg-cyan-100 p-2">
              <CheckCircle2
                size={18}
                className="text-cyan-600"
              />
            </div>

            <span className="font-medium text-slate-700">
              {feature}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Dashboard Card */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Your Fitness Snapshot
            </h3>

            <p className="text-sm text-slate-500">
              Updated today
            </p>
          </div>

          <div className="rounded-xl bg-cyan-100 p-3">
            <Dumbbell
              size={22}
              className="text-cyan-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-50 p-4 text-center"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100">
                  <Icon
                    size={18}
                    className="text-cyan-600"
                  />
                </div>

                <p className="text-xl font-bold text-slate-900">
                  {item.value}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-medium text-slate-600">
              Weekly Goal
            </span>

            <span className="font-semibold text-cyan-600">
              84%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "84%" }}
              transition={{ duration: 1 }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthHero;
