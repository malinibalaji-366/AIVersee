import WelcomeCard from "@/components/dashboard/WelcomeCard";
import StatsGrid from "@/components/dashboard/StatsGrid";
import MissionCard from "@/components/dashboard/MissionCard";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import ArivuCard from "@/components/dashboard/ArivuCard";
import QuickActions from "@/components/dashboard/QuickActions";

import Sidebar from "@/components/dashboard/Sidebar";

export const metadata = {
  title: "Learning Hub | AIVerse",
};
export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-black text-white">
        <Sidebar />
      <section className="flex-1 overflow-y-auto px-8 py-8">
        <WelcomeCard />
        <StatsGrid />
        <MissionCard />
        <ContinueLearning />
        <ArivuCard />
        <QuickActions />
      </section>
    </main>
  );
}