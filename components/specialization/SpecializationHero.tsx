import Image from "next/image";

export default function SpecializationHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/youth-hero.png"
          alt="Young runner"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 35%" }}
        />

        {/* Blue overlay */}
        <div className="absolute inset-0 bg-[#0A2E5C]/65" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-8 py-28 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#7DD3FC]">
          Female Sports Medicine
        </p>

        <h1 className="mt-5 text-5xl md:text-6xl font-extrabold tracking-tight">
          Youth Sports Specialization
        </h1>

        <p className="mt-10 mx-auto max-w-3xl text-xl leading-9 text-slate-100">
          Does specializing in one sport from a young age improve performance?
          For most athletes, the answer is no. Research shows that early sport
          specialization increases injury and burnout risk without improving the
          likelihood of long-term athletic success.
        </p>
      </div>
    </section>
  );
}