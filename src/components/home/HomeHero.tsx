import Image from "next/image";
import Link from "next/link";
import { MagneticCta } from "@/components/MagneticCta";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[min(58vh,520px)] overflow-hidden bg-[#fff8ef] text-[var(--metma-ink)] sm:min-h-[min(64vh,580px)] md:min-h-[min(72vh,680px)]">
      <div className="hero-media absolute inset-0">
        <Image
          src="/images/hero-1.jpg"
          alt=""
          fill
          priority
          quality={70}
          aria-hidden
          className="hero-poster object-cover object-[72%_center] opacity-30 mix-blend-multiply sm:object-[68%_center] md:object-center"
          sizes="100vw"
        />
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover object-[55%_center] md:object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-1.jpg"
          aria-hidden
        >
          <source src="/videos/hero-explosion.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,239,0.72)_0%,rgba(255,248,239,0.28)_42%,rgba(255,248,239,0.78)_100%)] md:bg-[linear-gradient(105deg,rgba(255,248,239,0.92)_0%,rgba(255,248,239,0.62)_34%,rgba(255,248,239,0.12)_58%,transparent_74%)]"
      />

      <div className="hero-copy relative z-10 flex min-h-[min(58vh,520px)] flex-col justify-end px-0 pb-9 pt-8 sm:min-h-[min(64vh,580px)] sm:pb-12 md:min-h-[min(72vh,680px)] md:justify-center md:pb-16 md:pt-12">
        <div className="container-metma max-w-xl">
          <p className="eyebrow text-[var(--metma-rose)]">
            Farbe · Ostern · Seit 1999
          </p>
          <h1 className="mt-2.5 font-display text-[clamp(2.85rem,14vw,6.2rem)] font-bold leading-[0.88] tracking-[-0.045em] text-[var(--metma-ink)] sm:mt-3">
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
