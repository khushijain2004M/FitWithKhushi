import { Link } from "react-router-dom";
import { Button } from "../components/ui/Primitives";
export default function NotFoundPage(){return <div className="not-found"><p className="eyebrow">404</p><h1>That page skipped leg day.</h1><p>It’s not here, but your next workout is.</p><Link to="/"><Button>Back home</Button></Link></div>}
