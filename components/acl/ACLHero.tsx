```tsx
import Link from "next/link";
import { Download, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { aclContent } from "@/content/acl";

export default function ACLHero() {
  const { hero } = aclContent;

  return (
    <section
      className="relative overflow-hidden pt-32 pb-24"
      style={{
        backgroundImage: "url('/images/acl-hero-blue.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 15%",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/60"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
          {hero.eyebrow}
        </p>

        <h1 className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
          {hero.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200">
          {hero.description}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/download">
            <Button
              size="lg"
              className="rounded-full px-8 py-4 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              {hero.primaryButton}
            </Button>
          </Link>

          <a
            href="https://www.youtube.com/watch?v=2_L05NnCjN8&list=PLIP9hlljY-w0&pp=sAgC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full px-8 py-4 text-lg"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              {hero.secondaryButton}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
```
