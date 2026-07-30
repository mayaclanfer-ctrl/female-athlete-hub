const preventionTips = [
  {
    icon: "🍎",
    title: "Fuel Your Body",
    description:
      "Eat enough to support both your training and your body's daily functions. Adequate energy intake is essential for health, recovery, and performance.",
  },
  {
    icon: "😴",
    title: "Prioritize Recovery",
    description:
      "Recovery is part of training. Prioritize sleep, rest days, and proper nutrition to allow your body to adapt and repair.",
  },
  {
    icon: "🤝",
    title: "Ask for Help Early",
    description:
      "If you experience symptoms of RED-S, talk with a physician, athletic trainer, sports dietitian, or another qualified healthcare professional.",
  },
];

export default function Prevention() {
  return (
    <section className="py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#00AEEF]">
          Prevention
        </p>

        <h2 className="mt-4 text-5xl font-bold text-slate-900">
          How to Reduce Your Risk
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          RED-S is often preventable. Proper fueling, recovery, and early
          recognition of symptoms can help athletes stay healthy and perform at
          their best.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {preventionTips.map((tip) => (
          <div
            key={tip.title}
            className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF] hover:shadow-xl"
          >
            <div className="text-5xl">{tip.icon}</div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              {tip.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              {tip.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-4xl rounded-3xl border-l-4 border-[#00AEEF] bg-slate-50 p-8">
        <h3 className="text-2xl font-bold text-slate-900">
          Remember
        </h3>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Peak performance starts with good health. Eating enough to support
          your training isn't just about improving performance—it's essential
          for protecting your bones, hormones, immune system, and long-term
          well-being.
        </p>
      </div>
    </section>
  );
}