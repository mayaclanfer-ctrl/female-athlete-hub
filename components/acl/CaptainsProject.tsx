import { CheckCircle2 } from "lucide-react";

import { aclContent } from "@/content/acl";

export default function CaptainsProject() {
  const { captainsProject } = aclContent;

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-sky-600">
            Featured Program
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            {captainsProject.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            {captainsProject.description}
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold text-slate-900">
            Program Highlights
          </h3>

          <ul className="mt-6 space-y-4">
            {captainsProject.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-sky-600" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}