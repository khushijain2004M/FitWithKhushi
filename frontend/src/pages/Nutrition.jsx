import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "../components/layout/MainLayout";

import {
  fetchNutrition,
  fetchTodayNutrition,
} from "../store/slices/nutritionSlice";

import NutritionHero from "../components/nutrition/NutritionHero";
import MealList from "../components/nutrition/MealList";
import MacroBreakdown from "../components/nutrition/MacroBreakdown";
import NutritionTips from "../components/nutrition/NutritionTips";

import {
  Flame,
  Beef,
  Wheat,
  Droplets,
  Cookie,
  Dumbbell,
} from "lucide-react";


function Nutrition() {

  const dispatch = useDispatch();

  const {
    nutrition,
    todayNutrition,
  } = useSelector(
    (state) => state.nutrition
  );


  useEffect(() => {
    dispatch(fetchNutrition());
    dispatch(fetchTodayNutrition());
  }, [dispatch]);



  const stats = [
    {
      title: "Calories",
      value: `${todayNutrition?.calories || 0} kcal`,
      icon: Flame,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Protein",
      value: `${todayNutrition?.protein || 0} g`,
      icon: Beef,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      title: "Carbs",
      value: `${todayNutrition?.carbs || 0} g`,
      icon: Wheat,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Fat",
      value: `${todayNutrition?.fat || 0} g`,
      icon: Cookie,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Water",
      value: `${todayNutrition?.water || 0} L`,
      icon: Droplets,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
    {
      title: "Meals",
      value: todayNutrition?.meals?.length || 0,
      icon: Dumbbell,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];



  const foodLog =
    todayNutrition?.meals?.map((meal) => ({
      name: meal.foodName,
      time: meal.mealType,
      protein: `${meal.protein}g`,
      carbs: `${meal.carbs}g`,
      fat: `${meal.fat}g`,
      calories: meal.calories,
    })) || [];



  return (

    <MainLayout>

      <div>

        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          Nutrition
        </h1>


        <NutritionHero />


        <NutritionTips
          nutritionStats={stats}
        />


        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">


          <MealList
            foodLog={foodLog}
          />


          <MacroBreakdown />


        </div>


      </div>

    </MainLayout>

  );
}


export default Nutrition;