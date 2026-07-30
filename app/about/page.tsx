import AboutHero from "@/components/about/AboutHero";
import AboutHighlights from "@/components/about/AboutHighlights";
import AboutStory from "@/components/about/AboutStory";
import AboutMission from "@/components/about/AboutMission";
import CaptainsProject from "@/components/about/CaptainsProject";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-32">
      <AboutHero />
      <AboutHighlights />
      <AboutStory />
      <AboutMission />
      <CaptainsProject />
    </main>
  );
}