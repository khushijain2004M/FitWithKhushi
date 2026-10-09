import { NavLink } from "react-router-dom";
import {
  Home,
  Dumbbell,
  Apple,
  BarChart3,
  Bot,
  User,
  Activity,
} from "lucide-react";

function Sidebar() {
  const links = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Workouts", path: "/workouts", icon: Dumbbell },
    { name: "Nutrition", path: "/nutrition", icon: Apple },
    { name: "Progress", path: "/progress", icon: BarChart3 },
    { name: "AI Coach", path: "/ai-coach", icon: Bot },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <aside className="w-64 p-4 sticky top-6 self-start">
      <div
        className="
        bg-white
        rounded-[28px]
        border
        border-slate-200
        shadow-lg
        hover:shadow-xl
        transition-all
        duration-300
        p-6
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <Activity
              size={20}
              className="text-white"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              FitWithKhushi
            </h1>

            <p className="text-sm text-slate-600">
              Train smarter.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8 space-y-2">
          {links.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 h-12 rounded-xl transition-all duration-300 font-medium ${
                    isActive
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-slate-800 hover:bg-slate-100"
                  }`
                }
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Daily Goal */}
        <div className="mt-8">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">
                Daily Goal
              </h3>

              <span className="text-blue-600 font-bold">
                80%
              </span>
            </div>

            <div className="h-2 bg-slate-200 rounded-full mt-4 overflow-hidden">
              <div className="h-full w-4/5 bg-blue-600 rounded-full"></div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">
                  Calories
                </span>

                <span className="font-medium text-slate-900">
                  2150
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">
                  Workout
                </span>

                <span className="font-medium text-slate-900">
                  45 min
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">
                  Water
                </span>

                <span className="font-medium text-slate-900">
                  6 / 8
                </span>
              </div>
            </div>

            <button
              className="
              w-full
              mt-5
              py-2.5
              rounded-xl
              bg-blue-500
              text-white
              font-medium
              hover:bg-blue-700
              transition
              "
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
