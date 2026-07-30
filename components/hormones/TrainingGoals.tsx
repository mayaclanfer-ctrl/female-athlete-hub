"use client";

import { useState } from "react";

const goals = [
  {
    title: "Strength",
    icon: "💪",
    description: "Build muscle and maximize strength gains.",
    hormone: "Higher Estrogen",
    phases: "Late Follicular → Ovulation",
    days: "Days 8–15",
    why: "Higher estrogen has been associated with improved muscle protein synthesis, recovery, and strength adaptations in some athletes.",
    training: [
      "Heavy resistance training",
      "Olympic lifting",
      "Plyometrics",
      "Sprint work",
      "High-intensity strength sessions",
    ],
  },
 {
  title: "Endurance",
  icon: "🏃",
  description: "Support long-duration aerobic performance.",
  hormone: "Higher Progesterone",
  phases: "Mid Luteal",
  days: "Days 20–23",
  why: "Higher progesterone may increase the body's reliance on fat as a fuel source during prolonged exercise, which can benefit endurance performance. However, progesterone also raises core body temperature, which may make prolonged exercise or competition in hot and humid conditions more challenging.",
  training: [
    "Long runs",
    "Long rows",
    "Cycling",
    "Tempo workouts",
    "Aerobic intervals",
  ],
  note: "For endurance events in cooler conditions, some athletes may benefit from the metabolic effects associated with higher progesterone. In hot environments, increased body temperature can make heat management more difficult, making hydration, cooling strategies, and pacing especially important.",
},
  {
    title: "Speed & Power",
    icon: "⚡",
    description: "Develop explosiveness and athletic performance.",
    hormone: "Higher Estrogen",
    phases: "Late Follicular → Ovulation",
    days: "Days 8–15",
    why: "Many athletes feel strongest and most explosive during this phase. Research suggests estrogen may support muscle function and power development.",
    training: [
      "Sprint training",
      "Jump training",
      "Acceleration drills",
      "Agility work",
      "Explosive lifting",
    ],
  },
  {
    title: "Injury Prevention",
    icon: "🛡️",
    description: "Reduce injury risk and improve movement quality.",
    hormone: "Movement Quality Throughout the Cycle",
    phases: "All Phases",
    days: "Every Training Session",
    why: "Neuromuscular injury prevention training should be performed throughout the entire menstrual cycle. However, some research suggests ligament injuries such as ACL tears may be more likely during phases with higher estrogen levels.",
    training: [
      "Neuromuscular warm-up",
      "Landing mechanics",
      "Cutting technique",
      "Single-leg balance",
      "Hip & core strengthening",
    ],
    note: "Continue injury prevention training year-round. During the late follicular and ovulatory phases, pay extra attention to landing mechanics, deceleration, and cutting technique because some studies suggest higher estrogen may increase ligament laxity. Evidence is still evolving.",
  },
];

export default function TrainingGoals() {
  const [selected, setSelected] = useState(0);

  const goal = goals[selected];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Optimize Your Training
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Select a training goal to explore how hormonal changes throughout the menstrual cycle may influence training adaptations and performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">

          {goals.map((g, index) => (
            <button
              key={g.title}
              onClick={() => setSelected(index)}
              className={`rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                selected === index
                  ? "border-[#00AEEF] shadow-xl"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="text-4xl">{g.icon}</div>

              <h3 className="mt-4 text-xl font-bold">
                {g.title}
              </h3>

              <p className="mt-2 text-slate-600 text-sm">
                {g.description}
              </p>
            </button>
          ))}

        </div>

        <div className="rounded-3xl border bg-white shadow-lg p-10">

          <h3 className="text-3xl font-bold">
            {goal.icon} {goal.title}
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <Info title="Key Hormonal Influence" text={goal.hormone} />
            <Info title="Best Phase" text={goal.phases} />
            <Info title="Best Days" text={goal.days} />

          </div>

          <div className="mt-10">

            <h4 className="font-bold text-lg mb-2">
              Why?
            </h4>

            <p className="text-slate-600 leading-7">
              {goal.why}
            </p>

          </div>

          <div className="mt-10">

            <h4 className="font-bold text-lg mb-4">
              Recommended Training
            </h4>

            <ul className="grid gap-3 md:grid-cols-2">
              {goal.training.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />
                  {item}
                </li>
              ))}
            </ul>

          </div>

          {"note" in goal && goal.note && (
            <div className="mt-10 rounded-2xl bg-blue-50 border border-blue-200 p-6">

              <h4 className="font-bold text-blue-900">
                Research Note
              </h4>

              <p className="mt-2 text-blue-900 leading-7">
                {goal.note}
              </p>

            </div>
          )}

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
    <div className="rounded-xl bg-slate-50 p-5">
      <p className="text-sm font-semibold text-[#00AEEF]">
        {title}
      </p>

      <p className="mt-2 font-medium text-slate-900">
        {text}
      </p>
    </div>
  );
}