import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect to start your fitness journey.",
      button: "Get Started",
      featured: false,
      features: [
        "Workout Tracking",
        "Nutrition Tracking",
        "Basic Progress Analytics",
        "Workout History",
        "Community Support",
      ],
    },
    {
      name: "Pro",
      price: "$12",
      description: "Unlock AI-powered fitness coaching.",
      button: "Start Pro",
      featured: true,
      features: [
        "Everything in Free",
        "AI Coach",
        "Recovery Analysis",
        "Advanced Analytics",
        "Unlimited Workout Plans",
        "Priority Support",
      ],
    },
    {
      name: "Elite",
      price: "$29",
      description: "Complete professional fitness platform.",
      button: "Go Elite",
      featured: false,
      features: [
        "Everything in Pro",
        "Custom AI Models",
        "Coach Dashboard",
        "Premium Reports",
        "Early Access Features",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
            <Sparkles size={16}/>
            PRICING
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-6">
            Choose Your Plan
          </h2>

          <p className="text-slate-500 text-lg mt-6 leading-8">
            Flexible plans designed for beginners,
            athletes and professionals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              className={`
                relative
                rounded-[34px]
                border
                p-8
                shadow-sm
                ${
                  plan.featured
                    ? "pricing-featured bg-blue-600 text-white border-blue-600 scale-105"
                    : "bg-white border-slate-200"
                }
              `}
            >

              {plan.featured && (
                <div className="pricing-popular-badge absolute top-6 right-6 bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <div className="mt-6 flex items-end gap-2">

                <h2 className="text-6xl font-black">
                  {plan.price}
                </h2>

                <span
                  className={
                    plan.featured
                      ? "text-blue-100 mb-2"
                      : "text-slate-500 mb-2"
                  }
                >
                  /month
                </span>

              </div>

              <p
                className={`mt-5 leading-7 ${
                  plan.featured
                    ? "text-blue-100"
                    : "text-slate-500"
                }`}
              >
                {plan.description}
              </p>

              <button
                className={`
                  w-full
                  mt-8
                  py-4
                  rounded-2xl
                  font-semibold
                  transition
                  ${
                    plan.featured
                      ? "bg-white text-blue-600 hover:bg-slate-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }
                `}
              >
                {plan.button}
              </button>

              <div className="mt-10 space-y-5">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >

                    <Check
                      size={18}
                      className={
                        plan.featured
                          ? "text-white"
                          : "text-blue-600"
                      }
                    />

                    <span
                      className={
                        plan.featured
                          ? "text-blue-50"
                          : "text-slate-600"
                      }
                    >
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;
