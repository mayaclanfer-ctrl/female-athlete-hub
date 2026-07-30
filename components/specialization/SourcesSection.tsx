export default function SourcesSection() {
  const sources = [
    {
      title: "Sports Specialization in Young Athletes",
      subtitle: "Peer-reviewed research article",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3658407/",
    },
    {
      title: "The Fallacy of Falling Behind",
      subtitle: "American Medical Society for Sports Medicine",
      link: "https://www.sportsmed.org/membership/sports-medicine-update/fall-2024/the-fallacy-of-falling-behind-the-realities-of-early-sports-specialization",
    },
    {
      title: "Youth Sport Specialization",
      subtitle: "Johns Hopkins Medicine",
      link: "https://www.hopkinsmedicine.org/health/expert-qa/youth-sport-specialization",
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center text-slate-900">
        Sources
      </h2>

      <p className="mt-4 text-center text-slate-600 max-w-3xl mx-auto">
        The information on this page is based on current research and guidance
        from leading sports medicine organizations.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {sources.map((source) => (
          <div
            key={source.title}
            className="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-bold text-slate-900">
              {source.title}
            </h3>

            <p className="mt-3 text-slate-600">
              {source.subtitle}
            </p>

            <a
              href={source.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
            >
              Read Article →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}