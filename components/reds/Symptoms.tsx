const symptoms = [
  {
    title: "Fatigue",
    icon: "😴",
  },
  {
    title: "Stress Fractures",
    icon: "🦴",
  },
  {
    title: "Poor Recovery",
    icon: "🔄",
  },
  {
    title: "Recurrent Injuries",
    icon: "🤕",
  },
  {
    title: "Missed or Irregular Periods",
    icon: "🩸",
  },
  {
    title: "Frequent Illness",
    icon: "🤒",
  },
  {
    title: "Mood Changes",
    icon: "🧠",
  },
  {
    title: "Decreased Performance",
    icon: "📉",
  },
];

export default function Symptoms() {
  return (
    <section className="py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#00AEEF]">
          Warning Signs
        </p>

        <h2 className="mt-4 text-5xl font-bold text-slate-900">
          Common Symptoms of RED-S
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Every athlete experiences RED-S differently. Recognizing these common
          warning signs can help athletes seek support before more serious
          health consequences develop.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {symptoms.map((symptom) => (
          <div
            key={symptom.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF] hover:shadow-xl"
          >
            <div className="text-5xl">{symptom.icon}</div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              {symptom.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-4xl rounded-3xl bg-[#00AEEF]/5 border border-[#00AEEF]/20 p-8">
        <p className="text-center text-lg leading-8 text-slate-700">
          These symptoms can have many different causes. If you notice one or
          more of these signs, consider talking with a physician, athletic
          trainer, sports dietitian, or another qualified healthcare
          professional for evaluation.
        </p>
      </div>
    </section>
  );
}