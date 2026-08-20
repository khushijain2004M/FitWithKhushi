import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const PasswordStrength = ({ password = "" }) => {
  const checks = [
    {
      label: "At least 8 characters",
      valid: password.length >= 8,
    },
    {
      label: "Uppercase letter",
      valid: /[A-Z]/.test(password),
    },
    {
      label: "Lowercase letter",
      valid: /[a-z]/.test(password),
    },
    {
      label: "Contains a number",
      valid: /\d/.test(password),
    },
    {
      label: "Special character",
      valid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  const score = checks.filter((item) => item.valid).length;

  const levels = [
    {
      label: "Very Weak",
      color: "bg-red-500",
      text: "text-red-600",
      width: "20%",
    },
    {
      label: "Weak",
      color: "bg-orange-500",
      text: "text-orange-600",
      width: "40%",
    },
    {
      label: "Medium",
      color: "bg-yellow-500",
      text: "text-yellow-600",
      width: "60%",
    },
    {
      label: "Good",
      color: "bg-cyan-500",
      text: "text-cyan-600",
      width: "80%",
    },
    {
      label: "Strong",
      color: "bg-emerald-500",
      text: "text-emerald-600",
      width: "100%",
    },
  ];

  const strength =
    password.length === 0
      ? null
      : levels[Math.max(0, score - 1)];

  return (
    <motion.div
      layout
      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
    >
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-slate-800">
          Password Strength
        </h4>

        {strength && (
          <span
            className={`rounded-full bg-white px-3 py-1 text-xs font-semibold ${strength.text}`}
          >
            {strength.label}
          </span>
        )}
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: strength ? strength.width : "0%",
          }}
          transition={{ duration: 0.35 }}
          className={`h-full ${
            strength
              ? strength.color
              : "bg-slate-300"
          }`}
        />
      </div>

      <div className="mt-5 space-y-3">
        {checks.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3"
          >
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full ${
                item.valid
                  ? "bg-emerald-100"
                  : "bg-slate-200"
              }`}
            >
              {item.valid ? (
                <Check
                  size={12}
                  className="text-emerald-600"
                />
              ) : (
                <X
                  size={12}
                  className="text-slate-500"
                />
              )}
            </div>

            <span
              className={`text-sm ${
                item.valid
                  ? "text-emerald-600"
                  : "text-slate-500"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PasswordStrength;