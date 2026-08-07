const triad = [
  {
    icon: "⚡",
    title: "Low Energy Availability",
    description:
      "The body does not receive enough energy to support both exercise and normal physiological functions.",
  },
  {
    icon: "🩸",
    title: "Menstrual Dysfunction",
    description:
      "Hormonal disruptions may lead to irregular menstrual cycles or loss of menstruation.",
  },
  {
    icon: "🦴",
    title: "Low Bone Mineral Density",
    description:
      "Bones become weaker over time, increasing the risk of stress fractures and osteoporosis.",
  },
];

export default function FemaleAthleteTriad() {
  return (
    <section className="py-24">
      <div className="text-center">
       <p className="text-lg font-semibold uppercase tracking-[0.25em] text-[#00AEEF]">
  Female Athlete Triad
</p>

        <h2 className="mt-4 text-5xl font-bold text-slate-900">
          Three Closely Connected Conditions
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          The Female Athlete Triad is considered part of the broader RED-S
          spectrum. These conditions often occur together, but an athlete may
          have one, two, or all three components.
        </p>
      </div>

      <div className="mt-16 flex flex-col items-center lg:flex-row lg:justify-center lg:gap-8">
        {triad.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col items-center"
          >
            <div className="w-80 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>

            {index < triad.length - 1 && (
              <>
                <div className="my-6 text-4xl text-[#00AEEF] lg:hidden">
                  ↓
                </div>

                <div className="hidden lg:flex items-center text-5xl text-[#00AEEF] px-6">
                  →
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-4xl rounded-3xl border-l-4 border-[#00AEEF] bg-slate-50 p-8">
        <h3 className="text-2xl font-bold text-slate-900">
          Athletes at Higher Risk
        </h3>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Female athletes participating in endurance, aesthetic, weight-class,
          and leanness sports—such as distance running, gymnastics, dance,
          figure skating, lightweight rowing, and cross-country—are at greater
          risk of developing RED-S and the Female Athlete Triad.
        </p>
      </div>
    </section>
  );
}