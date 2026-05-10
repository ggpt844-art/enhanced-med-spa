import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ChevronRight, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";
import Placeholder from "@/components/Placeholder";
import { SPA, SITE_URL } from "@/lib/spa";
import { journalPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Journal — Skin Tips, Treatment Guides | Enhanced Aesthetics",
  description:
    "Treatment guides, skin science, and behind-the-scenes notes from Razan Shahrour at Enhanced Aesthetics Medi Spa in Mississauga.",
  alternates: { canonical: `${SITE_URL}/journal` },
};

export default function JournalPage() {
  return (
    <main id="main" className="relative bg-[#F8F1EC] text-[#1A1A1A]">
      <FloatingNav phone={SPA.phone} />
      <StickyMobileCTA
        phone={SPA.phone}
        phoneDisplay={SPA.phoneDisplay}
        whatsapp={SPA.whatsapp}
      />

      <section className="relative bg-[#F8F1EC] overflow-hidden">
        <div
          aria-hidden
          className="drift-x pointer-events-none absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-[#0E4F4A] opacity-[0.07] blur-[120px]"
        />
        <SiteHeader />
        <div className="relative px-5 pt-6 pb-14 max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              The Journal
            </p>
            <h1 className="font-display text-[44px] sm:text-[60px] font-black leading-[1.02] tracking-tight">
              Skin tips, treatment guides,{" "}
              <span className="italic text-[#0E4F4A]">honest science</span>.
            </h1>
            <p className="mt-5 text-[#4A4A4A] text-[16px] leading-relaxed max-w-xl mx-auto">
              Razan&apos;s notes from the studio — short, useful, and
              ingredient-honest.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 bg-[#F8F1EC]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
          {journalPosts.map((p, i) => {
            const isLive = p.status === "live";
            const Wrapper = isLive
              ? ({ children }: { children: React.ReactNode }) => (
                  <Link
                    href={`/journal/${p.slug}`}
                    className="block rounded-3xl overflow-hidden bg-white ring-1 ring-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    {children}
                  </Link>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <article className="rounded-3xl overflow-hidden bg-white ring-1 ring-black/5 shadow-sm h-full opacity-80">
                    {children}
                  </article>
                );

            return (
              <Reveal key={p.slug} delay={i * 100}>
                <Wrapper>
                  <div className="relative aspect-[4/3]">
                    <Placeholder
                      label={p.title}
                      caption={p.tag}
                      variant={i === 0 ? "spa" : i === 1 ? "blush" : "champagne"}
                      className="h-full"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[#C9A66A] text-[10.5px] tracking-[0.22em] uppercase font-bold mb-2">
                      <span>{p.tag}</span>
                      <span aria-hidden className="opacity-40">·</span>
                      <span>{p.date}</span>
                    </div>
                    <h2 className="font-display text-[20px] font-black leading-tight">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-[#4A4A4A] text-[14px] leading-relaxed">
                      {p.intro}
                    </p>
                    {isLive ? (
                      <p className="mt-4 inline-flex items-center gap-1.5 text-[#0E4F4A] font-bold text-sm">
                        Read article <ChevronRight size={14} />
                      </p>
                    ) : (
                      <p className="mt-4 inline-flex items-center gap-1.5 text-[#4A4A4A] text-sm font-semibold">
                        <Sparkles size={13} />
                        Coming soon
                      </p>
                    )}
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-5 py-20 bg-white border-y border-black/5">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Stay in the loop
          </p>
          <h2 className="font-display text-[30px] sm:text-[36px] font-black leading-tight">
            New posts in your inbox.
          </h2>
          <p className="mt-3 text-[#4A4A4A] text-[14.5px] leading-relaxed">
            One short email when a new article goes live. No spam.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 bg-[#F8F1EC]">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-display text-[30px] sm:text-[36px] font-black leading-tight">
            Skip the reading.
          </h2>
          <p className="mt-3 text-[#4A4A4A] text-[15px] leading-relaxed">
            Book a 30-minute consultation with Razan and get a plan instead.
          </p>
          <Link
            href="/book"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0E4F4A] text-white px-7 py-4 font-bold text-[15px] hover:bg-[#1A6F68] transition-colors shadow-lg shadow-[#0E4F4A]/20"
          >
            <Calendar size={16} />
            Book on Calendly
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
