import { CalendarDays, Check, Dumbbell, Flame } from "lucide-react";
import WorkoutTrackerWidget from "../components/tools/WorkoutTrackerWidget";
import { useFitness } from "../context/FitnessContext";
import { Card, PageHeading } from "../components/ui/Primitives";

export default function WorkoutPage() {
  const { workouts } = useFitness();
  return <><PageHeading eyebrow="Workout planner" title="Make today's session count." copy="Log the work, then let your week tell a better story." action={<div className="date-chip"><CalendarDays size={16}/>Today</div>}/><div className="workout-layout"><WorkoutTrackerWidget/><Card className="weekly-plan"><div className="list-header"><div><h3>This week’s activity</h3><p>{workouts.length ? "Your latest logged workouts." : "Your plan starts empty and private."}</p></div><Flame size={18}/></div>{workouts.length ? workouts.slice(0, 7).map((workout, index) => <div className="plan-row today" key={workout.id}><span>{index === 0 ? "Latest" : `Log ${index + 1}`}</span><div><b>{workout.name}</b><small>{workout.minutes} minutes · {workout.sets} sets · {workout.reps}</small></div><Check size={17}/></div>) : <div className="empty-state"><Dumbbell/><p>No workouts planned or logged yet. Add your first session to start your personal weekly history.</p></div>}</Card></div></>;
}
