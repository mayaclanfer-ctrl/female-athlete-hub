"use client";

import { Dumbbell, Zap, PersonStanding, Shield } from "lucide-react";

const cards = [
  {
    title: "Strength & Muscle Growth",
    description:
      "Discover when hormonal changes are most supportive of strength development and muscle adaptation.",
    icon: Dumbbell,
    target: "strength",
  },
  {
    title: "Speed & Power",
    description:
      "Learn when neuromuscular performance and reaction time may be most favorable.",
    icon: Zap,
    target: "speed",
  },
  {
    title: "Endurance",
    description:
      "Understand how hormonal changes influence fuel use, body temperature, and aerobic performance.",
    icon: PersonStanding,
    target: "endurance",
  },
  {
    title: "Injury Prevention",
    description:
      "Explore how hormones may influence ligament function and injury risk throughout the menstrual cycle.",
    icon: Shield,
    target: "injury",
  },
];

export default function PerformanceOptimization() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p className="uppercase tracking-[0.3em] text-sky-700 font-semibold">
            Athlete Performance Optimization
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900">
            What are you training for?
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Select your training goal to explore the hormone patterns that may
            be most relevant for your performance.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <button
                key={card.title}
                onClick={() => scrollTo(card.target)}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl"
              >
                <Icon className="mb-6 h-10 w-10 text-sky-700" />

                <h3 className="text-2xl font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {card.description}
                </p>
              </button>
            );
          })}

        </div>
      </div>
    </section>
  );
}