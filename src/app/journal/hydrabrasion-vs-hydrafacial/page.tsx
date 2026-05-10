import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import { SPA, SITE_URL } from "@/lib/spa";

export const metadata: Metadata = {
  title:
    "Hydrabrasion vs. HydraFacial: which is right for your skin? | Enhanced Aesthetics",
  description:
    "Hydrabrasion and HydraFacial sound the same and feel the same in the chair. The results, intensity, and price are not. An honest, ingredient-level breakdown from a Mississauga medical aesthetician.",
  alternates: {
    canonical: `${SITE_URL}/journal/hydrabrasion-vs-hydrafacial`,
  },
};

export default function HydrabrasionArticle() {
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
        <div className="relative px-5 pt-6 pb-10 max-w-2xl mx-auto">
          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-[#0E4F4A] text-[13px] font-bold mb-6 hover:gap-2 transition-all"
          >
            <ChevronLeft size={14} />
            All journal posts
          </Link>
          <Reveal>
            <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Treatment Guide · 7 min read
            </p>
            <h1 className="font-display text-[36px] sm:text-[48px] font-black leading-[1.05] tracking-tight">
              Hydrabrasion vs. HydraFacial:{" "}
              <span className="italic text-[#0E4F4A]">
                which is right for your skin?
              </span>
            </h1>
            <p className="mt-5 text-[#4A4A4A] text-[16px] leading-relaxed">
              They sound the same. They <em>feel</em> the same in the chair.
              They&apos;re both wildly popular. But the technology, the
              intensity, the results — and the price tag — are different. Here
              is the honest, ingredient-level breakdown.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hero placeholder */}
      <section className="px-5">
        <Reveal>
          <Placeholder
            label="Hydrabrasion vs HydraFacial — visual comparison"
            caption="Hero image: side-by-side wand close-ups"
            variant="spa"
            aspect="16/9"
            className="max-w-3xl mx-auto rounded-[28px] overflow-hidden ring-1 ring-black/5 shadow-xl"
          />
        </Reveal>
      </section>

      {/* Article body */}
      <article className="px-5 py-16 bg-[#F8F1EC]">
        <div className="max-w-2xl mx-auto prose-spa">
          <Reveal>
            <h2 className="font-display text-[28px] font-black leading-tight mt-4 mb-4">
              The short answer
            </h2>
            <p className="text-[#1A1A1A] text-[16.5px] leading-relaxed">
              Both treatments cleanse, exfoliate, and infuse the skin with
              hydrating serums in one 60–75 minute session. The difference
              comes down to <strong>the wand technology</strong> and{" "}
              <strong>which serums get pushed in</strong>. HydraFacial is a
              trademarked, patented system. Hydrabrasion is a category — a
              broader family of devices using the same principle.
            </p>
            <p className="mt-3 text-[#4A4A4A] text-[15.5px] leading-relaxed">
              For most people in Mississauga who just want{" "}
              <em>visibly glassier, hydrated, brighter skin</em>, the answer
              isn&apos;t which technology — it&apos;s which aesthetician.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-display text-[28px] font-black leading-tight mt-12 mb-4">
              What actually happens during each treatment
            </h2>
            <p className="text-[#4A4A4A] text-[15.5px] leading-relaxed">
              Both protocols follow the same arc: cleanse → exfoliate →
              extract → infuse → calm. Where they differ is in <em>how</em>{" "}
              each step happens.
            </p>
            <ul className="mt-4 space-y-2 text-[15px] text-[#1A1A1A]">
              <li>
                <strong>HydraFacial</strong> uses a multi-step trademarked
                Vortex-Fusion device. The exact serums, settings, and
                cartridges are licensed by HydraFacial Inc.
              </li>
              <li>
                <strong>Hydrabrasion</strong> uses similar
                vacuum-and-infusion mechanics, but with serums and
                pressure tuned to <em>your</em> skin that day.
              </li>
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <h2 className="font-display text-[28px] font-black leading-tight mt-12 mb-4">
              The honest comparison
            </h2>
            <div className="overflow-x-auto -mx-5 px-5">
              <table className="w-full text-[14.5px] border-collapse mt-2 min-w-[520px]">
                <thead>
                  <tr className="text-left text-[#0E4F4A]">
                    <th className="py-3 pr-4 border-b border-[#0E4F4A]/20 font-bold">
                      What you get
                    </th>
                    <th className="py-3 pr-4 border-b border-[#0E4F4A]/20 font-bold">
                      Hydrabrasion
                    </th>
                    <th className="py-3 border-b border-[#0E4F4A]/20 font-bold">
                      HydraFacial
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[#1A1A1A]">
                  {[
                    ["Same-day glow", "Yes", "Yes"],
                    ["Customizable serums", "Fully — chosen per session", "Limited to licensed cartridges"],
                    ["Downtime", "None", "None"],
                    ["Average price (GTA)", "$150–$220", "$220–$350"],
                    ["Best for sensitive skin", "Yes (pressure tunable)", "Sometimes (pre-set protocols)"],
                  ].map(([label, h1, h2]) => (
                    <tr key={label}>
                      <td className="py-3 pr-4 border-b border-black/10 font-semibold">{label}</td>
                      <td className="py-3 pr-4 border-b border-black/10">{h1}</td>
                      <td className="py-3 border-b border-black/10">{h2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <h2 className="font-display text-[28px] font-black leading-tight mt-12 mb-4">
              So which one should I book?
            </h2>
            <p className="text-[#4A4A4A] text-[15.5px] leading-relaxed">
              If you want a brand-name, protocol-driven experience and price
              isn&apos;t a factor, HydraFacial is a known quantity. If you
              want a more personalized session — with serums chosen for{" "}
              <em>your</em> skin that day, in a private, one-on-one studio,
              at a fairer price — hydrabrasion with a trained medical
              aesthetician is hard to beat.
            </p>
            <p className="mt-3 text-[#4A4A4A] text-[15.5px] leading-relaxed">
              At Enhanced Aesthetics, the{" "}
              <Link
                href="/services#signature-hydrabrasion"
                className="text-[#0E4F4A] font-semibold underline decoration-[#C9A66A] underline-offset-4 hover:decoration-2"
              >
                Luxury Hydrabrasion Facial
              </Link>{" "}
              is Razan&apos;s most-booked treatment for a reason: it gives you
              the same glassy, refreshed, glow-y skin a HydraFacial does — at
              about 40% less, with a customization layer that branded
              protocols can&apos;t match.
            </p>
          </Reveal>

          <Reveal delay={210}>
            <div className="mt-12 rounded-2xl bg-white ring-1 ring-black/5 p-7 text-center shadow-sm">
              <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Try it yourself
              </p>
              <h3 className="font-display text-[24px] font-black leading-tight">
                Luxury Hydrabrasion Facial · from $160
              </h3>
              <p className="mt-3 text-[#4A4A4A] text-[14.5px] leading-relaxed">
                75 minutes. One client at a time. Visible glow same day.
              </p>
              <Link
                href="/book"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0E4F4A] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#1A6F68] transition-colors"
              >
                <Calendar size={15} />
                Book your glow
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Next post teaser */}
      <section className="px-5 py-16 bg-white border-y border-black/5">
        <div className="max-w-2xl mx-auto rounded-2xl p-7 bg-[#F8F1EC] ring-1 ring-black/5">
          <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold mb-2">
            Up next on the journal
          </p>
          <h3 className="font-display text-[22px] font-black">
            What to expect at a private home-based medi spa
          </h3>
          <p className="mt-2 text-[#4A4A4A] text-[14.5px]">
            From parking to aftercare — the full first-visit walkthrough.
          </p>
          <Link
            href="/journal"
            className="mt-4 inline-flex items-center gap-1.5 text-[#0E4F4A] text-sm font-bold hover:gap-2 transition-all"
          >
            Back to all posts
            <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
