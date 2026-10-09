import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AuthFooter = ({
  text,
  linkText,
  linkTo,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25 }}
      className="mt-8 space-y-6"
    >
      {/* Login / Register Switch */}
      <div className="text-center">
        <span className="text-sm text-slate-400">
          {text}{" "}
        </span>

        <Link
          to={linkTo}
          className="font-semibold text-cyan-400 transition-colors duration-200 hover:text-cyan-300"
        >
          {linkText}
        </Link>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
          FitWithKhushi
        </span>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      {/* Bottom Links */}
      <div className="flex items-center justify-center gap-6 text-sm">
        <Link
          to="/"
          className="text-slate-500 transition-colors hover:text-slate-300"
        >
          Home
        </Link>

        <button
          type="button"
          className="text-slate-500 transition-colors hover:text-slate-300"
        >
          Privacy
        </button>

        <button
          type="button"
          className="text-slate-500 transition-colors hover:text-slate-300"
        >
          Terms
        </button>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-slate-600">
        © {new Date().getFullYear()} FitWithKhushi. All rights reserved.
      </p>
    </motion.div>
  );
};

export default AuthFooter;
