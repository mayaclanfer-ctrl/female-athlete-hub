import MediaHero from "@/components/media/MediaHero";
import YouTubeSection from "@/components/media/YouTubeSection";
import ToolkitSection from "@/components/media/ToolkitSection";
import PodcastSection from "@/components/media/PodcastSection";

export default function MediaPage() {
  return (
    <>
      <MediaHero />
      <YouTubeSection />
      <ToolkitSection />
      <PodcastSection />
    </>
  );
}