import { Star, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import GoogleReviewCard from "@/components/GoogleReviewCard";
import { SPA } from "@/lib/spa";
import { loadReviewsForSite } from "@/lib/reviewsDisplay";

/**
 * Home page review wall — prefers live Google Places reviews (server fetch).
 */
export default async function HomeReviewsSection() {
  const { rating, userRatingsTotal, fromGoogle, reviews } =
    await loadReviewsForSite(6);

  return (
    <section id="reviews" className="px-5 py-20 bg-[#F8F1EC]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
          Patient Stories
        </p>
        <h2 className="font-display text-[40px] sm:text-[52px] font-black leading-[1.02] tracking-tight">
          What women <span className="italic text-[#0E4F4A]">say</span>.
        </h2>
        <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-white ring-1 ring-black/10 px-4 py-2 shadow-sm">
          <div className="flex gap-0.5 text-[#fbbc04]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" stroke="none" />
            ))}
          </div>
          <span className="text-[13px] font-bold text-[#1A1A1A]">
            {rating} on Google
          </span>
          <span className="text-[12px] text-[#4A4A4A]">
            · {userRatingsTotal}+ reviews
          </span>
        </div>
        {fromGoogle && (
          <p className="mt-4 text-[12.5px] text-[#5f6368] max-w-md mx-auto leading-relaxed">
            Showing recent public reviews from Google.{" "}
            <a
              href={SPA.googleMapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0E4F4A] font-semibold underline underline-offset-2"
            >
              Read more on Maps
            </a>
            .
          </p>
        )}
      </div>

      <div className="mt-10 max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((r, i) => (
          <Reveal key={r.key} delay={i * 100}>
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
        <div className="mt-10 max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
          <a
            href={SPA.googleMapsPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-[#1A1A1A] text-white px-5 py-4 flex items-center justify-between gap-4 hover:bg-[#0E4F4A] transition-colors min-h-[3.5rem]"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-[#1A1A1A] shrink-0">
                <Star size={16} fill="currentColor" />
              </span>
              <span className="font-bold text-[15px] text-left leading-snug">
                Read all {userRatingsTotal}+ on Google
              </span>
            </span>
            <ChevronRight size={18} className="shrink-0" />
          </a>
          <a
            href={SPA.googleWriteReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white text-[#0E4F4A] ring-1 ring-[#0E4F4A]/20 shadow-sm px-5 py-4 flex items-center justify-between gap-4 hover:bg-[#0E4F4A]/[0.06] hover:ring-[#0E4F4A]/35 transition-colors min-h-[3.5rem]"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-[#0E4F4A]/10 text-[#0E4F4A] shrink-0">
                <Star size={16} fill="currentColor" />
              </span>
              <span className="font-bold text-[15px] text-left leading-snug">
                Leave a review
              </span>
            </span>
            <ChevronRight size={18} className="shrink-0" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
