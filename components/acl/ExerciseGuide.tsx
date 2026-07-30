export default function ExerciseGuide() {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-3xl font-bold text-slate-900">
        Complete Exercise Guide
      </h2>

      <p className="mb-6 text-slate-600">
        View the full guide below or download it as a PDF.
      </p>

      <a
        href="/pdfs/captains-project-guide.pdf"
        download
        className="mb-6 inline-block rounded-lg bg-sky-600 px-5 py-3 font-medium text-white hover:bg-sky-700"
      >
        Download PDF
      </a>

      <iframe
        src="/pdfs/captains-project-guide.pdf"
        className="h-[900px] w-full rounded-xl border"
        title="Captain's Project Exercise Guide"
      />
    </section>
  );
}