import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { User, Mail, Lock } from "lucide-react";

import { register, clearError } from "../store/slices/authSlice";

import AuthLayout from "../components/auth/AuthLayout";
import AuthHero from "../components/auth/AuthHero";
import AuthCard from "../components/auth/AuthCard";
import AuthHeader from "../components/auth/AuthHeader";
import AuthFooter from "../components/auth/AuthFooter";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import PasswordStrength from "../components/auth/PasswordStrength";
import SocialLogin from "../components/auth/SocialLogin";

const Register = () => {
  // State
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  // Redux
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  // Navigation
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!form.agree) {
      alert("Please accept Terms & Conditions.");
      return;
    }

    dispatch(
      register({
        fullName: form.fullName,
        email: form.email,
        password: form.password,
      })
    );
  };

  // Listen for Auth Changes
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }

    if (error) {
      alert(error);
      dispatch(clearError());
    }
  }, [isAuthenticated, error, navigate, dispatch]);

  return (
    <AuthLayout
      hero={<AuthHero />}
      heroClassName="-mt-40"
    >
      <AuthCard>
        <AuthHeader
          title="Create your account 🚀"
          subtitle="Join FitWithSudesh and start tracking your fitness journey."
        />

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <AuthInput
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            icon={User}
            required
          />

          <AuthInput
            label="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            icon={Mail}
            required
            autoComplete="email"
          />

          <PasswordInput
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create a strong password"
            icon={Lock}
            required
            autoComplete="new-password"
          />

          <PasswordStrength password={form.password} />

          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            icon={Lock}
            required
            autoComplete="new-password"
          />

          <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-cyan-300">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1 h-4 w-4 accent-cyan-600"
            />

            <span className="text-sm leading-6 text-slate-600">
              I agree to the{" "}
              <button
                type="button"
                className="font-semibold text-cyan-600 hover:text-cyan-700"
              >
                Terms of Service
              </button>{" "}
              and{" "}
              <button
                type="button"
                className="font-semibold text-cyan-600 hover:text-cyan-700"
              >
                Privacy Policy
              </button>
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="
              h-14
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-base
              font-semibold
              text-white
              shadow-lg
              shadow-cyan-500/20
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-xl
              hover:shadow-cyan-500/30
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="mt-8">
          <SocialLogin />
        </div>

        <AuthFooter
          text="Already have an account?"
          linkText="Sign In"
          linkTo="/login"
        />
      </AuthCard>
    </AuthLayout>
  );
};

export default Register;
