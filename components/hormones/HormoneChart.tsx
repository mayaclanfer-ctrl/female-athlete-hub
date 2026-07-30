import Image from "next/image";

export default function HormoneChart() {
  return (
    <section className="py-16">
      <div className="text-center">
        <h2 className="text-4xl font-black text-slate-900">
          Hormone Levels Throughout the Menstrual Cycle
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          Estrogen and progesterone fluctuate throughout the menstrual cycle,
          influencing strength, recovery, endurance, and injury risk.
        </p>
      </div>

      <div className="mt-10 w-full">
 <Image
  src="/images/hormone-chart-new.png"
  alt="Hormone levels throughout the menstrual cycle"
  width={1800}
  height={1100}
  className="w-full h-auto rounded-3xl shadow-lg"
  priority
/>
</div>
    </section>
  );
}