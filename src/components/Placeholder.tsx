import { ImageIcon } from "lucide-react";

type Props = {
  label: string;
  caption?: string;
  className?: string;
  variant?: "spa" | "blush" | "champagne" | "ivory";
  /**
   * Aspect ratio (CSS): "1/1", "4/3", "4/5", "16/9", "9/16", etc.
   * If omitted, the parent's height is used (so the placeholder fills it).
   */
  aspect?: string;
};

const variants: Record<NonNullable<Props["variant"]>, string> = {
  spa: "placeholder-spa text-white",
  blush:
    "bg-gradient-to-br from-[#F4DFD9] via-[#E8C4BD] to-[#D9A8A0] text-[#1A1A1A]/80",
  champagne:
    "bg-gradient-to-br from-[#E7D4A9] via-[#C9A66A] to-[#9C7A39] text-[#1A1A1A]/80",
  ivory: "bg-gradient-to-br from-[#FDF8F3] via-[#F8F1EC] to-[#E5EFEC] text-[#0E4F4A]",
};

/**
 * A graceful, on-brand image placeholder that says exactly what should
 * eventually live here. Used everywhere we don't have a real photo yet.
 *
 * The labels are intentionally specific so the user knows what file to
 * drop in: e.g. "Cinematic studio hero". When real photos arrive, swap
 * each <Placeholder> for a Next/Image with the same dimensions.
 */
export default function Placeholder({
  label,
  caption,
  className = "",
  variant = "spa",
  aspect,
}: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden ${variants[variant]} ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
      role="img"
      aria-label={`Placeholder image: ${label}${caption ? ` — ${caption}` : ""}`}
    >
      {/* Subtle film-grain overlay */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
        }}
      />
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <span className="grid place-items-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/25 mb-3">
          <ImageIcon size={16} />
        </span>
        <p className="font-display text-[15px] sm:text-[17px] font-semibold tracking-tight leading-tight">
          {label}
        </p>
        {caption && (
          <p className="mt-1.5 text-[11px] sm:text-[12px] opacity-80 max-w-[28ch] leading-snug">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
