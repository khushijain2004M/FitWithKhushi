import { ArrowLeft, Info } from "lucide-react";
import { Link } from "react-router-dom";
import BMICalculatorWidget from "../components/tools/BMICalculatorWidget";
import { Card, PageHeading } from "../components/ui/Primitives";
export default function BMIPage(){return <><PageHeading eyebrow="Body metrics" title="Know your baseline." copy="A quick BMI estimate can help you understand your weight range. It is a screening tool, not a diagnosis." action={<Link className="text-link" to="/dashboard"><ArrowLeft size={15}/>Dashboard</Link>}/><BMICalculatorWidget/><Card className="info-banner"><Info size={18}/><p><b>How to read this:</b> BMI compares height and weight. Athletes with a lot of muscle may see a higher score even when they are healthy. Use it alongside how you feel and professional guidance.</p></Card></>}
