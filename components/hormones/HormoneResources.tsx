export default function Resources() {
  const studies = [
    {
      title:
        "Menstrual Cycle Phases and Athletic Performance: A Narrative Review",
      source: "Sports Medicine",
      description:
        "Reviews how hormonal fluctuations throughout the menstrual cycle may influence strength, endurance, recovery, and overall athletic performance.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7916245/",
    },
    {
      title:
        "Female Hormones and Exercise Performance: Current Evidence",
      source: "PubMed Central",
      description:
        "Summarizes current research on estrogen, progesterone, and how menstrual cycle phases may affect training adaptations and athletic performance.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12846116/",
    },
    {
      title:
        "The Menstrual Cycle and Sport Performance: A Systematic Review",
      source: "International Journal of Environmental Research and Public Health",
      description:
        "Systematic review examining how different phases of the menstrual cycle may influence sport performance and highlighting the variability between athletes.",
      link: "https://www.mdpi.com/1660-4601/18/4/1667",
    },
    {
      title:
        "Current Perspectives on Menstrual Cycle–Based Training",
      source: "Sports",
      description:
        "Reviews the current evidence supporting individualized menstrual cycle–informed training while emphasizing the need to account for differences between athletes.",
      link: "https://www.mdpi.com/2075-4663/14/1/7",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Resources & Research
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            The recommendations throughout this page are based on current
            scientific research. Explore these articles to learn more about the
            relationship between the menstrual cycle, hormones, and athletic
            performance.
          </p>
        </div>

        <div className="grid gap-6">
          {studies.map((study) => (
            <a
              key={study.title}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF] hover:shadow-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-[#00AEEF]">
                {study.source}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900 group-hover:text-[#00AEEF] transition-colors">
                {study.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {study.description}
              </p>

              <p className="mt-6 font-semibold text-[#00AEEF]">
                Read the study →
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-lg font-bold text-slate-900">
            A Note About the Research
          </h3>

          <p className="mt-3 leading-7 text-slate-700">
            Research on the menstrual cycle and athletic performance is rapidly
            evolving. While studies suggest that hormonal fluctuations may
            influence training adaptations, recovery, thermoregulation, and
            injury risk, responses vary considerably between individuals. These
            recommendations are intended to provide evidence-informed guidance
            and should be adapted based on each athlete's unique cycle,
            symptoms, and training goals.
          </p>
        </div>
      </div>
    </section>
  );
}