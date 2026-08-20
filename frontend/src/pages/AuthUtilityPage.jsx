import { CheckCircle2, MailCheck, RotateCcwKey, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useFitness } from "../context/FitnessContext";
import { Button, StatusPill } from "../components/ui/Primitives";

export function VerifyEmailPage() {
  const { verifyEmail } = useFitness();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [state, setState] = useState({ pending: true, ok: false, message: "Verifying your secure email link…" });
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const token = params.get("token");
    if (!token) { setState({ pending: false, ok: false, message: "This verification link is missing its secure token." }); return; }
    verifyEmail(token).then((result) => setState({ pending: false, ...result }));
  }, [params, verifyEmail]);
  return <AuthPanel icon={<MailCheck/>} eyebrow="Email verification" title={state.ok ? "Email verified." : "Verify your account."} message={state.message} tone={state.ok ? "success" : "warning"}>{state.ok && <Button onClick={() => navigate("/dashboard")} className="full">Open my dashboard</Button>}{!state.pending && !state.ok && <Link to="/login"><Button variant="secondary" className="full">Back to login</Button></Link>}</AuthPanel>;
}

export function ForgotPasswordPage() {
  const { requestPasswordReset } = useFitness();
  const [email, setEmail] = useState(""); const [notice, setNotice] = useState(null); const [busy, setBusy] = useState(false);
  const submit = async (event) => { event.preventDefault(); setBusy(true); const result = await requestPasswordReset(email.trim().toLowerCase()); setBusy(false); setNotice({ ...result, tone: result.ok ? "success" : "danger" }); };
  return <AuthPanel icon={<RotateCcwKey/>} eyebrow="Password recovery" title="Reset your password." message="Enter the verified email address on your account. We’ll send a private reset link."><form className="auth-form" onSubmit={submit}><label>Email address<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@gmail.com" autoComplete="email"/></label><Button type="submit" className="full" disabled={busy}>{busy ? "Sending…" : "Send reset link"}</Button></form>{notice && <StatusPill tone={notice.tone}>{notice.message}</StatusPill>}<Link className="auth-inline-link" to="/login">Back to login</Link></AuthPanel>;
}

export function ResetPasswordPage() {
  const { resetPassword } = useFitness();
  const [params] = useSearchParams(); const navigate = useNavigate(); const [password, setPassword] = useState(""); const [notice, setNotice] = useState(null); const [busy, setBusy] = useState(false);
  const submit = async (event) => { event.preventDefault(); const token = params.get("token"); if (!token) return setNotice({ tone: "danger", message: "This reset link is missing its secure token." }); setBusy(true); const result = await resetPassword({ token, password }); setBusy(false); if (result.ok) { setNotice({ tone: "success", message: result.message }); setTimeout(() => navigate("/dashboard"), 600); } else setNotice({ tone: "danger", message: result.message }); };
  return <AuthPanel icon={<ShieldCheck/>} eyebrow="Choose a new password" title="Secure your account." message="Use a new password with at least six characters."><form className="auth-form" onSubmit={submit}><label>New password<input required type="password" minLength="6" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="At least 6 characters" autoComplete="new-password"/></label><Button type="submit" className="full" disabled={busy}>{busy ? "Updating…" : "Update password"}</Button></form>{notice && <StatusPill tone={notice.tone}>{notice.message}</StatusPill>}</AuthPanel>;
}

function AuthPanel({ icon, eyebrow, title, message, tone, children }) { return <div className="auth-page auth-utility-page"><div className="auth-card auth-utility-card"><span className="auth-utility-icon">{icon}</span><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="auth-helper">{message}</p>{tone && <StatusPill tone={tone}>{message}</StatusPill>}{children}</div></div>; }
