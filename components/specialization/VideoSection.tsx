export default function VideoSection() {
  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Watch: Why Early Specialization Can Do More Harm Than Good
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
          This short video summarizes the research on youth sports
          specialization and explains why playing multiple sports during
          childhood can reduce injury risk while supporting long-term athletic
          development.
        </p>
      </div>

      <div className="mt-12 mx-auto max-w-3xl overflow-hidden rounded-3xl shadow-xl">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/doJlq20kz1E"
          title="Youth Sports Specialization"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}