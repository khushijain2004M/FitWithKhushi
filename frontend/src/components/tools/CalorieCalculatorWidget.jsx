import { useState } from "react";
import { Flame, Target } from "lucide-react";
import { calorieNeeds } from "../../utils/calculations";
import { useFitness } from "../../context/FitnessContext";
import { Button, Card, ProgressBar } from "../ui/Primitives";

export default function CalorieCalculatorWidget({ compact = false }) {
  const { setCalories } = useFitness();
  const [form, setForm] = useState({ age: 22, gender: "male", weight: 68, height: 175, activity: "moderate" });
  const [result, setResult] = useState(null);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const calculate = (e) => { e.preventDefault(); const next = calorieNeeds(form); setResult(next); setCalories(next.tdee); };
  const macros = result?.macros || { protein: 0, carbs: 0, fat: 0 };
  return <div className={`tool-grid calorie-tool ${compact ? "compact" : ""}`}><Card glow="orange" className="calculator-card"><div className="card-title"><span className="icon-orb orange"><Flame size={19}/></span><div><h3>Calories & macros</h3><p>Your daily performance fuel.</p></div></div><form className="form-grid two-col" onSubmit={calculate}><label>Age<input type="number" name="age" value={form.age} min="12" max="100" onChange={update}/></label><label>Gender<select name="gender" value={form.gender} onChange={update}><option value="male">Male</option><option value="female">Female</option></select></label><label>Weight <span>kg</span><input type="number" name="weight" value={form.weight} onChange={update}/></label><label>Height <span>cm</span><input type="number" name="height" value={form.height} onChange={update}/></label>{!compact && <label className="full">Activity level<select name="activity" value={form.activity} onChange={update}><option value="sedentary">Sedentary — little exercise</option><option value="light">Light — 1–3 days</option><option value="moderate">Moderate — 3–5 days</option><option value="active">Active — 6–7 days</option></select></label>}<Button type="submit" className="full">Calculate fuel target</Button></form></Card><Card glow="cyan" className="calorie-result"><div className="result-kicker"><Target size={17}/> Daily maintenance</div><strong className="calorie-number">{result ? result.tdee : "—"}<small>{result ? " kcal" : ""}</small></strong><p>{result ? `Your BMR is ${result.bmr} kcal. Use this as a flexible daily target, not a rule.` : "Complete the calculator to set a private calorie target for this account."}</p><div className="goal-row"><div><span>Fat loss</span><b>{result ? result.loss : "—"}</b></div><div><span>Muscle gain</span><b>{result ? result.gain : "—"}</b></div></div><div className="macro-lines">{Object.entries(macros).map(([name, value], i) => <div key={name}><span>{name}</span><b>{value}g</b><ProgressBar value={result ? [30,40,30][i] : 0} color={["purple","cyan","orange"][i]}/></div>)}</div></Card></div>;
}
