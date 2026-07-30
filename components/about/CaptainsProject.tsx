export default function CaptainsProject() {
  return (
    <section className="py-20">

      <div className="rounded-3xl border border-[#00AEEF]/20 bg-blue-50 p-10">

        <h2 className="text-4xl font-bold text-slate-900">
          The Captains Project
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          The Captains Project trains high school team captains to lead
          evidence-based ACL injury prevention warm-ups and teach proper
          movement mechanics to their teammates. My goal is to help athletes
          build safer training habits while creating a culture of injury
          prevention within their teams.
        </p>

        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">

          <h3 className="text-2xl font-bold text-slate-900">
            Bring The Captains Project to Your Team
          </h3>

          <p className="mt-4 text-slate-700 leading-7">
            If you're a coach, athletic director, or team captain interested in
            scheduling an ACL injury prevention workshop or learning more about
            the program, I'd love to connect.
          </p>

          <ul className="mt-6 space-y-2 text-slate-700">
            <li>✓ High school teams</li>
            <li>✓ Team captain leadership workshops</li>
            <li>✓ Evidence-based ACL prevention warm-ups</li>
            <li>✓ Coach and athlete education</li>
          </ul>

          <a
            href="mailto:mayaclanfer@gmail.com?subject=The Captains Project"
            className="mt-8 inline-flex rounded-xl bg-[#00AEEF] px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
          >
            Contact Me
          </a>

        </div>

      </div>

    </section>
  );
}