import { ArrowRight } from "lucide-react";

export function Button({ children, variant = "primary", className = "", icon, ...props }) {
  return <button className={`btn btn-${variant} ${className}`} {...props}>{children}{icon && <ArrowRight size={16} />}</button>;
}

export function Card({ children, className = "", glow = "", ...props }) {
  return <section className={`glass-card ${glow ? `glow-${glow}` : ""} ${className}`} {...props}>{children}</section>;
}

export function PageHeading({ eyebrow, title, copy, action }) {
  return <div className="page-heading">
    <div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{copy && <p className="page-copy">{copy}</p>}</div>
    {action}
  </div>;
}

export function ProgressBar({ value, max = 100, color = "cyan" }) {
  return <div className="progress-track"><span className={`progress-fill ${color}`} style={{ width: `${Math.min(100, (value / max) * 100)}%` }} /></div>;
}

export function Ring({ value, max = 8, label, sublabel, color = "cyan", size = 180 }) {
  const percent = Math.min(100, (value / max) * 100);
  const radius = 42;
  const dash = 2 * Math.PI * radius;
  return <div className="ring" style={{ width: size, height: size }}>
    <svg viewBox="0 0 100 100"><circle className="ring-track" cx="50" cy="50" r={radius}/><circle className={`ring-progress ${color}`} cx="50" cy="50" r={radius} strokeDasharray={dash} strokeDashoffset={dash - (dash * percent) / 100}/></svg>
    <div className="ring-content"><strong>{label ?? value}</strong><span>{sublabel}</span></div>
  </div>;
}

export function StatusPill({ children, tone = "success" }) { return <span className={`status-pill ${tone}`}>{children}</span>; }

export function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return <div className="modal-backdrop" role="dialog" aria-modal="true"><div className="modal-card"><button className="modal-close" onClick={onClose} aria-label="Close">×</button><h2>{title}</h2>{children}</div></div>;
}
