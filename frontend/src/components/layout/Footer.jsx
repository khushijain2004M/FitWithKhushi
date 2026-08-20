import { Dumbbell, Heart, Mail } from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { socials } from "../../utils/socials";

export default function Footer() {
  return <footer className="site-footer"><div className="footer-top">
    <div><Link to="/" className="brand"><span className="brand-mark"><Dumbbell size={18}/></span>FitWith<span>Sudesh</span></Link><p>Train with intention. Progress with proof.</p></div>
    <div className="footer-links"><Link to="/dashboard">Dashboard</Link><Link to="/pricing">Pricing</Link><Link to="/contact">Contact</Link><Link to="/ai-coach">Sudesh AI</Link></div>
    <div className="social-links"><a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin/></a><a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub/></a><a href={socials.discord} target="_blank" rel="noreferrer" aria-label="Discord"><FaDiscord/></a><a href={`mailto:${socials.email}`} aria-label="Email Sudesh"><Mail/></a></div>
  </div><div className="footer-bottom"><span>© 2026 FitWithSudesh. Made for consistent humans.</span><span>Built with <Heart size={13} fill="currentColor"/> in India</span><Link to="/contact">Privacy & Terms</Link></div></footer>;
}
