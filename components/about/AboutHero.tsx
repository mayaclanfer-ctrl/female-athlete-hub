import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="pb-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#00AEEF]">
            About Me
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-slate-900">
            Athlete. Researcher. Educator.
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Hi! I'm Maya Lanfer, a soccer player and rower entering my senior
            year of high school. My passion for female sports medicine began
            with a simple question:
          </p>

          <blockquote className="mt-8 border-l-4 border-[#00AEEF] pl-6 italic text-2xl text-slate-800">
            "Why do we know so much less about female athletes than male
            athletes?"
          </blockquote>
        </div>

       <div className="relative h-[600px] w-full overflow-hidden rounded-3xl shadow-xl">
  <Image
    src="/images/about-soccer.jpg"
    alt="Maya playing soccer"
    fill
    priority
    className="object-cover"
  />
</div>

      </div>
    </section>
  );
}