import { Dumbbell, Mail, ArrowUpRight } from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const productLinks = [
    "Dashboard",
    "Workouts",
    "Nutrition",
    "Progress",
    "AI Coach",
  ];

  const companyLinks = [
    "About",
    "Features",
    "Pricing",
    "Contact",
    "Privacy Policy",
  ];

  const resources = [
    "Documentation",
    "Support",
    "FAQ",
    "Roadmap",
    "Blog",
  ];

  return (
    <footer
      id="footer"
      className="bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center">
                <Dumbbell
                  className="text-white"
                  size={22}
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  FitWithSudesh
                </h2>

                <p className="text-slate-400 text-sm">
                  AI Fitness Platform
                </p>
              </div>

            </div>

            <p className="mt-6 text-slate-400 leading-7">
              Train smarter, recover faster and achieve
              your fitness goals with the power of AI.
            </p>

            {/* Social Links */}

            <div className="flex gap-4 mt-8">

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/sudeshmehar3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaLinkedin size={20} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/sudesh4545"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaGithub size={20} />
              </a>

              {/* Discord */}
              <a
                href="https://discord.gg/Q7r9xvje9Q"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaDiscord size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:sudeshmehar3@gmail.com"
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <Mail size={20} />
              </a>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-bold text-lg mb-6">
              Product
            </h3>

            <div className="space-y-4">

              {productLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-bold text-lg mb-6">
              Company
            </h3>

            <div className="space-y-4">

              {companyLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-bold text-lg mb-6">
              Resources
            </h3>

            <div className="space-y-4">

              {resources.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="group flex items-center justify-between text-slate-400 hover:text-white transition"
                >
                  {item}

                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition"
                  />
                </a>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">
            © 2026 FitWithSudesh. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm text-slate-500">

            <a
              href="#"
              className="hover:text-white transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Terms
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Cookies
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
