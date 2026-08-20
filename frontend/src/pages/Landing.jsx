import { useEffect, useRef, useState } from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import DashboardPreview from "../components/landing/DashboardPreview";
import AIShowcase from "../components/landing/AIShowcase";
import WorkoutShowcase from "../components/landing/WorkoutShowcase";
import NutritionShowcase from "../components/landing/NutritionShowcase";
import Pricing from "../components/landing/Pricing";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

const neonParticles = [
  [5, 16, 7, 0], [14, 73, 4, 2], [24, 31, 5, 4], [36, 88, 6, 1],
  [48, 12, 4, 5], [59, 62, 7, 3], [69, 25, 5, 6], [78, 79, 4, 2],
  [88, 44, 6, 4], [94, 11, 4, 1], [9, 92, 5, 5], [43, 47, 3, 3],
];

function Landing() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("forgefit-theme") || "light"
  );
  const landingRef = useRef(null);
  useEffect(() => {
    localStorage.setItem("forgefit-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (theme !== "neon") return undefined;

    let animationFrame;
    const updateSparks = (event) => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        landingRef.current?.style.setProperty("--neon-pointer-x", `${event.clientX}px`);
        landingRef.current?.style.setProperty("--neon-pointer-y", `${event.clientY}px`);
        landingRef.current?.style.setProperty("--neon-sparks-opacity", "1");
        animationFrame = undefined;
      });
    };

    const hideSparks = () => {
      landingRef.current?.style.setProperty("--neon-sparks-opacity", "0");
    };

    window.addEventListener("pointermove", updateSparks, { passive: true });
    window.addEventListener("pointerleave", hideSparks);
    return () => {
      window.removeEventListener("pointermove", updateSparks);
      window.removeEventListener("pointerleave", hideSparks);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [theme]);

  return (
    <div
      ref={landingRef}
      data-theme={theme}
      className="min-h-screen bg-white overflow-x-hidden"
    >

      {theme === "neon" && (
        <>
          <div className="neon-ambient" aria-hidden="true">
            <span className="neon-aurora neon-aurora-one" />
            <span className="neon-aurora neon-aurora-two" />
            <span className="neon-aurora neon-aurora-three" />
            <span className="neon-wave neon-wave-one" />
            <span className="neon-wave neon-wave-two" />
            <span className="neon-wave neon-wave-three" />
            {neonParticles.map(([x, y, size, delay], index) => (
              <span
                key={index}
                className="neon-particle"
                style={{
                  "--particle-x": `${x}%`,
                  "--particle-y": `${y}%`,
                  "--particle-size": `${size}px`,
                  "--particle-delay": `${delay}s`,
                }}
              />
            ))}
          </div>
          <div className="neon-pointer-sparks" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </>
      )}

      <Navbar theme={theme} onThemeChange={setTheme} />

      <main>

        <Hero />

        <Features />

        <DashboardPreview />

        <AIShowcase />

        <WorkoutShowcase />

        <NutritionShowcase />

        <Pricing />

        <CTA />

      </main>

      <Footer />

    </div>
  );
}

export default Landing;
