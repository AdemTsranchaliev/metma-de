import Image from "next/image";
import Link from "next/link";
import { MagneticCta } from "@/components/MagneticCta";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[min(58vh,520px)] overflow-hidden bg-[#f7f5f2] text-[var(--metma-ink)] sm:min-h-[min(64vh,580px)] md:min-h-[min(72vh,680px)]">
      <div className="hero-media absolute inset-0">
        <Image
          src="/images/hero-color-burst.jpg"
          alt="METMA Ostereierfarben"
          fill
          priority
          quality={75}
          className="object-cover object-[78%_center] sm:object-[72%_center] md:object-center"
          sizes="100vw"
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,245,242,0.45)_0%,rgba(247,245,242,0.12)_40%,rgba(247,245,242,0.55)_100%)] md:bg-[linear-gradient(100deg,rgba(247,245,242,0.88)_0%,rgba(247,245,242,0.4)_36%,rgba(247,245,242,0.05)_58%,transparent_72%)]"
      />

      <div className="hero-copy relative z-10 flex min-h-[min(58vh,520px)] flex-col justify-end px-0 pb-9 pt-8 sm:min-h-[min(64vh,580px)] sm:pb-12 md:min-h-[min(72vh,680px)] md:justify-center md:pb-16 md:pt-12">
        <div className="container-metma max-w-xl">
          <p className="eyebrow text-[var(--metma-rose)]">
            Farbe · Ostern · Seit 1999
          </p>
          <h1 className="brand-mark mt-2.5 text-[clamp(2.85rem,14vw,6.2rem)] sm:mt-3">
            METMA
          </h1>
          <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-[var(--metma-mute)] sm:mt-4 sm:text-base md:text-lg">
            Neue Art, Ostern zu färben — Sets und Displays aus eigener
            Produktion.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
            <MagneticCta className="w-full sm:w-auto">
              <Link href="/produkte" className="btn-metma">
                Kollektion öffnen
              </Link>
            </MagneticCta>
            <MagneticCta className="w-full sm:w-auto">
              <Link href="/uber-uns" className="btn-outline">
                Über uns
              </Link>
            </MagneticCta>
          </div>
        </div>
      </div>
    </section>
  );
}
