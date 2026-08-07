import Link from "next/link";

export default function PodcastSection() {
  return (
    <section className="py-16">

      <div className="rounded-3xl border border-[#00AEEF]/20 bg-[#00AEEF]/5 p-12">

       <p className="text-lg font-semibold uppercase tracking-[0.25em] text-[#00AEEF]">
  Featured Podcast
</p>

        <h2 className="mt-4 text-4xl font-bold">
          ACL Injury Prevention for Female Athletes
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          I joined CoachCraft with Alf Gracombe to discuss why female athletes
          are at greater risk for ACL injuries, what current research says
          about prevention, and how coaches can reduce injury risk through
          simple, evidence-based strategies.
        </p>

        <Link
          href="https://www.alfgracombe.com/p/maya-lanfer-on-acl-injuries-for-female-athletes"
          target="_blank"
          className="mt-10 inline-flex rounded-full border-2 border-[#00AEEF] px-8 py-4 font-semibold text-[#00AEEF] transition hover:bg-[#00AEEF] hover:text-white"
        >
          Listen to the Podcast →
        </Link>

      </div>

    </section>
  );
}