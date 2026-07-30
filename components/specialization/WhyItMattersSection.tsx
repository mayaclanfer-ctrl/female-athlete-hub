export default function WhyItMattersSection() {
  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Why Does Early Specialization Matter?
        </h2>

        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Research consistently shows that specializing too early provides few
          long-term performance benefits while increasing injury and burnout
          risk.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
          <h3 className="text-2xl font-bold">
            🩺 Increased Injury Risk
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Playing one sport year-round repeatedly stresses the same muscles,
            tendons, ligaments, and joints. This repetitive loading increases
            the risk of overuse injuries, stress fractures, ACL injuries,
            shoulder injuries, and elbow injuries.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
          <h3 className="text-2xl font-bold">
            🧠 Burnout & Mental Health
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Constant competition and year-round training can reduce enjoyment,
            increase psychological stress, and contribute to burnout. Athletes
            who experience burnout are more likely to quit sports altogether.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
          <h3 className="text-2xl font-bold">
            🏆 Performance
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Playing multiple sports develops coordination, balance, agility,
            and overall athleticism. Many collegiate, professional, and Olympic
            athletes competed in multiple sports before eventually focusing on
            one during late adolescence.
          </p>
        </div>
      </div>
    </section>
  );
}