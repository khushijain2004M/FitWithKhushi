import MainLayout from "../components/layout/MainLayout";

import ProfileHero from "../components/profile/ProfileHero";
import ProfileStats from "../components/profile/ProfileStats";
import PersonalInfo from "../components/profile/PersonalInfo";
import FitnessGoals from "../components/profile/FitnessGoals";
import FitnessSummary from "../components/profile/FitnessSummary";
import Achievements from "../components/profile/Achievements";
import WeeklyActivity from "../components/profile/WeeklyActivity";
import RecentActivity from "../components/profile/RecentActivity";
import AccountSettings from "../components/profile/AccountSettings";
import ConnectedDevices from "../components/profile/ConnectedDevices";

function Profile() {
  return (
    <MainLayout>
      <div>

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-slate-900">
            Profile
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your personal information, goals, and fitness insights.
          </p>
        </div>


        {/* Profile Hero */}
        <ProfileHero />


        {/* Profile Stats */}
        <ProfileStats />


        <div className="grid lg:grid-cols-3 gap-6 mt-6">


          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">

            <PersonalInfo />

            <FitnessGoals />

            <ConnectedDevices />

          </div>



          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">

            <FitnessSummary />

            <Achievements />

            <WeeklyActivity />

            <RecentActivity />

            <AccountSettings />

          </div>


        </div>

      </div>
    </MainLayout>
  );
}

export default Profile;