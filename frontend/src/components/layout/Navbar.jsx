import { Activity, Bot, Calculator, ChevronDown, Droplets, Dumbbell, Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFitness } from "../../context/FitnessContext";

const links = [
  ["Dashboard", "/dashboard", Activity], ["BMI", "/bmi-calculator", Calculator], ["Calories", "/calories-calculator", Sparkles],
  ["Workouts", "/workout-planner", Dumbbell], ["Water", "/water-tracker", Droplets], ["Khushi AI", "/ai-coach", Bot],
];

export default function Navbar() {
  const { theme, setTheme, user, logout } = useFitness();
  const [menu, setMenu] = useState(false); const [profile, setProfile] = useState(false); const navigate = useNavigate();
  const changeTheme = () => setTheme(theme === "dark" ? "light" : theme === "light" ? "neon" : "dark");
  const signOut = () => { logout(); setProfile(false); navigate("/"); };
  return <header className="site-header">
    <div className="nav-wrap">
      <Link to="/" className="brand" onClick={() => setMenu(false)}><span className="brand-mark"><Dumbbell size={19}/></span><span>FitWith<span>Khushi</span></span></Link>
      <nav className={`primary-nav ${menu ? "open" : ""}`}>
        {links.map(([name, to, Icon]) => <NavLink key={to} to={to} onClick={() => setMenu(false)}><Icon size={15}/>{name}</NavLink>)}
        <NavLink to="/nutrition" onClick={() => setMenu(false)}>Nutrition</NavLink><NavLink to="/progress" onClick={() => setMenu(false)}>Progress</NavLink>
      </nav>
      <div className="nav-actions">
        <button className="icon-btn theme-btn" onClick={changeTheme} aria-label="Switch theme" title="Switch theme">{theme === "light" ? <Sun size={17}/> : <Moon size={17}/>}<span className="theme-label">{theme}</span></button>
        {user ? <div className="profile-menu"><button className="avatar-button" onClick={() => setProfile(!profile)}><span>{user.name?.[0]?.toUpperCase() || "S"}</span><b>{user.name?.split(" ")[0] || "Khushi"}</b><ChevronDown size={14}/></button>
          {profile && <div className="profile-dropdown"><Link to="/profile" onClick={() => setProfile(false)}>Profile</Link><Link to="/contact" onClick={() => setProfile(false)}>Settings & help</Link><button onClick={signOut}>Log out</button></div>}</div>
          : <Link className="btn btn-small btn-primary" to="/login">Log in</Link>}
        <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
      </div>
    </div>
  </header>;
}
