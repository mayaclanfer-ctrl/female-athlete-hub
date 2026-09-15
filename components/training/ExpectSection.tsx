export default function ExpectSection() {
  return (
    <section className="py-20">
      <div className="rounded-3xl bg-blue-50 p-12">

        <h2 className="text-4xl font-bold text-slate-900">
          What to Expect
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-slate-600">
          Each workshop is designed to fit into a typical team practice while
          providing practical skills that participants can immediately apply.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div>✓ 30-minute interactive workshop</div>
          <div>✓ Live exercise demonstrations</div>
          <div>✓ Proper exercise technique</div>
          <div>✓ Progressive exercise variations</div>
          <div>✓ Research behind ACL Injury prevention</div>
          <div>✓ Teaching and implementation strategies</div>
          <div>✓ Time for questions</div>
          <div>✓ Free educational resources</div>

        </div>
      </div>
    </section>
  );
}