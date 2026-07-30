import REDSHero from "@/components/reds/REDSHero";
import REDSOverview from "@/components/reds/REDSOverview";
import BodySystems from "@/components/reds/BodySystems";
import FemaleAthleteTriad from "@/components/reds/FemaleAthleteTriad";
import Symptoms from "@/components/reds/Symptoms";
import Prevention from "@/components/reds/Prevention";
import REDSVideo from "@/components/reds/REDSVideo";
import REDSResources from "@/components/reds/REDSResources";

export default function REDSPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-32">
      <REDSHero />
      <REDSOverview />
      <BodySystems />
      <FemaleAthleteTriad />
      <Symptoms />
      <Prevention />
      <REDSVideo />
      <REDSResources />
    </main>
  );
}