import { motion } from "framer-motion";

const AuthCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -2 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-[0_20px_60px_rgba(15,23,42,0.08)]
      "
    >
      {/* Top Accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

      {/* Decorative Circle */}
      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-50" />
      <div className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-blue-50" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default AuthCard;