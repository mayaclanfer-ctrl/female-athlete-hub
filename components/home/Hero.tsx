import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Girls soccer team huddle"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">

          <div className="max-w-3xl">

            <p className="mb-4 uppercase tracking-[0.35em] text-teal-300 font-semibold">
              Female Sports Medicine Hub
            </p>

            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
              Research.
              <br />
              Education.
              <br />
              Injury Prevention.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Helping female athletes, coaches, parents, and schools
              make evidence-based decisions to improve performance,
              reduce injuries, and build healthier athletic careers.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

             <Link href="/acl-prevention">
  <Button
    size="lg"
    className="rounded-full px-8"
  >
    Explore ACL Prevention
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
</Link>

 <a
  href="https://www.youtube.com/@MayaLanfer"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="secondary"
    size="lg"
    className="rounded-full"
  >
    <PlayCircle className="mr-2 h-5 w-5" />
    Watch Videos
  </Button>
</a>

            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-xs tracking-[0.25em] uppercase">
            Scroll
          </span>

          <div className="h-10 w-[2px] bg-white/70" />
        </div>
      </div>

    </section>
  );
}