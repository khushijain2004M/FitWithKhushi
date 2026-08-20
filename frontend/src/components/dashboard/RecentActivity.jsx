import { ArrowUpRight, CalendarCheck, Flame, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useFitness } from "../../context/FitnessContext";
import { Card } from "../ui/Primitives";
export default function RecentActivity() { const { workouts } = useFitness(); return <Card className="recent-activity"><div className="list-header"><div><h3>Recent activity</h3><p>Today’s training timeline</p></div><Link to="/workout-planner">View all <ArrowUpRight size={15}/></Link></div><div className="timeline">{workouts.slice(0,3).map((w,i)=><div className="timeline-row" key={w.id}><span className={`timeline-dot ${["cyan","purple","green"][i]}`}><Flame size={14}/></span><div><b>{w.name} session</b><small>{w.minutes} minutes · {w.sets} sets</small></div><time>{w.time}</time></div>)}{workouts.length === 0 && <div className="empty-state"><CalendarCheck/><p>Log your first movement to build your timeline.</p></div>}</div></Card>; }
