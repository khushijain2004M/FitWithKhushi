export const bmiFor = (heightCm, weightKg) => {
  const heightM = Number(heightCm) / 100;
  return heightM > 0 ? Number(weightKg) / (heightM * heightM) : 0;
};

export const bmiStatus = (bmi) => {
  if (!bmi) return { label: "Ready to calculate", tone: "muted" };
  if (bmi < 18.5) return { label: "Underweight", tone: "warning" };
  if (bmi < 25) return { label: "Normal weight", tone: "success" };
  if (bmi < 30) return { label: "Overweight", tone: "orange" };
  return { label: "Obese", tone: "danger" };
};

export const idealWeightRange = (heightCm) => {
  const heightM = Number(heightCm) / 100;
  if (!heightM) return [0, 0];
  return [18.5 * heightM * heightM, 24.9 * heightM * heightM].map((n) => n.toFixed(1));
};

export const calorieNeeds = ({ age, gender, weight, height, activity }) => {
  const base = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age);
  const bmr = Math.round(base + (gender === "female" ? -161 : 5));
  const factors = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725 };
  const tdee = Math.round(bmr * (factors[activity] || factors.moderate));
  return {
    bmr,
    tdee,
    loss: tdee - 450,
    gain: tdee + 300,
    macros: {
      protein: Math.round((tdee * 0.3) / 4),
      carbs: Math.round((tdee * 0.4) / 4),
      fat: Math.round((tdee * 0.3) / 9),
    },
  };
};
