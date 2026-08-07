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

          </section>
  );
}