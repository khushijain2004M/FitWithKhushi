import { LockKeyhole, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFitness } from "../../context/FitnessContext";
import { Button, StatusPill } from "../ui/Primitives";

export default function LoginForm() {
  const { register, authenticate, resendVerification, theme, setTheme } = useFitness();
  const [tab, setTab] = useState("signin");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [notice, setNotice] = useState(null);
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const switchTab = (nextTab) => { setTab(nextTab); setNotice(null); setForm((value) => ({ ...value, password: "" })); };

  const submit = async (event) => {
    event.preventDefault();
    setBusy(true);
    const result = tab === "signup"
      ? await register(form)
      : await authenticate(form);
    setBusy(false);
    if (!result.ok) return setNotice({ message: result.message, tone: "danger" });
    if (tab === "signup") {
      setNotice({ message: result.message, tone: "success" });
      setTab("signin");
      setForm((value) => ({ ...value, password: "" }));
      return;
    }
    navigate(location.state?.from || "/dashboard", { replace: true });
  };

  const resend = async () => {
    if (!form.email.includes("@")) return setNotice({ message: "Enter your email address first, then resend verification.", tone: "warning" });
    setBusy(true);
    const result = await resendVerification(form.email.trim().toLowerCase());
    setBusy(false);
    setNotice({ message: result.message, tone: result.ok ? "success" : "danger" });
  };

  return <div className="auth-card">
    <div className="auth-card-top">
      <div><span className="eyebrow">FitWithSudesh account</span><h1>{tab === "signin" ? "Welcome back." : "Create your account."}</h1></div>
      <div className="mini-theme"><button type="button" onClick={() => setTheme("light")} className={theme === "light" ? "active" : ""}>Light</button><button type="button" onClick={() => setTheme("dark")} className={theme === "dark" ? "active" : ""}>Dark</button><button type="button" onClick={() => setTheme("neon")} className={theme === "neon" ? "active" : ""}>Neon</button></div>
    </div>
    <div className="auth-tabs"><button type="button" className={tab === "signin" ? "active" : ""} onClick={() => switchTab("signin")}>Sign in</button><button type="button" className={tab === "signup" ? "active" : ""} onClick={() => switchTab("signup")}>Create account</button></div>
    {notice && <StatusPill tone={notice.tone}>{notice.message}</StatusPill>}
    <form onSubmit={submit} className="auth-form">
      {tab === "signup" && <label>Your name<input required name="name" value={form.name} onChange={update} placeholder="Your full name" minLength="2" autoComplete="name"/></label>}
      <label>Gmail or email address<input required name="email" value={form.email} onChange={update} placeholder="you@gmail.com" type="email" autoComplete="email"/></label>
      <label>{tab === "signup" ? "Set password" : "Password"}<div className="input-with-icon"><input required name="password" value={form.password} onChange={update} placeholder="At least 6 characters" type="password" minLength="6" autoComplete={tab === "signup" ? "new-password" : "current-password"}/><LockKeyhole size={16}/></div></label>
      <Button type="submit" className="full" disabled={busy}>{busy ? "Please wait…" : tab === "signin" ? "Log in to FitWithSudesh" : "Create account"}</Button>
    </form>
    {tab === "signin" ? <div className="auth-actions"><Link to="/forgot-password">Forgot password?</Link><button type="button" onClick={resend} disabled={busy}>Resend verification</button></div> : <p className="auth-helper">Your password is required every time you log in. We will send a verification link before you can access your account.</p>}
    {tab === "signin" && <p className="auth-helper">New here? Create an account first, then verify your email and log in with the same password.</p>}
    <p className="auth-trust"><ShieldCheck size={15}/> Login is required to access your fitness workspace.</p>
  </div>;
}
