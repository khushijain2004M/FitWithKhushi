import { useState } from "react";
import { Activity, Scale } from "lucide-react";
import { useFitness } from "../../context/FitnessContext";
import { bmiFor, bmiStatus, idealWeightRange } from "../../utils/calculations";
import { Button, Card, StatusPill } from "../ui/Primitives";

export default function BMICalculatorWidget({ compact = false }) {
  const { bmi, setBmi } = useFitness();
  const [form, setForm] = useState({ height: 175, weight: 68, age: 22, gender: "male" });
  const [result, setResult] = useState(bmi || null);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const calculate = (e) => { e.preventDefault(); const value = bmiFor(form.height, form.weight); setResult(value); setBmi(Number(value.toFixed(1))); };
  const status = bmiStatus(result);
  return <div className={`tool-grid bmi-tool ${compact ? "compact" : ""}`}><Card glow="purple" className="calculator-card"><div className="card-title"><span className="icon-orb purple"><Scale size={19}/></span><div><h3>BMI calculator</h3><p>Find your healthy baseline.</p></div></div><form onSubmit={calculate} className="form-grid two-col"><label>Height <span>cm</span><input required type="number" name="height" min="80" max="250" value={form.height} onChange={update}/></label><label>Weight <span>kg</span><input required type="number" name="weight" min="20" max="350" value={form.weight} onChange={update}/></label>{!compact && <><label>Age<input type="number" name="age" min="12" max="100" value={form.age} onChange={update}/></label><label>Gender<select name="gender" value={form.gender} onChange={update}><option value="male">Male</option><option value="female">Female</option><option value="other">Prefer not to say</option></select></label></>}<Button type="submit" className="full">Calculate BMI</Button></form></Card><Card glow="green" className="bmi-result"><div className="card-title"><span className="icon-orb green"><Activity size={19}/></span><div><h3>Your health range</h3><p>Based on your height and weight</p></div></div><div className="bmi-number">{result ? result.toFixed(1) : "--"}</div><StatusPill tone={status.tone}>{status.label}</StatusPill><div className="bmi-scale"><span/><i/><i/><i/><i/></div><div className="result-note"><span>Ideal weight range</span><strong>{result ? `${idealWeightRange(form.height).join(" – ")} kg` : "Calculate to view"}</strong></div></Card></div>;
}
