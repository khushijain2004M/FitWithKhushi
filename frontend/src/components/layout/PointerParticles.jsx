import { useEffect } from "react";

export default function PointerParticles() {
  useEffect(() => {
    let frame = 0;
    const move = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
        document.documentElement.style.setProperty("--pointer-visible", "1");
      });
    };
    const leave = () => document.documentElement.style.setProperty("--pointer-visible", "0");
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", leave);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("pointermove", move); window.removeEventListener("blur", leave); };
  }, []);
  return <div className="pointer-particles" aria-hidden="true"><i/><i/><i/></div>;
}
