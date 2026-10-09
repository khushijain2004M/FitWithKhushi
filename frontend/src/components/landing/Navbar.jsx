import { useEffect, useState } from "react";
import { Dumbbell, Menu, Moon, Palette, Sun, X } from "lucide-react";

function Navbar({ theme, onThemeChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      title: "Features",
      href: "#features",
    },
    {
      title: "AI Coach",
      href: "#ai",
    },
    {
      title: "Pricing",
      href: "#pricing",
    },
    {
      title: "Contact",
      href: "#footer",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}

        <a
          href="/"
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md">
            <Dumbbell
              className="text-white"
              size={20}
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              FitWithKhushi
            </h2>

            <p className="text-xs text-slate-500 -mt-1">
              AI Fitness Platform
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="
                text-slate-600
                font-medium
                transition
                hover:text-blue-600
              "
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex items-center gap-3">

          <div className="theme-switcher flex items-center gap-1 rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => onThemeChange("light")}
              className={`theme-option ${theme === "light" ? "theme-option-active" : ""}`}
              aria-label="Use light theme"
              aria-pressed={theme === "light"}
              title="Light theme"
            >
              <Sun size={17} />
            </button>
          <button
            type="button"
            onClick={() => onThemeChange("dark")}
              className={`theme-option ${theme === "dark" ? "theme-option-active" : ""}`}
              aria-label="Use dark theme"
              aria-pressed={theme === "dark"}
              title="Dark theme"
            >
            <Moon size={17} />
          </button>
          <button
            type="button"
            onClick={() => onThemeChange("neon")}
            className={`theme-option theme-option-neon ${theme === "neon" ? "theme-option-active" : ""}`}
            aria-label="Use neon gradient theme"
            aria-pressed={theme === "neon"}
            title="Neon gradient theme"
          >
            <Palette size={17} />
          </button>
          </div>

          <button
            className="
              px-5
              py-2.5
              rounded-xl
              border
              border-slate-200
              hover:bg-slate-50
              transition
            "
          >
            Login
          </button>

          <button
            className="
              px-5
              py-2.5
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              shadow-sm
              transition
            "
          >
            Get Started
          </button>

        </div>

        {/* Mobile Toggle */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-slate-700"
        >
          {mobileOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-sm">
          <div className="px-6 py-6 flex flex-col gap-5">

            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="
                  text-slate-700
                  font-medium
                "
              >
                {link.title}
              </a>
            ))}

            <div className="theme-switcher flex w-fit items-center gap-1 rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
              <button
                type="button"
                onClick={() => onThemeChange("light")}
                className={`theme-option ${theme === "light" ? "theme-option-active" : ""}`}
                aria-label="Use light theme"
              >
                <Sun size={17} /> Light
              </button>
              <button
                type="button"
                onClick={() => onThemeChange("dark")}
                className={`theme-option ${theme === "dark" ? "theme-option-active" : ""}`}
                aria-label="Use dark theme"
              >
                <Moon size={17} /> Dark
              </button>
              <button
                type="button"
                onClick={() => onThemeChange("neon")}
                className={`theme-option theme-option-neon ${theme === "neon" ? "theme-option-active" : ""}`}
                aria-label="Use neon gradient theme"
                aria-pressed={theme === "neon"}
              >
                <Palette size={17} /> Neon
              </button>
            </div>

            <button
              className="
                py-3
                rounded-xl
                border
                border-slate-200
              "
            >
              Login
            </button>

            <button
              className="
                py-3
                rounded-xl
                bg-blue-600
                text-white
                font-semibold
              "
            >
              Get Started
            </button>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
