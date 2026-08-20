import { CalendarDays, ChevronRight, Flame, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useFitness } from "../context/FitnessContext";
import { PageHeading, Card } from "../components/ui/Primitives";
import OverviewCards from "../components/dashboard/OverviewCards";
import AICoachBanner from "../components/dashboard/AICoachBanner";
import RecentActivity from "../components/dashboard/RecentActivity";
import NutritionMacroWidget from "../components/tools/NutritionMacroWidget";
import WaterTrackerWidget from "../components/tools/WaterTrackerWidget";
export default function DashboardPage(){const {user,workouts}=useFitness();const streak=Math.min(workouts.length,7);return <><PageHeading eyebrow="Performance dashboard" title={`Welcome back${user?.name ? `, ${user.name}` : ""}.`} copy="Here’s the signal behind your training today." action={<div className="date-chip"><CalendarDays size={16}/> Today</div>}/><OverviewCards/><AICoachBanner/><div className="dashboard-lower"><div className="dashboard-main"><RecentActivity/><Card className="streak-card"><div><span className="icon-orb orange"><Trophy size={19}/></span><div><p className="eyebrow">Consistency streak</p><h2>{streak ? `${streak} session${streak > 1 ? "s" : ""} logged.` : "Start your consistency streak."}</h2><p>{streak ? "Every logged session helps you build a clearer activity history." : "Your new account begins at zero. Add a workout when you are ready."}</p></div></div><div className="streak-days">{["M","T","W","T","F","S","S"].map((d,i)=><span className={i<streak?"done":""} key={i}>{d}</span>)}</div><Link to="/progress">See your progress <ChevronRight size={15}/></Link></Card></div><aside><NutritionMacroWidget/><WaterTrackerWidget compact/></aside></div></>}
