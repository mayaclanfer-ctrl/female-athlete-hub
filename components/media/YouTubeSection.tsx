import Link from "next/link";

export default function YouTubeSection() {
  return (
    <section className="py-16">
      <div className="rounded-3xl bg-slate-50 p-12">

<p className="text-lg font-semibold uppercase tracking-[0.25em] text-[#00AEEF]">
  YouTube
</p>

        <h2 className="mt-4 text-4xl font-bold">
          Educational Videos
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Watch short educational videos covering ACL injury prevention,
          hormones and athletic performance, RED-S, youth sport
          specialization, and other female sports medicine topics.
        </p>

        <Link
          href="https://www.youtube.com/@FemaleAthleteHub"
          target="_blank"
          className="mt-10 inline-flex rounded-full bg-[#00AEEF] px-8 py-4 font-semibold text-white hover:bg-sky-600 transition"
        >
          Visit My YouTube Channel →
        </Link>

      </div>
    </section>
  );
}