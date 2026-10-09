import { Dumbbell, Heart } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { socials } from "../../utils/socials";

export default function Footer() {
  return <footer className="site-footer"><div className="footer-top">
    <div><Link to="/" className="brand"><span className="brand-mark"><Dumbbell size={18}/></span>FitWith<span>Khushi</span></Link><p>Train with intention. Progress with proof.</p></div>
    <div className="footer-links"><Link to="/dashboard">Dashboard</Link><Link to="/pricing">Pricing</Link><Link to="/contact">Contact</Link><Link to="/ai-coach">Khushi AI</Link></div>
    <div className="social-links"><a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub/></a></div>
  </div><div className="footer-bottom"><span>© 2026 FitWithKhushi. Made for consistent humans.</span><span>Built with <Heart size={13} fill="currentColor"/> in India</span><Link to="/contact">Privacy & Terms</Link></div></footer>;
}
