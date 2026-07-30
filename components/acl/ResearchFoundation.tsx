import Section from "@/components/shared/Section";
import { aclContent } from "@/content/acl";

export default function ResearchFoundation() {
  const { research } = aclContent;

  return (
    <Section>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
          Evidence
        </p>

        <h2 className="mt-2 text-4xl font-bold text-slate-900">
          {research.title}
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-slate-750">
          {research.introduction}
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-650">
                Publication
              </h3>
              <p className="mt-2 text-lg text-slate-900">
                {research.study.publication}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-650">
                Study Design
              </h3>
              <p className="mt-2 text-lg text-slate-900">
                {research.study.design}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Participants
              </h3>
              <p className="mt-2 text-lg text-slate-900">
                {research.study.participants}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Intervention
              </h3>
              <p className="mt-2 text-lg text-slate-900">
                {research.study.intervention}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-sky-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Key Finding
            </h3>

            <p className="mt-3 text-2xl font-bold text-sky-700">
              {research.study.result}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Clinical Review
            </h3>

            <p className="mt-3 text-slate-750">
              {research.study.review}
            </p>
          </div>

          <div className="mt-8">
            <a
              href={research.study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-sky-600 px-5 py-3 font-medium text-white transition hover:bg-sky-700"
            >
              Read the Original BMJ Study
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}