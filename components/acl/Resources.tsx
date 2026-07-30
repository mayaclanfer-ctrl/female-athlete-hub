"use client";

import Section from "@/components/shared/Section";
import { aclContent } from "@/content/acl";

export default function Resources() {
  const { resources } = aclContent;

  return (
    <Section className="bg-slate-50">
      <div>
        <h2 className="text-4xl font-bold text-slate-900">
          {resources.title}
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-slate-700">
          {resources.description}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {resources.items.map((resource) => (
            <div
              key={resource.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {resource.title}
              </h3>

              <p className="mt-3 text-slate-700">
                {resource.description}
              </p>

              <div className="mt-6">
               {resource.action === "expand" && (
  <a
    href="/pdfs/captains-project-guide.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-lg bg-sky-600 px-4 py-2 text-white"
  >
    {resource.buttonText}
  </a>
)}

                {resource.action === "link" && (
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-sky-600 px-4 py-2 text-white"
                  >
                    {resource.buttonText}
                  </a>
                )}

                {resource.action === "download" && (
                  <a
                    href={resource.href}
                    download
                    className="inline-block rounded-lg bg-sky-600 px-4 py-2 text-white"
                  >
                    {resource.buttonText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>


      </div>
    </Section>
  );
}