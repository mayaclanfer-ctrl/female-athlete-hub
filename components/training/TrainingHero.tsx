import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TrainingHero() {
  return (
    <section className="py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
        Captain's Project
      </p>

      <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
        ACL Injury Prevention Trainings
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
        Bring evidence-based ACL injury prevention directly to your team,
        school, or organization. These free 30-minute trainings combine
        research, live demonstrations, and practical instruction so
        participants leave with the confidence to implement and teach an
        effective injury-prevention program.
      </p>

      <div className="mt-8">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSffnzyhbwvyvFAyhCv5qdo8ILH8kJZ55guI8nOVdtRu6zMhZg/viewform?usp=sharing&ouid=111155702510659835288"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="rounded-full bg-sky-600 px-7 py-6 text-white font-semibold shadow-md transition-all hover:bg-sky-700 hover:shadow-lg">
      Request a Free Training
    </Button>
  </a>
</div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <span className="rounded-full bg-sky-100 px-5 py-2 font-medium text-sky-800">
          ✓ Free
        </span>

        <span className="rounded-full bg-sky-100 px-5 py-2 font-medium text-sky-800">
          ✓ 30 Minutes
        </span>

        <span className="rounded-full bg-sky-100 px-5 py-2 font-medium text-sky-800">
          ✓ In-Person or Virtual
        </span>
      </div>
    </section>
  );
}