"use client";

import { useState } from "react";

const phases = [
  {
    title: "Early Follicular",
    days: "1–5",
    color: "#DBEAFE",
    hormone:
      "Both estrogen and progesterone are at their lowest levels.",
    training:
      "Recovery, mobility work, light aerobic exercise, and technique-focused sessions.",
    nutrition:
      "Replace iron lost during menstruation and prioritize adequate energy intake.",
    recovery:
      "Sleep, hydration, and listening to your body's energy levels are especially important.",
    considerations:
      "Fatigue and cramping vary widely between athletes.",
  },
  {
    title: "Late Follicular",
    days: "6–12",
    color: "#60A5FA",
    hormone:
      "Estrogen rises while progesterone remains low.",
    training:
      "Ideal time for heavy lifting, sprint work, power training, and learning new skills.",
    nutrition:
      "Maintain adequate carbohydrate and protein intake to support training adaptations.",
    recovery:
      "Normal recovery strategies are generally sufficient.",
    considerations:
      "Many athletes report feeling energetic and strong.",
  },
  {
    title: "Ovulation",
    days: "13–15",
    color: "#00AEEF",
    hormone:
      "Estrogen reaches its highest level before ovulation.",
    training:
      "Continue high-intensity work while emphasizing excellent landing and cutting mechanics.",
    nutrition:
      "Fuel appropriately before demanding training sessions.",
    recovery:
      "Continue consistent sleep and hydration.",
    considerations:
      "Some research suggests increased ACL injury risk during this phase, although evidence is mixed.",
  },
  {
    title: "Early Luteal",
    days: "16–19",
    color: "#7DD3FC",
    hormone:
      "Progesterone begins to rise.",
    training:
      "Maintain intensity while monitoring fatigue.",
    nutrition:
      "Continue balanced fueling.",
    recovery:
      "Stay hydrated as body temperature begins to rise.",
    considerations:
      "Individual responses become more variable.",
  },
  {
    title: "Mid Luteal",
    days: "20–23",
    color: "#FCA5A5",
    hormone:
      "Progesterone reaches its peak.",
    training:
      "Many athletes tolerate endurance work well.",
    nutrition:
      "Hydration becomes increasingly important.",
    recovery:
      "Cooling strategies may help during hot weather.",
    considerations:
      "Higher body temperature can influence performance in the heat.",
  },
  {
    title: "Late Luteal",
    days: "24–28",
    color: "#DC2626",
    hormone:
      "Estrogen and progesterone both decline.",
    training:
      "Adjust training if fatigue or PMS symptoms become significant.",
    nutrition:
      "Maintain regular meals and adequate carbohydrate intake.",
    recovery:
      "Prioritize sleep and recovery.",
    considerations:
      "Symptoms differ greatly between athletes.",
  },
];

export default function CycleTimeline() {
  const [selected, setSelected] = useState(1);

  const phase = phases[selected];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Training Throughout the Menstrual Cycle
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Hormonal changes can influence training, recovery, and performance.
            Select a day range to explore how different stages of the menstrual
            cycle may affect athletes.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mb-20">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-8 h-1 bg-slate-200 rounded-full" />

          <div className="relative grid grid-cols-6 gap-2">
            {phases.map((p, index) => (
              <button
                key={p.title}
                onClick={() => setSelected(index)}
                className="flex flex-col items-center"
              >
                <div
                  className={`z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 bg-white transition-all duration-300 ${
                    selected === index
                      ? "scale-125 shadow-lg"
                      : "hover:scale-110"
                  }`}
                  style={{
                    borderColor: p.color,
                  }}
                >
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                </div>

                <p
                  className={`mt-5 text-2xl font-extrabold transition-colors ${
                    selected === index
                      ? "text-[#00AEEF]"
                      : "text-slate-500"
                  }`}
                >
                  {p.days}
                </p>

                <p
                  className={`mt-1 text-xs uppercase tracking-wider ${
                    selected === index
                      ? "text-slate-800"
                      : "text-slate-400"
                  }`}
                >
                  {p.title}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Information Card */}

        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
          <div
            className="mb-6 h-2 w-24 rounded-full"
            style={{ backgroundColor: phase.color }}
          />

          <p className="text-4xl font-extrabold text-[#00AEEF]">
            Days {phase.days}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            {phase.title}
          </h3>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Info title="Hormone Levels" text={phase.hormone} />
            <Info title="Training Focus" text={phase.training} />
            <Info title="Nutrition" text={phase.nutrition} />
            <Info title="Recovery" text={phase.recovery} />
          </div>

          <div className="mt-10 rounded-2xl bg-slate-50 p-6">
            <Info
              title="Key Considerations"
              text={phase.considerations}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <h4 className="mb-2 text-lg font-bold text-slate-900">
        {title}
      </h4>

      <p className="leading-7 text-slate-600">
        {text}
      </p>
    </div>
  );
}