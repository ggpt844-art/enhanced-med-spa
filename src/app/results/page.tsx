import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ChevronRight, Camera, ShieldCheck, Phone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { SPA, SITE_URL } from "@/lib/spa";
import { beforeAfters } from "@/lib/content";

export const metadata: Metadata = {
  title: "Real Results — Before & After | Enhanced Aesthetics Medi Spa",
  description:
    "Real before-and-after photos: hydrabrasion, algae peel (face + arms), acne care, microneedling, and more — same lighting, no filters, with client consent.",
  alternates: { canonical: `${SITE_URL}/results` },
};

export default function ResultsPage() {
  return (
    <main id="main" className="relative bg-[#F8F1EC] text-[#1A1A1A]">
      <FloatingNav phone={SPA.phone} />
      <StickyMobileCTA
        phone={SPA.phone}
        phoneDisplay={SPA.phoneDisplay}
        whatsapp={SPA.whatsapp}
      />

      {/* Header band */}
      <section className="relative bg-[#F8F1EC] overflow-hidden">
        <div
          aria-hidden
          className="drift-x pointer-events-none absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-[#0E4F4A] opacity-[0.07] blur-[120px]"
        />
        <SiteHeader />
        <div className="relative px-5 pt-6 pb-14 max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Real Clients · Real Results
            </p>
            <h1 className="font-display text-[44px] sm:text-[60px] font-black leading-[1.02] tracking-tight">
              The proof is in the{" "}
              <span className="italic text-[#0E4F4A]">skin</span>.
            </h1>
            <p className="mt-5 text-[#4A4A4A] text-[16px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
              Drag any slider to see what changed. Every photo is a real
              client, captured with consent, in the same lighting — no
              filters, no retouching.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-white border-y border-black/5 px-5 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-5 text-[13px] text-[#4A4A4A] flex-wrap">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#0E4F4A]">
            <ShieldCheck size={14} />
            With written client consent
          </span>
          <span aria-hidden className="opacity-30">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Camera size={14} />
            Same lighting, no filters
          </span>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-5 py-16 bg-[#F8F1EC]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {beforeAfters.map((ba, i) => (
            <Reveal key={ba.treatment} delay={i * 100}>
              <BeforeAfterSlider
                treatment={ba.treatment}
                note={ba.note}
                beforeSrc={"beforeSrc" in ba ? ba.beforeSrc : undefined}
                afterSrc={"afterSrc" in ba ? ba.afterSrc : undefined}
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={500}>
          <p className="mt-10 max-w-2xl mx-auto text-center text-[#4A4A4A] text-[14px] leading-relaxed">
            Want results like these? It usually takes 1 session for an instant
            glow-up, and 4–6 sessions over 6–8 weeks for a full reset. Razan
            will tell you up front what&apos;s realistic for your skin.
          </p>
        </Reveal>
      </section>

      {/* Big CTA */}
      <section className="px-5 py-20 bg-[#0E4F4A] text-white">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-display text-[36px] sm:text-[44px] font-black leading-tight tracking-tight">
            Your turn.
          </h2>
          <p className="mt-4 text-white/85 text-[15px] leading-relaxed">
            Book your first treatment — most new clients are seen within the
            week.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/book"
              className="rounded-full bg-[#C9A66A] text-[#1A1A1A] px-6 py-4 font-bold text-[16px] inline-flex items-center justify-center gap-2 hover:bg-[#E7D4A9] transition-colors shadow-lg"
            >
              <Calendar size={18} />
              Book on Calendly
            </Link>
            <a
              href={`tel:${SPA.phone}`}
              className="rounded-full bg-white/10 text-white px-6 py-4 font-semibold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-white/20 transition-colors ring-1 ring-white/15"
            >
              <Phone size={18} />
              {SPA.phoneDisplay}
            </a>
          </div>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-1.5 text-[#E7D4A9] text-sm font-bold hover:gap-2 transition-all"
          >
            See the treatment menu
            <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
