import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  ChevronRight,
  Phone,
  Clock,
  ShieldCheck,
  Sparkles,
  Check,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import TreatmentCard from "@/components/TreatmentCard";
import { SPA, SITE_URL } from "@/lib/spa";
import { treatments, treatmentAddons, consultIncludes, isListedOnServicesPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services & Treatment Menu — Enhanced Aesthetics Medi Spa",
  description:
    "Hydrabrasion, custom medi-facials, acne care, dermaplaning, LED light therapy, and body treatments — performed one-on-one by Razan Shahrour in her private Mississauga studio.",
  alternates: { canonical: `${SITE_URL}/services` },
};

const grouped = {
  Face: treatments.filter(
    (t) => t.category === "Face" && isListedOnServicesPage(t),
  ),
  Body: treatments.filter(
    (t) => t.category === "Body" && isListedOnServicesPage(t),
  ),
  Consult: treatments.filter(
    (t) => t.category === "Consult" && isListedOnServicesPage(t),
  ),
};

export default function ServicesPage() {
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
              Treatment Menu
            </p>
            <h1 className="font-display text-[44px] sm:text-[60px] font-black leading-[1.02] tracking-tight">
              Built around{" "}
              <span className="italic text-[#0E4F4A]">your skin</span>, not a script.
            </h1>
            <p className="mt-5 text-[#4A4A4A] text-[16px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
              Every session begins with a one-on-one skin analysis. The
              treatment menu below is the foundation — but Razan layers,
              substitutes, and adjusts based on what your skin needs that day.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-full bg-[#0E4F4A] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#1A6F68] transition-colors shadow-md shadow-[#0E4F4A]/20"
              >
                <Calendar size={16} />
                Book on Calendly
              </Link>
              <a
                href="#consult"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#1A1A1A]/15 text-[#1A1A1A] px-6 py-3.5 font-semibold text-sm hover:bg-[#1A1A1A]/5 transition-colors"
              >
                Not sure where to start?
                <ChevronRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing transparency + scope-of-practice banner */}
      <section className="bg-white border-y border-black/5 px-5 py-5">
        <div className="max-w-3xl mx-auto flex flex-col gap-2 items-center text-[13.5px] text-[#4A4A4A] text-center">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#0E4F4A]">
              <ShieldCheck size={14} />
              Transparent pricing
            </span>
            <span aria-hidden className="opacity-30">·</span>
            <span>
              <strong className="text-[#1A1A1A]">Menu pricing:</strong>{" "}
              Published amounts match Razan&apos;s Instagram story menu (and the
              list below). Sessions are still customized — your total is always
              confirmed when you book on Calendly.
            </span>
          </div>
          <p className="max-w-2xl text-[12.5px] text-[#4A4A4A] leading-relaxed">
            <strong className="text-[#1A1A1A]">What we don&apos;t do:</strong>{" "}
            Botox, fillers, or laser. If you ask about an injectable or laser
            service we don&apos;t offer, Razan will refer you to a clinic
            she trusts.
          </p>
        </div>
      </section>

      {/* Face treatments */}
      <section id="face" className="px-5 py-20 bg-[#F8F1EC]">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <Reveal>
            <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Face
            </p>
            <h2 className="font-display text-[36px] sm:text-[44px] font-black leading-[1.05] tracking-tight">
              Facials &amp; <span className="italic text-[#0E4F4A]">advanced skin</span>.
            </h2>
            <p className="mt-4 text-[#4A4A4A] text-[15px] leading-relaxed max-w-md mx-auto">
              From quick glow-ups to full reset protocols.
            </p>
          </Reveal>
        </div>

        <ul className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {grouped.Face.map((t, i) => (
            <Reveal key={t.slug} delay={i * 80} as="li">
              <TreatmentCard treatment={t} />
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Facial add-ons (Instagram menu) */}
      <section id="add-ons" className="px-5 py-16 bg-white border-y border-black/5 scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <Reveal>
            <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Facial add-ons
            </p>
            <h2 className="font-display text-[30px] sm:text-[38px] font-black leading-tight tracking-tight">
              Stack onto <span className="italic text-[#0E4F4A]">any facial</span>.
            </h2>
            <p className="mt-3 text-[#4A4A4A] text-[14.5px] leading-relaxed max-w-md mx-auto">
              Same prices as posted on Instagram — add when you book or ask
              Razan during your consult.
            </p>
          </Reveal>
        </div>
        <ul className="max-w-lg mx-auto rounded-2xl bg-[#F8F1EC] ring-1 ring-black/5 divide-y divide-black/10 overflow-hidden">
          {treatmentAddons.map((a, i) => (
            <Reveal key={a.name} delay={i * 40} as="li">
              <div className="flex items-center justify-between gap-4 px-5 py-3.5 text-[15px]">
                <span className="font-semibold text-[#1A1A1A]">{a.name}</span>
                <span className="font-display font-black text-[#0E4F4A] tabular-nums">
                  +${a.price}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Body treatments */}
      <section id="body" className="px-5 py-20 bg-white border-y border-black/5">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <Reveal>
            <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Body
            </p>
            <h2 className="font-display text-[36px] sm:text-[44px] font-black leading-[1.05] tracking-tight">
              For the skin you{" "}
              <span className="italic text-[#0E4F4A]">forget about</span>.
            </h2>
          </Reveal>
        </div>
        <ul className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-5">
          {grouped.Body.map((t, i) => (
            <Reveal key={t.slug} delay={i * 80} as="li">
              <TreatmentCard treatment={t} />
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Consult */}
      <section
        id="consult"
        className="px-5 py-20 bg-[#E5EFEC] border-y border-black/5"
      >
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                First Time?
              </p>
              <h2 className="font-display text-[34px] sm:text-[40px] font-black leading-tight tracking-tight">
                Start with a <span className="italic text-[#0E4F4A]">consultation</span>.
              </h2>
              <p className="mt-4 text-[#4A4A4A] text-[15px] leading-relaxed">
                Free with first booking. 30 minutes one-on-one with Razan to
                look at your skin and map a realistic plan.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-3xl bg-white p-7 ring-1 ring-black/5 shadow-sm">
              <div className="flex items-center gap-2 text-[#C9A66A] text-[11px] tracking-[0.18em] uppercase font-bold mb-2">
                <Sparkles size={13} />
                What&apos;s included
              </div>
              <h3 className="font-display text-[24px] font-black mb-4">
                Skin Consultation
              </h3>
              <ul className="grid sm:grid-cols-3 gap-3">
                {consultIncludes.map((v) => (
                  <li
                    key={v.label}
                    className="rounded-2xl bg-[#F8F1EC] ring-1 ring-black/5 p-4 text-center"
                  >
                    <span className="grid place-items-center w-9 h-9 mx-auto mb-2 rounded-full bg-[#0E4F4A]/10 text-[#0E4F4A]">
                      <Check size={16} strokeWidth={2.5} />
                    </span>
                    <p className="font-bold text-[14px] text-[#1A1A1A]">
                      {v.label}
                    </p>
                    <p className="mt-1 text-[12.5px] text-[#4A4A4A]">
                      Worth{" "}
                      <span className="line-through opacity-60">{v.value}</span>
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[#1A1A1A]">
                <p className="font-display text-[18px] font-black text-[#0E4F4A]">
                  Free with first booking
                </p>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0E4F4A] text-white px-6 py-3 font-bold text-sm hover:bg-[#1A6F68] transition-colors"
                >
                  <Calendar size={14} />
                  Book consultation
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we don't do — trust signal */}
      <section className="px-5 py-20 bg-[#F8F1EC]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3 text-center">
              Honest List
            </p>
            <h2 className="text-center font-display text-[30px] sm:text-[36px] font-black leading-tight tracking-tight">
              What Razan <span className="italic text-[#0E4F4A]">doesn&apos;t</span> do.
            </h2>
            <p className="mt-4 text-center text-[#4A4A4A] text-[14.5px] max-w-md mx-auto leading-relaxed">
              The studio focuses on what it does best. If you ask about a
              treatment we don&apos;t offer, you&apos;ll get a referral to
              someone Razan trusts — never a stretch.
            </p>
          </Reveal>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-[14.5px]">
            {[
              "Botox, Dysport, or any injectable",
              "Dermal fillers",
              "Morpheus8 / RF microneedling",
              "Laser hair removal",
              "Laser skin resurfacing",
              "Surgical or invasive procedures",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-white ring-1 ring-black/5 px-5 py-4 flex items-center gap-3"
              >
                <span className="grid place-items-center w-8 h-8 rounded-full bg-[#E8C4BD]/40 text-[#1A1A1A] shrink-0">
                  <Clock size={14} />
                </span>
                <span className="text-[#1A1A1A]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 bg-white border-t border-black/5">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-display text-[30px] sm:text-[36px] font-black leading-tight">
            Ready to glow?
          </h2>
          <p className="mt-3 text-[#4A4A4A] text-[15px] leading-relaxed">
            Book your treatment on Calendly — most clients are seen within the
            week.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0E4F4A] text-white px-7 py-4 font-bold text-[15px] hover:bg-[#1A6F68] transition-colors shadow-lg shadow-[#0E4F4A]/20"
            >
              <Calendar size={16} />
              Book on Calendly
            </Link>
            <a
              href={`tel:${SPA.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1A1A1A]/15 text-[#1A1A1A] px-7 py-4 font-semibold text-[15px] hover:bg-[#1A1A1A]/5 transition-colors"
            >
              <Phone size={16} />
              {SPA.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
