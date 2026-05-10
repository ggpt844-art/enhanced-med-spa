import { Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import { SPA } from "@/lib/spa";

type Props = {
  className?: string;
};

/**
 * Embedded Fresha booking widget with a clean fallback shell.
 *
 * Fresha doesn't currently expose a stable public iframe embed for every
 * venue, so we render the official venue page in an iframe and provide an
 * "open in new tab" fallback as a friction-free escape hatch. When Razan
 * shares the embed token from her Fresha dashboard, swap `src` to that URL.
 */
export default function FreshaEmbed({ className = "" }: Props) {
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
            <p className="font-display text-[16px] font-bold">
              Book on Fresha
            </p>
            <p className="text-white/75 text-[11.5px] tracking-wide">
              Real-time availability · Secure booking
            </p>
          </div>
        </div>
        <a
          href={SPA.freshaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#C9A66A] text-[#1A1A1A] px-3.5 py-1.5 text-[12px] font-bold hover:bg-[#E7D4A9] transition-colors"
        >
          New tab
          <ExternalLink size={12} />
        </a>
      </div>

      <div className="relative bg-[#F8F1EC]">
        <iframe
          src={SPA.freshaUrl}
          title={`Book ${SPA.name} on Fresha`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full border-0"
          style={{ height: "min(80vh, 900px)" }}
          allow="payment"
        />
      </div>

      <div className="px-5 py-4 bg-white border-t border-black/5 flex items-start gap-3 text-[13px] text-[#4A4A4A]">
        <ShieldCheck size={18} className="text-[#0E4F4A] shrink-0 mt-0.5" />
        <p>
          Booking through Fresha holds your spot instantly. Payment is taken at
          the studio at the end of your session — debit, credit, e-transfer, or
          cash. The studio address is shared after you book.
        </p>
      </div>
    </div>
  );
}
