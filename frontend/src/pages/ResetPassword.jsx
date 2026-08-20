import { useState } from "react";
import { Lock } from "lucide-react";

import AuthLayout from "../components/auth/AuthLayout";
import AuthHero from "../components/auth/AuthHero";
import AuthCard from "../components/auth/AuthCard";
import AuthHeader from "../components/auth/AuthHeader";
import PasswordInput from "../components/auth/PasswordInput";
import PasswordStrength from "../components/auth/PasswordStrength";

const ResetPassword = () => {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <AuthLayout hero={<AuthHero />}>
      <AuthCard>
        <AuthHeader
          title="Reset Password"
          subtitle="Create a new secure password."
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          <PasswordInput
            label="New Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="New password"
            icon={Lock}
            autoComplete="new-password"
            required
          />

          <PasswordStrength password={form.password} />

          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            icon={Lock}
            autoComplete="new-password"
            required
          />

          <button
            type="submit"
            className="h-14 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/30"
          >
            Reset Password
          </button>
        </form>
      </AuthCard>
    </AuthLayout>
  );
};

export default ResetPassword;