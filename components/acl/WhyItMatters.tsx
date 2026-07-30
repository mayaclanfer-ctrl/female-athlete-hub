import { aclContent } from "@/content/acl";
import Section from "@/components/shared/Section";

export default function WhyItMatters() {
  const { whyItMatters } = aclContent;

  return (
    <Section className="bg-white">
      <div className="max-w-5xl">
        <h2 className="text-4xl font-bold text-slate-900">
          {whyItMatters.title}
        </h2>

        <div className="mt-8">
          <p className="text-lg leading-8 text-slate-600">
            {whyItMatters.description}
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-sky-200 bg-sky-50 p-8">
          <h3 className="text-xl font-semibold text-slate-900">
            Key Takeaway
          </h3>

          <p className="mt-3 leading-7 text-slate-700">
            Research shows that structured neuromuscular warm-up programs can reduce ACL injuries by over 64% when athletes perform them consistently throughout the season.
          </p>
        </div>
      </div>
    </Section>
  );
}