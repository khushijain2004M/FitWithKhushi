import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Mail, Lock } from "lucide-react";

import { login, clearError } from "../store/slices/authSlice";

import AuthLayout from "../components/auth/AuthLayout";
import AuthHero from "../components/auth/AuthHero";
import AuthCard from "../components/auth/AuthCard";
import AuthHeader from "../components/auth/AuthHeader";
import AuthFooter from "../components/auth/AuthFooter";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import SocialLogin from "../components/auth/SocialLogin";

const Login = () => {
  // State
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
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

  // Handle Login
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        email: form.email,
        password: form.password,
      })
    );
  };

  // Listen for Authentication Changes
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
    <AuthLayout hero={<AuthHero />}>
      <AuthCard>
        <AuthHeader
          title="Welcome Back 👋"
          subtitle="Sign in to continue your fitness journey."
        />

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <AuthInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            icon={Mail}
            autoComplete="email"
            required
          />

          <PasswordInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            icon={Lock}
            autoComplete="current-password"
            required
          />

          <div className="flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="h-4 w-4 rounded border-slate-300 accent-cyan-600"
              />

              <span className="text-sm text-slate-600">
                Remember me
              </span>
            </label>

            <Link
              to="/forgot-password"
              className="text-sm font-medium text-cyan-600 transition hover:text-cyan-700"
            >
              Forgot Password?
            </Link>
          </div>

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
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="mt-8">
          <SocialLogin />
        </div>

        <AuthFooter
          text="Don't have an account?"
          linkText="Create Account"
          linkTo="/register"
        />
      </AuthCard>
    </AuthLayout>
  );
};

export default Login;