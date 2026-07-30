export default function DefinitionSection() {
  return (
    <section className="py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Definition Card */}
        <div className="rounded-3xl bg-slate-50 p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">
            What Is Youth Sports Specialization?
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Youth sports specialization is commonly defined using three
            criteria. An athlete is considered specialized when they:
          </p>

          <ul className="mt-8 space-y-5 text-lg text-slate-700">
            <li>✓ Train in one sport for more than <strong>8 months each year</strong></li>
            <li>✓ Focus primarily on one sport</li>
            <li>✓ Quit other sports to concentrate on that primary sport</li>
          </ul>

          <p className="mt-8 text-slate-600 leading-8">
            Athletes who meet all three of these criteria are considered
            <strong> highly specialized</strong>, a level associated with a
            greater risk of overuse injuries and burnout.
          </p>
        </div>

        {/* Timing Card */}
        <div className="rounded-3xl bg-blue-50 p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">
            When Should Athletes Specialize?
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            For most sports, experts recommend delaying specialization until
            <strong> late adolescence (approximately ages 15–18)</strong>.
            During childhood and early adolescence, participating in multiple
            sports helps athletes develop strength, coordination, balance, and
            movement skills while reducing injury risk.
          </p>

          <p className="mt-6 text-slate-600 leading-8">
            Exceptions include sports such as gymnastics and figure skating,
            where peak performance often occurs before adulthood.
          </p>

          <div className="mt-8 rounded-2xl bg-white p-6">
            <p className="font-semibold text-slate-900">
              Key Takeaway
            </p>

            <p className="mt-3 text-slate-600">
              For sports like soccer, basketball, volleyball, rowing,
              lacrosse, baseball, tennis, and most team sports, early
              specialization is not necessary to reach elite levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}