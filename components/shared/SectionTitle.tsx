type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-12 ${
        centered ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}