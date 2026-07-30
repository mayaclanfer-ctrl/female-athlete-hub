export default function RecommendationsSection() {
  return (
    <section className="py-20">
      <div className="rounded-3xl bg-blue-600 px-10 py-14 text-white">
        <h2 className="text-4xl font-bold">
          Evidence-Based Recommendations
        </h2>

        <p className="mt-4 max-w-3xl text-blue-100">
          Sports medicine organizations recommend these strategies to reduce
          injury risk and support long-term athletic development.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-6">
            ✓ Play multiple sports during childhood.
          </div>

          <div className="rounded-2xl bg-white/10 p-6">
            ✓ Delay specialization until ages 15–18 for most sports.
          </div>

          <div className="rounded-2xl bg-white/10 p-6">
            ✓ Avoid participating in one sport for more than 8 months each
            year.
          </div>

          <div className="rounded-2xl bg-white/10 p-6">
            ✓ Take at least 1–2 days off from organized sports every week.
          </div>

          <div className="rounded-2xl bg-white/10 p-6">
            ✓ Schedule an off-season each year to allow for recovery.
          </div>

          <div className="rounded-2xl bg-white/10 p-6">
            ✓ Prioritize long-term athlete development over early success.
          </div>
        </div>
      </div>
    </section>
  );
}