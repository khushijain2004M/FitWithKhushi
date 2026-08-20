import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "../components/layout/MainLayout";

import ProgressHero from "../components/progress/ProgressHero";
import WeightProgressChart from "../components/progress/WeightProgressChart";
import FitnessScore from "../components/progress/FitnessScore";
import BodyMeasurements from "../components/progress/BodyMeasurements";
import WorkoutConsistency from "../components/progress/WorkoutConsistency";
import PersonalRecords from "../components/progress/PersonalRecords";
import MonthlySummary from "../components/progress/MonthlySummary";

import {
  fetchProgress,
  fetchLatestProgress,
} from "../store/slices/progressSlice";

import { motion } from "framer-motion";


function Progress() {

  const dispatch = useDispatch();

  const {
    progress,
    latestProgress,
  } = useSelector(
    (state) => state.progress
  );


  useEffect(() => {

    dispatch(fetchProgress());
    dispatch(fetchLatestProgress());

  }, [dispatch]);



  return (

    <MainLayout>

      <div className="space-y-6">


        <div className="mb-2">

          <h1 className="text-3xl font-bold text-slate-900">
            Progress
          </h1>

          <p className="text-slate-500 text-sm mt-1">
            Track your fitness journey, achievements and growth.
          </p>

        </div>



        <ProgressHero
          latestProgress={latestProgress}
        />



        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-12 gap-4"
        >

          <div className="lg:col-span-8">
            <WeightProgressChart
              progress={progress}
            />
          </div>


          <div className="lg:col-span-4">
            <FitnessScore
              latestProgress={latestProgress}
            />
          </div>


        </motion.div>



        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.3 }}
          className="grid lg:grid-cols-2 gap-4"
        >

          <BodyMeasurements
            latestProgress={latestProgress}
          />

          <WorkoutConsistency />

        </motion.div>



        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.4 }}
          className="grid lg:grid-cols-2 gap-4"
        >

          <PersonalRecords />

          <MonthlySummary />

        </motion.div>


      </div>

    </MainLayout>

  );
}


export default Progress;