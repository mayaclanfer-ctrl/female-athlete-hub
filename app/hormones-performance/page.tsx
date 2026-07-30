import HormoneHero from "@/components/hormones/HormoneHero";
import HormoneCards from "@/components/hormones/HormoneCards";
import HormoneChart from "@/components/hormones/HormoneChart";
import CycleTimeline from "@/components/hormones/CycleTimeline";
import TrainingGoals from "@/components/hormones/TrainingGoals";
import HormoneResources from "@/components/hormones/HormoneResources";

export default function HormonesPerformancePage() {
  return (
<main className="mx-auto max-w-7xl px-6 pt-32">    
      <HormoneHero />
      <HormoneCards />
      <HormoneChart />
      <CycleTimeline />
      <TrainingGoals />
      <HormoneResources />
    </main>
  );
}