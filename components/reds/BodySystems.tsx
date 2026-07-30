const systems = [
  {
    title: "Bone Health",
    icon: "🦴",
    description:
      "Reduced bone density can increase the risk of stress fractures and other bone injuries.",
  },
  {
    title: "Menstrual Function",
    icon: "🩸",
    description:
      "Low energy availability can disrupt normal hormone production and menstrual cycles.",
  },
  {
    title: "Metabolism",
    icon: "🔥",
    description:
      "The body slows its metabolism to conserve energy when adequate fuel isn't available.",
  },
  {
    title: "Immune System",
    icon: "🛡️",
    description:
      "Athletes may become sick more often or take longer to recover from illness.",
  },
  {
    title: "Cardiovascular Health",
    icon: "❤️",
    description:
      "RED-S can reduce cardiovascular efficiency and negatively affect endurance performance.",
  },
  {
    title: "Endocrine System",
    icon: "🧬",
    description:
      "Hormonal changes can affect growth, recovery, metabolism, and reproductive health.",
  },
  {
    title: "Psychological Health",
    icon: "🧠",
    description:
      "Athletes may experience mood changes, irritability, anxiety, or difficulty concentrating.",
  },
  {
    title: "Recovery & Performance",
    icon: "🏃",
    description:
      "Poor fueling limits adaptation to training, slows recovery, and decreases performance.",
  },
];

export default function BodySystems() {
  return (
    <section className="py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#00AEEF]">
          Whole-Body Effects
        </p>

        <h2 className="mt-4 text-5xl font-bold text-slate-900">
          RED-S Affects More Than Performance
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Because every organ system requires energy to function, inadequate
          fueling can have widespread effects throughout the body.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {systems.map((system) => (
          <div
            key={system.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF] hover:shadow-xl"
          >
            <div className="text-4xl">{system.icon}</div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              {system.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {system.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}