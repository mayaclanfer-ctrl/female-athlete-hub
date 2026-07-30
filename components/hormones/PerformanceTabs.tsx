"use client";

import Image from "next/image";
import { useState } from "react";
import { Dumbbell, Zap, PersonStanding, Shield } from "lucide-react";

const tabs = [
  {
    id: "strength",
    label: "Strength",
    icon: Dumbbell,
  },
  {
    id: "speed",
    label: "Speed",
    icon: Zap,
  },
  {
    id: "endurance",
    label: "Endurance",
    icon: PersonStanding,
  },
  {
    id: "injury",
    label: "Injury Prevention",
    icon: Shield,
  },
];

export default function PerformanceTabs() {
  const [activeTab, setActiveTab] = useState("strength");

  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="uppercase tracking-[0.3em] text-sky-700 font-semibold">
            Athlete Performance Optimization
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900">
            What are you training for?
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Select your primary training goal to learn how hormonal changes
            throughout the menstrual cycle may influence performance.
          </p>

        </div>

        {/* Tabs */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          {tabs.map((tab) => {

            const Icon = tab.icon;

            return (

              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 rounded-full px-6 py-3 font-semibold transition

                ${
                  activeTab === tab.id
                    ? "bg-sky-700 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >

                <Icon size={20} />

                {tab.label}

              </button>

            );
          })}

        </div>

       {/* Hormone Chart */}

<div className="mt-12 flex justify-center">
  <Image
    src="/images/hormone-chart.png"
    alt="Hormone levels throughout the menstrual cycle"
    width={850}
    height={520}
    className="rounded-2xl border border-slate-200 shadow-lg"
  />
</div>

{/* Content */}

<div className="mt-10 rounded-3xl bg-slate-50 p-10 shadow-sm">

  {activeTab === "strength" && <StrengthContent />}

  {activeTab === "speed" && <SpeedContent />}

  {activeTab === "endurance" && <EnduranceContent />}

  {activeTab === "injury" && <InjuryContent />}

</div>


        </div>

    </section>
  );
}

function StrengthContent() {
  return (
    <>
      <h3 className="text-3xl font-black text-slate-900">
        Strength & Muscle Growth
      </h3>

      <p className="mt-3 max-w-3xl text-lg text-slate-600">
        The late follicular phase and ovulation are generally the best times to
        prioritize strength training. During this phase, estrogen is high while
        progesterone remains low, creating a hormonal environment associated
        with greater muscle adaptation and power production.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Best Training Window
          </h4>

          <div className="mt-5 space-y-3 text-slate-700">
            <p><strong>Cycle Days:</strong> 8–15</p>
            <p><strong>Phase:</strong> Late Follicular → Ovulation</p>
            <p><strong>Hormones:</strong> High Estrogen • Low Progesterone</p>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Why?
          </h4>

          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-600">
            <li>Greater protein synthesis supports muscle growth.</li>
            <li>Improved neuromuscular activation.</li>
            <li>Higher strength adaptations.</li>
            <li>Improved recovery from heavy training.</li>
          </ul>
        </div>

      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Recommended Training
          </h4>

          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-600">
            <li>Heavy compound lifts</li>
            <li>Olympic lifts</li>
            <li>Hypertrophy sessions</li>
            <li>Max-effort lifts or PR attempts</li>
            <li>Explosive medicine ball throws</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Things to Consider
          </h4>

          <p className="mt-4 text-slate-600 leading-7">
            Although higher estrogen may improve muscle performance, some
            studies suggest it may also increase ligament laxity. Continue
            emphasizing proper lifting technique, knee stability, and landing
            mechanics during high-intensity sessions.
          </p>
        </div>

      </div>
    </>
  );
}
function SpeedContent() {
  return (
    <>
      <h3 className="text-3xl font-black text-slate-900">
        Speed & Power
      </h3>

      <p className="mt-3 max-w-3xl text-lg text-slate-600">
        During the late follicular phase and ovulation, high estrogen levels may
        improve neuromuscular function, coordination, and force production.
        This can make it an excellent time to emphasize explosive movements,
        sprinting, and power development.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        {/* Best Training Window */}

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Best Training Window
          </h4>

          <div className="mt-5 space-y-3 text-slate-700">
            <p><strong>Cycle Days:</strong> 8–15</p>
            <p><strong>Phase:</strong> Late Follicular → Ovulation</p>
            <p><strong>Hormones:</strong> High Estrogen • Low Progesterone</p>
          </div>
        </div>

        {/* Why? */}

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Why?
          </h4>

          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-600">
            <li>Improved neuromuscular activation.</li>
            <li>Greater explosive force production.</li>
            <li>Faster muscle recruitment.</li>
            <li>Improved coordination and reaction time.</li>
          </ul>
        </div>

      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        {/* Recommended Training */}

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Recommended Training
          </h4>

          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-600">
            <li>Sprint training</li>
            <li>Plyometric workouts</li>
            <li>Olympic lifts</li>
            <li>Jump training</li>
            <li>Agility and change-of-direction drills</li>
          </ul>
        </div>

        {/* Things to Consider */}

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Things to Consider
          </h4>

          <p className="mt-4 text-slate-600 leading-7">
            Power training often includes cutting, jumping, and landing. Focus
            on proper mechanics and continue performing neuromuscular warm-ups
            to help reduce injury risk during high-intensity sessions.
          </p>
        </div>

      </div>
    </>
  );
}

function EnduranceContent() {
  return (
    <>
      <h3 className="text-3xl font-black text-slate-900">
        Endurance
      </h3>

      <p className="mt-3 max-w-3xl text-lg text-slate-600">
        Hormonal changes throughout the menstrual cycle may influence endurance
        performance. During the mid-luteal phase, higher progesterone increases
        reliance on fat as a fuel source, which may benefit prolonged exercise.
        However, it also raises core body temperature, making hydration and heat
        management especially important.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        {/* Best Training Window */}

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Best Training Window
          </h4>

          <div className="mt-5 space-y-3 text-slate-700">
            <p><strong>Cycle Days:</strong> 20–23</p>
            <p><strong>Phase:</strong> Mid Luteal</p>
            <p><strong>Hormones:</strong> High Progesterone</p>
          </div>
        </div>

        {/* Why? */}

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Why?
          </h4>

          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-600">
            <li>Greater reliance on fat metabolism during prolonged exercise.</li>
            <li>May help preserve glycogen stores.</li>
            <li>Supports steady aerobic efforts.</li>
            <li>Training adaptations still depend on proper fueling and recovery.</li>
          </ul>
        </div>

      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        {/* Recommended Training */}

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Recommended Training
          </h4>

          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-600">
            <li>Long-distance runs or rides</li>
            <li>Steady-state aerobic workouts</li>
            <li>Tempo sessions</li>
            <li>Distance rowing or swimming</li>
            <li>Long-duration cross-training</li>
          </ul>
        </div>

        {/* Things to Consider */}

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Things to Consider
          </h4>

          <p className="mt-4 text-slate-600 leading-7">
            Progesterone increases core body temperature and can make exercise
            in hot or humid conditions feel more challenging. Prioritize
            hydration, electrolyte intake, and cooling strategies, especially
            during longer workouts or competitions.
          </p>
        </div>

      </div>
    </>
  );
}

function InjuryContent() {
  return (
    <>
      <h3 className="text-3xl font-black text-slate-900">
        Injury Prevention
      </h3>

      <p className="mt-3 max-w-3xl text-lg text-slate-600">
        Injury risk is influenced by many factors, including strength,
        neuromuscular control, fatigue, sleep, and training load. While hormone
        fluctuations may play a role, the most effective way to reduce injury
        risk is through consistent injury prevention training and recovery
        strategies throughout the menstrual cycle.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        {/* Focus Throughout the Cycle */}

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Focus Throughout the Cycle
          </h4>

          <div className="mt-5 space-y-3 text-slate-700">
            <p><strong>Cycle Days:</strong> Entire Menstrual Cycle</p>
            <p><strong>Priority:</strong> Consistent Injury Prevention</p>
            <p><strong>Goal:</strong> Reduce ACL and overuse injury risk</p>
          </div>
        </div>

        {/* Why? */}

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Why?
          </h4>

          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-600">
            <li>Proper movement mechanics lower injury risk.</li>
            <li>Strong muscles improve joint stability.</li>
            <li>Adequate recovery helps prevent fatigue-related injuries.</li>
            <li>Tracking your cycle can help identify personal performance patterns.</li>
          </ul>
        </div>

      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        {/* Recommended Strategies */}

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Recommended Strategies
          </h4>

          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-600">
            <li>Complete a neuromuscular warm-up before practices and games.</li>
            <li>Strengthen the glutes, hamstrings, core, and hips.</li>
            <li>Practice proper landing and cutting mechanics.</li>
            <li>Prioritize sleep, nutrition, and hydration.</li>
            <li>Gradually increase training volume to avoid overuse injuries.</li>
          </ul>
        </div>

        {/* Things to Consider */}

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-xl font-bold text-sky-800">
            Things to Consider
          </h4>

          <p className="mt-4 text-slate-600 leading-7">
            Research has not identified a single phase of the menstrual cycle
            when injuries are guaranteed to occur. Every athlete responds
            differently to hormonal changes. Rather than avoiding training,
            monitor your symptoms, communicate with your coach or athletic
            trainer, and adjust your training when needed while maintaining a
            consistent injury prevention program.
          </p>
        </div>

      </div>
    </>
  );
}