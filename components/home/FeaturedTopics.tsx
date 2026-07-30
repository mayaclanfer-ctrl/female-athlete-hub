import TopicCard from "./TopicCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { topics } from "@/data/topics";

export default function FeaturedTopics() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Learn"
          title="Explore Female Sports Medicine"
          description="Evidence-based resources designed to help female athletes stay healthy, improve performance, and reduce injury risk."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <TopicCard
                key={topic.title}
                title={topic.title}
                description={topic.description}
                href={topic.href}
                icon={<Icon className="h-7 w-7" />}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}