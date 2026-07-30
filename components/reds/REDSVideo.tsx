export default function REDSVideo() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#00AEEF]">
          Watch & Learn
        </p>

        <h2 className="mt-4 text-5xl font-bold text-slate-900">
          Understanding RED-S in 60 Seconds
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Watch this short video for a quick overview of what RED-S is, why it
          happens, and why recognizing the warning signs early is so important
          for female athletes.
        </p>

        <div className="mt-16 flex justify-center">
          <div className="aspect-[9/16] w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/KBrajpAHcnM"
              title="Understanding RED-S"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}