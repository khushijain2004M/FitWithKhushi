import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import PointerParticles from "./PointerParticles";
export default function AppShell() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo(0, 0); }, [pathname]); return <div className="app-shell"><div className="ambient ambient-one"/><div className="ambient ambient-two"/><PointerParticles/><Navbar/><main className="page-container"><Outlet/></main><Footer/></div>; }
