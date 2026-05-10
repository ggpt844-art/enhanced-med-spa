type Props = {
  size?: number;
  className?: string;
  withWordmark?: boolean;
  inverted?: boolean;
};

/**
 * Enhanced Aesthetics brand mark — a stylized leaf inside a soft gradient
 * ring, echoing Razan's existing IG profile logo. Pure SVG so it scales
 * crisply at every size and never blocks LCP.
 */
export default function LeafMark({
  size = 36,
  className = "",
  withWordmark = false,
  inverted = false,
}: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="relative shrink-0 inline-block"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <svg
          viewBox="0 0 64 64"
          width={size}
          height={size}
          xmlns="http://www.w3.org/2000/svg"
          className="block"
        >
          <defs>
            <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0E4F4A" />
              <stop offset="55%" stopColor="#1A6F68" />
              <stop offset="100%" stopColor="#E8C4BD" />
            </linearGradient>
            <linearGradient id="leaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A6F68" />
              <stop offset="100%" stopColor="#0E4F4A" />
            </linearGradient>
          </defs>
          {/* Outer ring */}
          <circle
            cx="32"
            cy="32"
            r="29"
            fill="none"
            stroke="url(#ring-grad)"
            strokeWidth="2.5"
          />
          {/* Stylized leaf */}
          <path
            d="M32 14 C 22 22, 18 32, 24 46 C 36 44, 44 36, 42 22 C 38 19, 35 17, 32 14 Z"
            fill="url(#leaf-grad)"
          />
          {/* Vein */}
          <path
            d="M30 18 C 30 26, 28 34, 26 42"
            stroke="#F8F1EC"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
        </svg>
      </span>
      {withWordmark && (
        <span className="leading-[0.95] tracking-tight">
          <span
            className={`block font-display font-black text-[15px] ${
              inverted ? "text-white" : "text-[#1A1A1A]"
            }`}
          >
            ENHANCED
          </span>
          <span
            className={`block font-display italic text-[12px] ${
              inverted ? "text-[#E8C4BD]" : "text-[#0E4F4A]"
            }`}
          >
            aesthetics
          </span>
          <span
            className={`block text-[7.5px] tracking-[0.32em] font-bold mt-0.5 ${
              inverted ? "text-white/70" : "text-[#6B6B6B]"
            }`}
          >
            MEDI · SPA
          </span>
        </span>
      )}
    </span>
  );
}
