import { Bot, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Primitives";
import { useFitness } from "../../context/FitnessContext";
export default function AICoachBanner() { const { workouts } = useFitness(); const hasWorkouts = workouts.length > 0; return <section className="ai-banner"><div className="ai-banner-icon"><Bot size={28}/><span/></div><div><p className="eyebrow">Khushi AI · Daily insight</p><h2>{hasWorkouts ? <>Your training log is <em>building.</em> Review your last session and choose one small progression.</> : <>Your dashboard is <em>ready.</em> Log your first workout to unlock a personal training insight.</>}</h2><p>{hasWorkouts ? "Khushi AI will use the activity you log to keep your next step practical." : "Your account starts clean—no sample workouts, metrics or shared activity."}</p></div><Link to="/ai-coach"><Button variant="secondary">Talk to Khushi AI <Sparkles size={15}/></Button></Link></section>; }
