import Link from "next/link";
import { ArrowRight } from "lucide-react";

type TopicCardProps = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

export default function TopicCard({
  title,
  description,
  href,
  icon,
}: TopicCardProps) {
  return (
    <Link href={href}>
      <div className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          {icon}
        </div>

        <h3 className="mb-4 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mb-8 leading-7 text-slate-600">
          {description}
        </p>

        <div className="flex items-center font-semibold text-sky-700">
          Learn More

          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </div>

      </div>
    </Link>
  );
}