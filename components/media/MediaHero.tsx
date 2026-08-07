import Image from "next/image";

export default function MediaHero() {
  return (
    <section className="relative -mt-32 mb-20 h-[600px] overflow-hidden rounded-b-3xl">
      {/* Background Image */}
      <Image
        src="/images/media-hero.jpg"
        alt="Maya creating media content on the beach"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: "center 35%" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/45" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
            Media
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            Videos, Podcasts & Interviews
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-100">
            Explore educational videos, injury prevention resources, podcast interviews, 
            and media appearances focused on evidence-based female sports medicine,
            injury prevention, and athlete health.
          </p>
        </div>
      </div>
    </section>
  );
}