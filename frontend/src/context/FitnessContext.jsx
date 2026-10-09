import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { apiClient } from "../services/apiClient";

const FitnessContext = createContext(null);
const key = "fitwithkhushi-data-v1";
const authKey = "fitwithkhushi-auth-v1";
const emptyFitnessData = { water: 0, goal: 8, bmi: 0, calories: 0, plan: "Free", workouts: [], meals: [] };
const seed = { theme: "neon", userData: {} };
const errorMessage = (error) => error.response?.data?.message || "Something went wrong. Please try again.";
const normalizeUser = (user) => ({ name: user.fullName || user.name, email: user.email });
const readLocalAccounts = () => { try { return JSON.parse(localStorage.getItem(authKey) || "{}"); } catch { return {}; } };

function readInitial() {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "{}");
    return { ...seed, ...saved, userData: saved.userData || {} };
  } catch { return seed; }
}

export function FitnessProvider({ children }) {
  const [data, setData] = useState(readInitial);
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const activeData = user ? { ...emptyFitnessData, ...(data.userData[user.email] || {}) } : emptyFitnessData;

  useEffect(() => localStorage.setItem(key, JSON.stringify(data)), [data]);
  useEffect(() => { document.documentElement.dataset.theme = data.theme; }, [data.theme]);
  useEffect(() => {
    let mounted = true;
    apiClient.get("/auth/me").then((response) => {
      if (mounted) setUser(normalizeUser(response.data.user));
    }).catch(() => {
      if (mounted) setUser(null);
    }).finally(() => { if (mounted) setAuthReady(true); });
    return () => { mounted = false; };
  }, []);

  const updateUserData = (transform) => setData((current) => {
    if (!user) return current;
    const present = { ...emptyFitnessData, ...(current.userData[user.email] || {}) };
    return { ...current, userData: { ...current.userData, [user.email]: transform(present) } };
  });

  const value = useMemo(() => ({
    ...activeData, theme: data.theme, user, authReady,
    setTheme: (theme) => setData((current) => ({ ...current, theme })),
    register: async ({ name, email, password }) => {
      const normalizedEmail = email.trim().toLowerCase();
      if (window.location.hostname.endsWith("github.io")) {
        const accounts = readLocalAccounts();
        accounts[normalizedEmail] = { fullName: name.trim(), email: normalizedEmail, password };
        localStorage.setItem(authKey, JSON.stringify(accounts));
        return { ok: true, message: "Account saved on this device. You can log in now." };
      }
      try {
        const response = await apiClient.post("/auth/register", { fullName: name.trim(), email: email.trim().toLowerCase(), password });
        return { ok: true, message: response.data.message };
      } catch (error) {
        const accounts = readLocalAccounts();
        accounts[normalizedEmail] = { fullName: name.trim(), email: normalizedEmail, password };
        localStorage.setItem(authKey, JSON.stringify(accounts));
        return { ok: true, message: "Account saved on this device. You can log in now." };
      }
    },
    authenticate: async ({ email, password }) => {
      const normalizedEmail = email.trim().toLowerCase();
      if (window.location.hostname.endsWith("github.io")) {
        const account = readLocalAccounts()[normalizedEmail];
        if (account && account.password === password) { setUser(normalizeUser(account)); return { ok: true }; }
        return { ok: false, message: "Create a local account first or check your details." };
      }
      try {
        const response = await apiClient.post("/auth/login", { email: email.trim().toLowerCase(), password });
        setUser(normalizeUser(response.data.user));
        return { ok: true };
      } catch (error) {
        const account = readLocalAccounts()[normalizedEmail];
        if (account && account.password === password) { setUser(normalizeUser(account)); return { ok: true }; }
        return { ok: false, message: "Unable to sign in. Create a local account first or check your details." };
      }
    },
    resendVerification: async (email) => {
      try { const response = await apiClient.post("/auth/resend-verification", { email }); return { ok: true, message: response.data.message }; }
      catch (error) { return { ok: false, message: errorMessage(error) }; }
    },
    verifyEmail: async (token) => {
      try { const response = await apiClient.post("/auth/verify-email", { token }); setUser(normalizeUser(response.data.user)); return { ok: true, message: response.data.message }; }
      catch (error) { return { ok: false, message: errorMessage(error) }; }
    },
    requestPasswordReset: async (email) => {
      try { const response = await apiClient.post("/auth/forgot-password", { email }); return { ok: true, message: response.data.message }; }
      catch (error) { return { ok: false, message: errorMessage(error) }; }
    },
    resetPassword: async ({ token, password }) => {
      try { const response = await apiClient.post("/auth/reset-password", { token, password }); setUser(normalizeUser(response.data.user)); return { ok: true, message: response.data.message }; }
      catch (error) { return { ok: false, message: errorMessage(error) }; }
    },
    logout: async () => {
      try { await apiClient.post("/auth/logout"); } finally { setUser(null); }
    },
    setBmi: (bmi) => updateUserData((current) => ({ ...current, bmi })),
    setCalories: (calories) => updateUserData((current) => ({ ...current, calories })),
    addWater: (amount = 1) => updateUserData((current) => ({ ...current, water: Math.min(current.goal, current.water + amount) })),
    resetWater: () => updateUserData((current) => ({ ...current, water: 0 })),
    addWorkout: (workout) => updateUserData((current) => ({ ...current, workouts: [{ ...workout, id: crypto.randomUUID(), time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }, ...current.workouts] })),
    removeWorkout: (id) => updateUserData((current) => ({ ...current, workouts: current.workouts.filter((workout) => workout.id !== id) })),
    addMeal: (meal) => updateUserData((current) => ({ ...current, meals: [{ ...meal, id: crypto.randomUUID() }, ...current.meals] })),
    selectPlan: (plan) => updateUserData((current) => ({ ...current, plan })),
  }), [activeData, authReady, data, user]);

  return <FitnessContext.Provider value={value}>{children}</FitnessContext.Provider>;
}

export const useFitness = () => useContext(FitnessContext);
