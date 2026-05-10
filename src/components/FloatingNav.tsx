"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import LeafMark from "./LeafMark";

type Props = {
  phone: string;
};

/**
 * Compact pill nav that fades in after scroll. Always visible above the fold
 * is the SiteHeader; this kicks in once the user has committed to scrolling.
 */
export default function FloatingNav({ phone }: Props) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 top-3 z-40 w-[calc(100%-1.5rem)] max-w-2xl transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between gap-2 rounded-full border border-black/5 bg-white/95 backdrop-blur-md px-3 py-2 shadow-xl shadow-black/10">
        <Link
          href="/"
          aria-label="Enhanced Aesthetics — home"
          className="flex items-center gap-2 pl-1 pr-2 text-[#1A1A1A]"
        >
          <LeafMark size={26} />
          <span className="text-[13.5px] font-bold tracking-tight">Home</span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-[13px] font-semibold text-[#1A1A1A]/75 px-2">
          <Link href="/services" className="hover:text-[#0E4F4A] transition-colors">
            Services
          </Link>
          <Link href="/results" className="hover:text-[#0E4F4A] transition-colors">
            Results
          </Link>
          <Link href="/about" className="hover:text-[#0E4F4A] transition-colors">
            About
          </Link>
          <Link href="/reviews" className="hover:text-[#0E4F4A] transition-colors">
            Reviews
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${phone}`}
            className="grid place-items-center w-9 h-9 rounded-full border border-[#0E4F4A]/20 text-[#0E4F4A] hover:bg-[#0E4F4A]/5 transition-colors"
            aria-label="Call the studio"
          >
            <Phone size={14} />
          </a>
          <Link
            href="/book"
            className="rounded-full bg-[#0E4F4A] text-white px-3.5 py-1.5 text-[13px] font-bold hover:bg-[#1A6F68] transition-colors flex items-center gap-1.5"
          >
            <Calendar size={13} />
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}
