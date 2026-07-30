import Image from "next/image";

export default function HormoneHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hormones-hero.jpg"
          alt="Rowers on the water"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/55" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-8 py-24 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#7DD3FC]">
          Female Sports Medicine
        </p>

        <h1 className="mt-4 text-5xl md:text-6xl font-bold">
          Hormones &amp; Performance
        </h1>

        <div className="mx-auto mt-12 max-w-2xl rounded-3xl bg-white/15 backdrop-blur-md border border-white/20 p-10">
          <p className="text-5xl md:text-6xl font-bold text-[#7DD3FC]">
            50–71%
          </p>

          <p className="mt-5 text-xl leading-8">
            of female athletes report that their menstrual cycle affects their
            athletic performance—either positively or negatively.
          </p>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-lg leading-8 text-slate-100">
          <span className="font-semibold text-white">
            Current research suggests hormonal changes throughout the menstrual
            cycle may influence strength, endurance, recovery, and injury risk.
          </span>{" "}
          Explore the science behind these changes and learn how to apply them
          to your training.
        </p>
      </div>
    </section>
  );
}