import Link from "next/link";

const resources = [
  {
    title: "Female Athlete Triad Fact Sheet",
    organization: "Boston Children's Hospital",
    description:
      "A downloadable guide explaining the Female Athlete Triad, risk factors, symptoms, and treatment.",
    link: "https://www.childrenshospital.org/sites/default/files/2022-03/female-athlete-triad.pdf",
    button: "Download PDF",
  },
  {
    title: "Understanding RED-S",
    organization: "Boston Children's Hospital",
    description:
      "Learn more about Relative Energy Deficiency in Sport, including its causes, symptoms, and prevention.",
    link: "https://answers.childrenshospital.org/relative-energy-deficiency-red-s/",
    button: "Read Article",
  },
];

export default function REDSResources() {
  return (
    <section className="py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#00AEEF]">
          Learn More
        </p>

        <h2 className="mt-4 text-5xl font-bold text-slate-900">
          Additional Resources
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Explore these trusted resources to learn more about RED-S and the
          Female Athlete Triad.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF] hover:shadow-xl"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-[#00AEEF]">
              {resource.organization}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              {resource.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              {resource.description}
            </p>

            <Link
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-full bg-[#00AEEF] px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
            >
              {resource.button} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}