import Link from "next/link";
import { FileText } from "lucide-react";

export default function ToolkitSection() {
  return (
    <section className="py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#00AEEF]">
          Captain's Project
        </p>

        <h2 className="mt-4 text-5xl font-bold text-slate-900">
          ACL Injury Prevention Toolkit
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Developed as part of my Boston Latin School Captain's Project, these
          downloadable resources help coaches and athletes implement an
          evidence-based ACL injury prevention program.
        </p>
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-2">
        {/* Flyer */}

        <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="absolute right-8 top-8 rounded-2xl bg-sky-50 p-4 transition group-hover:bg-[#00AEEF]">
            <FileText className="h-8 w-8 text-[#00AEEF] group-hover:text-white" />
          </div>

          <span className="text-sm font-semibold uppercase tracking-widest text-[#00AEEF]">
            PDF Resource
          </span>

          <h3 className="mt-5 text-3xl font-bold text-slate-900">
            ACL Injury Prevention Flyer
          </h3>

          <p className="mt-6 leading-8 text-slate-600">
            A concise one-page guide introducing the evidence-based warm-up
            program shown to reduce ACL injuries in young female athletes.
          </p>

          <Link
            href="/pdfs/captains-project-flyer.pdf"
            target="_blank"
            className="mt-10 inline-flex rounded-full bg-[#00AEEF] px-7 py-3 font-semibold text-white transition hover:bg-sky-600"
          >
            Download Flyer →
          </Link>
        </div>

        {/* Guide */}

        <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

          <div className="absolute right-8 top-8 rounded-2xl bg-sky-50 p-4 transition group-hover:bg-[#00AEEF]">
            <FileText className="h-8 w-8 text-[#00AEEF] group-hover:text-white" />
          </div>

          <span className="text-sm font-semibold uppercase tracking-widest text-[#00AEEF]">
            PDF Resource
          </span>

          <h3 className="mt-5 text-3xl font-bold text-slate-900">
            ACL Prevention Guide
          </h3>

          <p className="mt-6 leading-8 text-slate-600">
            A comprehensive guide explaining the research behind ACL injury
            prevention, with step-by-step exercise instructions, proper technique,
            and progressive variations to safely increase difficulty as athletes
            improve.
          </p>

          <Link
            href="/download"
            className="mt-10 inline-flex rounded-full bg-[#00AEEF] px-7 py-3 font-semibold text-white transition hover:bg-sky-600"
          >
            Download Guide →
          </Link>

        </div>
      </div>
    </section>
  );
}