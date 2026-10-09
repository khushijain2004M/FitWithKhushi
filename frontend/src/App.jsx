import { HashRouter, Route, Routes } from "react-router-dom";
import { FitnessProvider } from "./context/FitnessContext";
import AppShell from "./components/layout/AppShell";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import BMIPage from "./pages/BMIPage";
import CaloriesPage from "./pages/CaloriesPage";
import WorkoutPage from "./pages/WorkoutPage";
import WaterPage from "./pages/WaterPage";
import AICoachPage from "./pages/AICoachPage";
import NutritionPage from "./pages/NutritionPage";
import ProgressPage from "./pages/ProgressPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import { ForgotPasswordPage, ResetPasswordPage, VerifyEmailPage } from "./pages/AuthUtilityPage";

export default function App() {
  return <FitnessProvider><HashRouter><Routes>
    <Route element={<AppShell/>}>
      <Route path="/" element={<Home/>}/>
      <Route element={<ProtectedRoute/>}>
        <Route path="/dashboard" element={<DashboardPage/>}/><Route path="/bmi-calculator" element={<BMIPage/>}/><Route path="/calories-calculator" element={<CaloriesPage/>}/>
        <Route path="/workout-planner" element={<WorkoutPage/>}/><Route path="/water-tracker" element={<WaterPage/>}/><Route path="/ai-coach" element={<AICoachPage/>}/>
        <Route path="/nutrition" element={<NutritionPage/>}/><Route path="/progress" element={<ProgressPage/>}/><Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/><Route path="/profile" element={<ProfilePage/>}/>
      </Route><Route path="*" element={<NotFoundPage/>}/>
    </Route><Route path="/login" element={<LoginPage/>}/><Route path="/verify-email" element={<VerifyEmailPage/>}/><Route path="/forgot-password" element={<ForgotPasswordPage/>}/><Route path="/reset-password" element={<ResetPasswordPage/>}/>
  </Routes></HashRouter></FitnessProvider>;
}
