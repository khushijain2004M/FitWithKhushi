import { Activity, Droplets, Flame, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { useFitness } from "../../context/FitnessContext";
import { Card, ProgressBar, StatusPill } from "../ui/Primitives";
import { bmiStatus } from "../../utils/calculations";

export default function OverviewCards() { const { workouts, water, goal, bmi, calories } = useFitness(); const minutes = workouts.reduce((sum, x) => sum + +x.minutes, 0); const cards = [
  {title:"Daily calories",value:calories.toLocaleString(),suffix:" / 2,500 kcal",icon:Flame,color:"purple",valueTo:calories,max:2500,to:"/calories-calculator",note:calories ? "Calorie target calculated" : "Calculate your daily target"},
  {title:"Workout time",value:minutes,suffix:" min",icon:Timer,color:"green",valueTo:minutes,max:75,to:"/workout-planner",note:`${workouts.length} sessions logged`},
  {title:"Water intake",value:water,suffix:` / ${goal} glasses`,icon:Droplets,color:"cyan",valueTo:water,max:goal,to:"/water-tracker",note:"Keep the momentum"},
  {title:"Body mass index",value:bmi || "--",suffix:"",icon:Activity,color:"orange",valueTo:bmi||0,max:30,to:"/bmi-calculator",note:bmiStatus(bmi).label},
]; return <div className="overview-grid">{cards.map(({title,value,suffix,icon:Icon,color,valueTo,max,to,note}) => <Link to={to} key={title} className="stat-link"><Card className={`stat-card ${color}`}><div className="stat-top"><span className={`mini-icon ${color}`}><Icon size={17}/></span><span className="stat-arrow">↗</span></div><p>{title}</p><strong>{value}<small>{suffix}</small></strong><ProgressBar value={valueTo} max={max} color={color}/><span className="stat-note">{title === "Body mass index" ? <StatusPill tone={bmiStatus(bmi).tone}>{note}</StatusPill> : note}</span></Card></Link>)}</div>; }
