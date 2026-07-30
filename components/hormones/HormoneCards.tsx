import { Card, CardContent } from "@/components/ui/card";

export default function HormoneCards() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
            Hormone Breakdown
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900">
            Estrogen & Progesterone
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Estrogen and progesterone fluctuate throughout the menstrual cycle,
            influencing strength, recovery, metabolism, injury risk, and
            athletic performance.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ESTROGEN */}

          <Card className="rounded-3xl border-0 shadow-lg">
            <CardContent className="p-8">

              <h3 className="text-3xl font-black text-sky-800">
                Estrogen
              </h3>

              <div className="mt-8 space-y-5">

                <div>
                  <p className="font-semibold text-slate-900">
                    Highest Levels
                  </p>

                  <p className="text-slate-600">
                    Days 6–15, 20–23
                  </p>

                  <p className="text-slate-500 text-sm">
                    Late Follicular • Ovulation • Mid Luteal
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Lowest Levels
                  </p>

                  <p className="text-slate-600">
                    Days 1–5, 24–28
                  </p>

                  <p className="text-slate-500 text-sm">
                    Early Follicular • Late Luteal
                  </p>
                </div>

              </div>

              <div className="mt-10 border-t pt-8 space-y-6">

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Enhances neuromuscular activation
                  </h4>

                  <p className="mt-1 text-slate-600">
                    Faster muscle signaling and heightened reflexes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Supports muscle growth
                  </h4>

                  <p className="mt-1 text-slate-600">
                    Increases protein synthesis and muscle maintenance.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Supports bone health
                  </h4>

                  <p className="mt-1 text-slate-600">
                    Maintains bone density and lowers fracture risk.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Improves mood and energy
                  </h4>

                  <p className="mt-1 text-slate-600">
                    Increased serotonin production may reduce anxiety and
                    improve well-being.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Increases ligament laxity
                  </h4>

                  <p className="mt-1 text-slate-600">
                    May increase the risk of ligament-based injuries during
                    peak estrogen levels.
                  </p>
                </div>

              </div>

            </CardContent>
          </Card>

          {/* PROGESTERONE */}

          <Card className="rounded-3xl border-0 shadow-lg">
            <CardContent className="p-8">

              <h3 className="text-3xl font-black text-indigo-800">
                Progesterone
              </h3>

              <div className="mt-8 space-y-5">

                <div>
                  <p className="font-semibold text-slate-900">
                    Highest Levels
                  </p>

                  <p className="text-slate-600">
                    Days 16–28
                  </p>

                  <p className="text-slate-500 text-sm">
                    Early Luteal • Mid Luteal • Late Luteal
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Lowest Levels
                  </p>

                  <p className="text-slate-600">
                    Days 1–15
                  </p>

                  <p className="text-slate-500 text-sm">
                    Early Follicular • Late Follicular • Ovulation
                  </p>
                </div>

              </div>

              <div className="mt-10 border-t pt-8 space-y-6">

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Raises body temperature
                  </h4>

                  <p className="mt-1 text-slate-600">
                    Can make exercise in hot environments more challenging.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Supports endurance metabolism
                  </h4>

                  <p className="mt-1 text-slate-600">
                    Increases reliance on fat as a fuel source during exercise.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Can reduce muscle-building response
                  </h4>

                  <p className="mt-1 text-slate-600">
                    Counteracts some of estrogen's muscle-building effects.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Low levels reduce ligament strength
                  </h4>

                  <p className="mt-1 text-slate-600">
                    May decrease the hamstring-to-quadriceps strength ratio,
                    increasing injury risk.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Increases cardiovascular strain
                  </h4>

                  <p className="mt-1 text-slate-600">
                    Higher heart rate and greater physiological stress during
                    prolonged exercise.
                  </p>
                </div>

              </div>

            </CardContent>
          </Card>

        </div>

      </div>
    </section>
  );
}