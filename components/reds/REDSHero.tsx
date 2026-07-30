import Image from "next/image";

export default function REDSHero() {
  return (
    <section className="pb-20">
      {/* Hero Image */}
      <div className="relative mb-16 h-[420px] overflow-hidden rounded-b-3xl">
        <Image
  src="/images/reds-hero.jpg"
  alt="..."
  fill
  className="object-cover"
  style={{ objectPosition: "center bottom" }}
  priority
/>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/45" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
              Female Sports Medicine
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
              Relative Energy Deficiency in Sport (RED-S)
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-100">
              Understanding how proper fueling supports performance,
              recovery, bone health, and long-term athletic success.
            </p>
          </div>
        </div>
      </div>

      {/* Existing Content */}
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mx-auto max-w-2xl rounded-3xl border-2 border-[#00AEEF]/20 bg-[#00AEEF]/5 p-10 shadow-sm">
          <p className="text-4xl font-bold text-[#00AEEF] md:text-5xl">
            RED-S can affect nearly every organ system in the body.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            When athletes consistently consume less energy than they expend,
            their bodies begin conserving energy by reducing normal
            physiological functions.
          </p>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-lg leading-8 text-slate-600">
          RED-S can influence athletic performance, recovery, bone health,
          hormones, metabolism, immune function, cardiovascular health, and
          psychological well-being. Understanding RED-S helps athletes
          recognize warning signs early and fuel their bodies for long-term
          health and performance.
        </p>
      </div>
    </section>
  );
}