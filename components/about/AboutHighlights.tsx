export default function AboutHighlights() {
  const highlights = [
    {
      title: "Athlete",
      description:
        "Varsity soccer player and rower passionate about helping female athletes stay healthy and perform at their best.",
    },
    {
      title: "Researcher",
      description:
        "Conducting independent research, interviewing experts, and translating sports medicine into practical resources.",
    },
    {
      title: "Educator",
      description:
        "Founder of The Captains Project and creator of educational articles, videos, and injury prevention programs.",
    },
  ];

  return (
    <section className="pb-24">
      <div className="grid gap-8 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}