import { motion } from "framer-motion";

const AuthLayout = ({ hero, children, heroClassName = "" }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10 lg:px-10">

        <div className="grid w-full items-center gap-20 lg:grid-cols-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`hidden lg:col-span-5 lg:block ${heroClassName}`}
          >
            {hero}
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="mx-auto max-w-md">
              {children}
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default AuthLayout;