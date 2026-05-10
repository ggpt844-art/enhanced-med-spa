import Link from "next/link";
import { Clock, ChevronRight } from "lucide-react";
import Placeholder from "./Placeholder";
import TreatmentPhotoToggle from "./TreatmentPhotoToggle";
import type { Treatment } from "@/lib/content";

type Props = {
  treatment: Treatment;
  /** Pass `featured` to enlarge the card on the home page. */
  featured?: boolean;
  /**
   * Home signature grid only: real before/after crops + Before / After / Split
   * control when `treatment.homeResultPair` is set.
   */
  showHomeResultPair?: boolean;
};

function hasHomeResultPair(
  t: Treatment,
): t is Treatment & {
  homeResultPair: { beforeSrc: string; afterSrc: string };
} {
  return (
    "homeResultPair" in t &&
    t.homeResultPair != null &&
    typeof t.homeResultPair.beforeSrc === "string" &&
    typeof t.homeResultPair.afterSrc === "string"
  );
}

export default function TreatmentCard({
  treatment,
  featured = false,
  showHomeResultPair = false,
}: Props) {
  const priceLabel =
    treatment.priceFrom === 0
      ? "Free with first booking"
      : `From $${treatment.priceFrom}`;

  return (
    <article
      id={treatment.slug}
      className="group rounded-3xl overflow-hidden bg-white ring-1 ring-black/5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full flex flex-col scroll-mt-24"
    >
      {showHomeResultPair && hasHomeResultPair(treatment) ? (
        <TreatmentPhotoToggle
          beforeSrc={treatment.homeResultPair.beforeSrc}
          afterSrc={treatment.homeResultPair.afterSrc}
          label={treatment.name}
        />
      ) : (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Placeholder
            label={treatment.name}
            caption={treatment.pitch}
            variant={
              featured ? "spa" : treatment.category === "Body" ? "blush" : "champagne"
            }
            className="h-full"
          />
        </div>
      )}      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-[#C9A66A] text-[10.5px] tracking-[0.22em] uppercase font-bold mb-2">
          <span>{treatment.category}</span>
          <span aria-hidden className="opacity-40">·</span>
          <span className="inline-flex items-center gap-1 text-[#0E4F4A]">
            <Clock size={11} />
            {treatment.duration}
          </span>
        </div>
        <h3 className="font-display text-[22px] font-black leading-tight text-[#1A1A1A]">
          {treatment.name}
        </h3>
        <p className="mt-2 italic text-[#0E4F4A] text-[14px] font-semibold leading-snug">
          {treatment.pitch}
        </p>
        <p className="mt-3 text-[#4A4A4A] text-[14px] leading-relaxed flex-1">
          {treatment.blurb}
        </p>

        {treatment.bestFor && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {treatment.bestFor.map((tag) => (
              <li
                key={tag}
                className="text-[11px] font-semibold text-[#0E4F4A] bg-[#E5EFEC] rounded-full px-2.5 py-1"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 pt-5 border-t border-black/5 flex items-center justify-between gap-3">
          <p className="font-display text-[20px] font-black text-[#0E4F4A]">
            {priceLabel}
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0E4F4A] text-white px-4 py-2 font-bold text-[13px] hover:bg-[#1A6F68] transition-colors"
          >
            Book
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
