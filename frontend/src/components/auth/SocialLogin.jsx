import { motion } from "framer-motion";
//import { Github } from "lucide-react";

const GoogleIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303C33.655 32.657 29.243 36 24 36c-6.627 0-12-5.373-12-12S17.373 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4c-7.682 0-14.347 4.337-17.694 10.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.143 35.091 26.715 36 24 36c-5.222 0-9.62-3.329-11.284-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.05 12.05 0 01-4.084 5.57l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.651-.389-3.917z"
    />
  </svg>
);

const SocialButton = ({ icon, title }) => {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type="button"
      className="
        flex
        h-14
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        border
        border-slate-200
        bg-white
        font-medium
        text-slate-700
        shadow-sm
        transition-all
        duration-300
        hover:border-cyan-500
        hover:bg-cyan-50
        hover:shadow-md
      "
    >
      {icon}
      <span>{title}</span>
    </motion.button>
  );
};

const SocialLogin = () => {
  return (
    <div className="space-y-6">
      {/* Divider */}

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200" />

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          OR CONTINUE WITH
        </span>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* Buttons */}

      <div className="space-y-3">
        <SocialButton
          title="Continue with Google"
          icon={<GoogleIcon />}
        />

        <SocialButton
          title="Continue with GitHub"
          // icon={<Github size={20} />}
        />
      </div>
    </div>
  );
};

export default SocialLogin;