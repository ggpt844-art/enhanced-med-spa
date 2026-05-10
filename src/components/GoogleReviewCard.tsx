import { Star } from "lucide-react";

type Props = {
  name: string;
  initial: string;
  date: string;
  body: string;
  /** Google review star rating 1–5 (defaults to 5 for legacy cards). */
  rating?: number;
  reviewCount?: number;
  localGuide?: boolean;
  avatarColor?: string;
};

export default function GoogleReviewCard({
  name,
  initial,
  date,
  body,
  rating = 5,
  reviewCount,
  localGuide = false,
  avatarColor = "#0E4F4A",
}: Props) {
  const clamped = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <figure className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
      <header className="flex items-center gap-3 mb-3">
        <span
          className="grid place-items-center w-11 h-11 rounded-full text-white font-bold text-[16px] shrink-0"
          style={{ backgroundColor: avatarColor }}
          aria-hidden
        >
          {initial}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-[15px] text-[#1A1A1A] truncate">
              {name}
            </span>
            {localGuide && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1a73e8] bg-[#e8f0fe] px-1.5 py-0.5 rounded">
                Local Guide
              </span>
            )}
          </div>
          <div className="text-[12px] text-[#5f6368] flex items-center gap-1.5">
            {reviewCount && <span>{reviewCount} reviews</span>}
            {reviewCount && <span aria-hidden>·</span>}
            <span>{date}</span>
          </div>
        </div>
        {/* Google G */}
        <svg width="20" height="20" viewBox="0 0 32 32" aria-label="Posted on Google">
          <path
            fill="#4285F4"
            d="M30 16.3c0-1.1-.1-2.1-.3-3.1H16v5.9h7.9c-.3 1.8-1.4 3.4-3 4.4v3.7h4.8c2.8-2.6 4.3-6.4 4.3-10.9z"
          />
          <path
            fill="#34A853"
            d="M16 30c4 0 7.4-1.3 9.8-3.6l-4.8-3.7c-1.3.9-3 1.4-5 1.4-3.8 0-7.1-2.6-8.3-6.1H2.7v3.8C5.2 26.7 10.2 30 16 30z"
          />
          <path
            fill="#FBBC04"
            d="M7.7 18c-.3-.9-.5-1.9-.5-2.9s.2-2 .5-2.9V8.5H2.7C1.6 10.7 1 13.2 1 16s.6 5.3 1.7 7.5L7.7 18z"
          />
          <path
            fill="#EA4335"
            d="M16 6.6c2.2 0 4.1.8 5.7 2.2l4.2-4.2C23.4 2.3 20 1 16 1 10.2 1 5.2 4.3 2.7 9.1l5 3.8C8.9 9.2 12.2 6.6 16 6.6z"
          />
        </svg>
      </header>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < clamped ? "#fbbc04" : "#e8eaed"}
            stroke="none"
            className={i < clamped ? "text-[#fbbc04]" : "text-[#e8eaed]"}
          />
        ))}
      </div>
      <blockquote className="text-[#1A1A1A] text-[15px] leading-relaxed">
        {body}
      </blockquote>
    </figure>
  );
}
