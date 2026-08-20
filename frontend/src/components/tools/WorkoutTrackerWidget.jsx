import { useState } from "react";
import { Clock3, Dumbbell, Trash2 } from "lucide-react";
import { useFitness } from "../../context/FitnessContext";
import { Button, Card } from "../ui/Primitives";

export default function WorkoutTrackerWidget({ compact = false }) {
  const { workouts, addWorkout, removeWorkout } = useFitness();
  const [form, setForm] = useState({ name: "Running", minutes: 30, sets: 3, reps: 12 });
  const total = workouts.reduce((sum, item) => sum + Number(item.minutes), 0);
  const submit = (e) => { e.preventDefault(); addWorkout({ ...form, minutes: Number(form.minutes), sets: Number(form.sets), reps: `${form.reps} reps` }); };
  return <div className={`workout-widget ${compact ? "compact" : ""}`}><Card glow="cyan"><div className="card-title"><span className="icon-orb cyan"><Dumbbell size={19}/></span><div><h3>Log a workout</h3><p>Every set moves the streak forward.</p></div></div><form className="workout-form" onSubmit={submit}><label>Exercise<select value={form.name} onChange={(e) => setForm({...form, name:e.target.value})}>{["Running","Push ups","Squats","Bench press","Deadlift","Cycling","Yoga"].map(x=><option key={x}>{x}</option>)}</select></label><label>Minutes<input value={form.minutes} min="1" max="360" type="number" onChange={(e) => setForm({...form, minutes:e.target.value})}/></label>{!compact && <><label>Sets<input value={form.sets} min="1" type="number" onChange={(e) => setForm({...form, sets:e.target.value})}/></label><label>Reps<input value={form.reps} min="1" type="number" onChange={(e) => setForm({...form, reps:e.target.value})}/></label></>}<Button type="submit" className="add-workout">Add workout</Button></form></Card><Card className="workout-list-card"><div className="list-header"><div><h3>Today’s movement</h3><p>{workouts.length} sessions logged</p></div><strong><Clock3 size={15}/>{total} min</strong></div><div className="activity-list">{workouts.slice(0, compact ? 3 : undefined).map((item) => <div className="activity-item" key={item.id}><span className="activity-icon"><Dumbbell size={16}/></span><div><b>{item.name}</b><small>{item.minutes} minutes · {item.sets} sets · {item.reps}</small></div><time>{item.time}</time><button onClick={() => removeWorkout(item.id)} aria-label={`Delete ${item.name}`}><Trash2 size={16}/></button></div>)}</div></Card></div>;
}
