import TrainingHero from "@/components/training/TrainingHero";
import ExpectSection from "@/components/training/ExpectSection";
import IncludesSection from "@/components/training/IncludesSection";
import ServiceAreaSection from "@/components/training/ServiceAreaSection";
import GoogleFormSection from "@/components/training/GoogleFormSection";

export default function TrainingPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <TrainingHero />
        <ExpectSection />
        <IncludesSection />
        <ServiceAreaSection />
        <GoogleFormSection />
      </div>
    </main>
  );
}