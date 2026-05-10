import { Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import { SPA, SITE_URL } from "@/lib/spa";

type Props = {
  className?: string;
};

/** Inline Calendly scheduling (official embed params). */
function calendlyEmbedSrc(): string {
  const host = new URL(SITE_URL).hostname;
  const q = new URLSearchParams({
    embed_domain: host,
    embed_type: "Inline",
    primary_color: "0e4f4a",
  });
  const base = SPA.calendlyUrl.replace(/\/$/, "");
  return `${base}?${q.toString()}`;
}

export default function CalendlyEmbed({ className = "" }: Props) {
  const src = calendlyEmbedSrc();
  return (
    <div
      className={`relative rounded-[28px] bg-white ring-1 ring-black/5 shadow-xl overflow-hidden ${className}`}
    >
      <div className="bg-[#0E4F4A] text-white px-5 py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-white/15 ring-1 ring-white/20">
            <Calendar size={16} />
          </span>
          <div className="leading-tight">
            <p className="font-display text-[16px] font-bold">Book on Calendly</p>
            <p className="text-white/75 text-[11.5px] tracking-wide">
              Pick a time · Instant confirmation
            </p>
          </div>
        </div>
        <a
          href={SPA.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#C9A66A] text-[#1A1A1A] px-3.5 py-1.5 text-[12px] font-bold hover:bg-[#E7D4A9] transition-colors"
        >
          New tab
          <ExternalLink size={12} />
        </a>
      </div>

      <div className="relative bg-[#F8F1EC] min-h-[520px]">
        <iframe
          src={src}
          title={`Book ${SPA.name} on Calendly`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full border-0"
          style={{ height: "min(80vh, 900px)" }}
        />
      </div>

      <div className="px-5 py-4 bg-white border-t border-black/5 flex items-start gap-3 text-[13px] text-[#4A4A4A]">
        <ShieldCheck size={18} className="text-[#0E4F4A] shrink-0 mt-0.5" />
        <p>
          Booking through Calendly holds your time. Payment is taken at the
          studio at the end of your session — debit, credit, e-transfer, or
          cash. The studio address is shared after you book.
        </p>
      </div>
    </div>
  );
}
