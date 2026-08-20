import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useFitness } from "../../context/FitnessContext";

const ProtectedRoute = () => {
  const { user, authReady } = useFitness();
  const location = useLocation();
  if (!authReady) return <div className="auth-loading">Checking your secure session…</div>;
  return user ? <Outlet /> : <Navigate to="/login" replace state={{ from: location.pathname }} />;
};

export default ProtectedRoute;
