export default function GoogleFormSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Request Your Free Workshop
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Complete the form below and I'll reach out to discuss scheduling.
            Workshops are available in person for teams within approximately
            two hours of Boston and virtually via Zoom for organizations
            located farther away.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSffnzyhbwvyvFAyhCv5qdo8ILH8kJZ55guI8nOVdtRu6zMhZg/viewform?embedded=true"
            width="100%"
            height="1500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full"
          >
            Loading…
          </iframe>
        </div>

      </div>
    </section>
  );
}