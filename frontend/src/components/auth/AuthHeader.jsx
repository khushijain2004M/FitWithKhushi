import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AuthHeader = ({
  title,
  subtitle,
  showLogo = true,
}) => {
  return (
    <div className="mb-10">
      {showLogo && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex items-center gap-4"
        >
          {/* Logo */}

          <Link
            to="/"
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-cyan-500
              to-blue-600
              shadow-lg
              shadow-cyan-500/20
            "
          >
            <Dumbbell
              size={24}
              className="text-white"
            />
          </Link>

          {/* Brand */}

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              FitWithSudesh
            </h2>

            <p className="text-sm text-slate-500">
              AI Fitness Platform
            </p>
          </div>
        </motion.div>
      )}

      {/* Title */}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>

        <p className="mt-3 text-base leading-7 text-slate-500">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
};

export default AuthHeader;
