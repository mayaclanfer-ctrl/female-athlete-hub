import Image from "next/image";

export default function REDSOverview() {
  return (
    <section className="pt-12 pb-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Text */}

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#00AEEF]">
            Understanding RED-S
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            What is RED-S?
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Relative Energy Deficiency in Sport (RED-S) occurs when an athlete
            consistently expends more energy than they consume. Without enough
            energy to support both exercise and normal body functions, the body
            begins conserving energy by reducing processes that are not
            immediately necessary for survival.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Because every organ system requires energy, RED-S can affect much
            more than athletic performance. It may influence bone health,
            metabolism, hormone production, cardiovascular function, immune
            health, psychological well-being, and recovery.
          </p>

          <div className="mt-8 rounded-2xl border-l-4 border-[#00AEEF] bg-slate-50 p-6">
            <p className="text-lg font-medium text-slate-800">
              RED-S is a whole-body condition—not just a nutrition problem.
            </p>
          </div>
        </div>

        {/* Graphic */}

        <div>
          <Image
            src="/images/reds-diagram.png"
            alt="Diagram showing body systems affected by Relative Energy Deficiency in Sport"
            width={700}
            height={700}
            className="w-full rounded-3xl shadow-xl"
            priority
          />
        </div>

      </div>
    </section>
  );
}