export default function IncludesSection() {
  return (
    <section className="py-20">

      <div className="text-center">

        <h2 className="text-4xl font-bold text-slate-900">
          Workshop Includes
        </h2>

        <p className="mt-5 text-lg text-slate-600">
          Participants leave with the knowledge and confidence to implement
          the program correctly.
        </p>

      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">

        <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">

          <h3 className="text-2xl font-bold">
            🏃 Exercise Demonstration
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Learn proper technique for every exercise, common mistakes to
            avoid, and progressive variations that safely increase the
            challenge as athletes improve.
          </p>

        </div>

        <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">

          <h3 className="text-2xl font-bold">
            📚 Research & Education
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Understand why female athletes are at increased risk for ACL
            injuries and the evidence supporting this prevention program.
          </p>

        </div>

        <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">

          <h3 className="text-2xl font-bold">
            👥 Teaching & Implementation
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Learn how to confidently teach the warm-up to teammates,
            athletes, or coaches so the program can be correctly implemented
            and sustained throughout the season.
          </p>

        </div>

      </div>
    </section>
  );
}