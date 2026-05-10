import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Star, Phone, ChevronRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import GoogleReviewCard from "@/components/GoogleReviewCard";
import { SPA, SITE_URL } from "@/lib/spa";
import { loadReviewsForSite } from "@/lib/reviewsDisplay";

export const metadata: Metadata = {
  title: "Reviews & Testimonials | Enhanced Aesthetics Medi Spa Mississauga",
  description:
    "Recent Google reviews for Razan Shahrour and Enhanced Aesthetics Medi Spa in Mississauga. Read what clients say about hydrabrasion, facials, acne care, and the private studio.",
  alternates: { canonical: `${SITE_URL}/reviews` },
};

export default async function ReviewsPage() {
  const { rating, userRatingsTotal, fromGoogle, reviews } =
    await loadReviewsForSite(12);

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
              Patient Stories
            </p>
            <h1 className="font-display text-[44px] sm:text-[60px] font-black leading-[1.02] tracking-tight">
              {userRatingsTotal}+{" "}
              <span className="italic text-[#0E4F4A]">Google reviews</span>.
            </h1>
            <div className="mt-7 inline-flex items-center gap-3 rounded-full bg-white ring-1 ring-black/10 px-5 py-2.5 shadow-sm">
              <div className="flex gap-0.5 text-[#fbbc04]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <span className="text-[15px] font-bold text-[#1A1A1A]">
                {rating} on Google
              </span>
              <span className="text-[13px] text-[#4A4A4A]">
                · {userRatingsTotal}+ reviews
              </span>
            </div>
            <p className="mt-7 text-[#4A4A4A] text-[16px] leading-relaxed max-w-xl mx-auto">
              {fromGoogle
                ? "Below are the most recent public reviews returned by Google for this studio. The full history and newest posts are always on Google Maps."
                : "Reviews are loading from Google when available. Meanwhile, here is curated feedback — see Google Maps for the full list."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="px-5 py-16 bg-[#F8F1EC]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <Reveal key={r.key} delay={i * 80}>
              <GoogleReviewCard
                name={r.name}
                initial={r.initial}
                date={r.date}
                body={r.body}
                rating={r.rating}
                reviewCount={r.reviewCount}
                localGuide={r.localGuide}
                avatarColor={r.avatarColor}
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={600}>
          <div className="mt-10 max-w-3xl mx-auto">
            <a
              href={SPA.googleMapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#1A1A1A] text-white px-5 py-4 flex items-center justify-between gap-4 hover:bg-[#0E4F4A] transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-[#1A1A1A]">
                  <Star size={16} fill="currentColor" />
                </span>
                <span className="font-bold text-[15px]">
                  Read all {userRatingsTotal}+ on Google Maps
                </span>
              </span>
              <ChevronRight size={18} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* Write a review */}
      <section className="px-5 py-20 bg-white border-y border-black/5">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Already a Client?
          </p>
          <h2 className="font-display text-[32px] sm:text-[38px] font-black leading-tight">
            Tell the next person.
          </h2>
          <p className="mt-3 text-[#4A4A4A] text-[15px] leading-relaxed">
            Word of mouth is the only marketing Razan does. If she&apos;s
            taken care of you, a 30-second Google review means everything.
          </p>
          <a
            href={SPA.googleWriteReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0E4F4A] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#1A6F68] transition-colors shadow-md shadow-[#0E4F4A]/20"
          >
            <Star size={16} />
            Leave a Google review
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 bg-[#F8F1EC]">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-display text-[30px] sm:text-[36px] font-black leading-tight">
            Want stories like these?
          </h2>
          <p className="mt-3 text-[#4A4A4A] text-[15px] leading-relaxed">
            Book your first treatment with Razan.
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
