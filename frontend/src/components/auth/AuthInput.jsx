import { motion } from "framer-motion";

const AuthInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  icon: Icon,
  error,
  required = false,
  autoComplete,
}) => {
  return (
    <div className="space-y-2">
      {/* Label */}

      <label className="flex items-center gap-1 text-sm font-semibold text-slate-700">
        {label}

        {required && (
          <span className="text-red-500">*</span>
        )}
      </label>

      {/* Input */}

      <motion.div
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
        className={`
          group
          flex
          h-14
          items-center
          rounded-2xl
          border
          bg-white
          px-4
          transition-all
          duration-300
          ${
            error
              ? "border-red-400 shadow-red-100"
              : "border-slate-200 hover:border-cyan-400 focus-within:border-cyan-500"
          }
          focus-within:shadow-lg
          focus-within:shadow-cyan-100
        `}
      >
        {Icon && (
          <Icon
            size={20}
            className="
              mr-3
              text-slate-400
              transition-colors
              duration-300
              group-focus-within:text-cyan-600
            "
          />
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="
            w-full
            bg-transparent
            text-[15px]
            font-medium
            text-slate-900
            placeholder:text-slate-400
            outline-none
          "
        />
      </motion.div>

      {/* Error */}

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-medium text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default AuthInput;