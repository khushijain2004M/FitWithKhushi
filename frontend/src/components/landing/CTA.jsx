import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

function CTA() {
  return (
    <section className="py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 px-10 py-16 lg:px-16 lg:py-20"
        >

          {/* Background Blur */}

          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-indigo-300/20 blur-3xl" />

          <div className="relative z-10 text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur text-white font-semibold">

              <Sparkles size={16} />

              Start Your Journey

            </div>

            <h2 className="mt-8 text-5xl lg:text-6xl font-black text-white leading-tight">
              Become The Strongest
              <br />
              Version Of Yourself
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-blue-100 text-lg leading-8">
              <span className="text-4xl">5 of my friends</span> already using FitWithSudesh to
              train smarter, recover faster and reach their goals
              with AI-powered coaching and with some faith in God, join quickly.
              <br />
              <strong className="text-black text-2xl">only 5 more wanna be athletes can get it.</strong>
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-12">

              <button className="px-8 py-4 rounded-2xl bg-white text-blue-600 font-bold hover:scale-105 transition flex items-center gap-2">

                Get Started Free

                <ArrowRight size={18} />

              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/30 bg-white/10 backdrop-blur text-white font-semibold hover:bg-white/20 transition">

                Watch Demo

              </button>

            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12 text-blue-100">

              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                No Credit Card
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                Cancel Anytime
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                Free 14-Day Trial
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default CTA;
