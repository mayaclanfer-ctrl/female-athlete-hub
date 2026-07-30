import SpecializationHero from "@/components/specialization/SpecializationHero";
import DefinitionSection from "@/components/specialization/DefinitionSection";
import VideoSection from "@/components/specialization/VideoSection";
import WhyItMattersSection from "@/components/specialization/WhyItMattersSection";
import RecommendationsSection from "@/components/specialization/RecommendationsSection";
import SourcesSection from "@/components/specialization/SourcesSection";

export default function SpecializationPage() {
  return (
    <>
      <SpecializationHero />
      <DefinitionSection />
      <VideoSection />
      <WhyItMattersSection />
      <RecommendationsSection />
      <SourcesSection />
    </>
  );
}