import Link from "next/link";
import { Calendar } from "lucide-react";
import LeafMark from "./LeafMark";
import MobileMenu from "./MobileMenu";
import { SPA, NAV_LINKS } from "@/lib/spa";

/**
 * Shared header used on every page.
 * - Lives on ivory (light) backgrounds.
 * - Mobile nav lives in <MobileMenu>; desktop nav inline.
 * - Primary CTA always points to /book.
 */
export default function SiteHeader() {
  return (
    <header className="relative z-30 flex items-center justify-between gap-4 px-5 md:px-10 pt-5 pb-4">
      <Link
        href="/"
        aria-label={`${SPA.name} — home`}
        className="flex items-center gap-3"
      >
        <LeafMark size={42} withWordmark />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-[#1A1A1A]/75">
        {NAV_LINKS.filter((l) => l.label !== "Book").map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="hover:text-[#0E4F4A] transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <Link
          href="/book"
          className="hidden sm:inline-flex rounded-full bg-[#0E4F4A] text-white px-5 py-2.5 text-sm font-bold hover:bg-[#1A6F68] transition-colors items-center gap-2 shadow-md shadow-[#0E4F4A]/20"
        >
          <Calendar size={15} />
          Book Now
        </Link>
        <MobileMenu
          phone={SPA.phone}
          phoneDisplay={SPA.phoneDisplay}
          whatsapp={SPA.whatsapp}
          igUrl={SPA.social.instagram}
        />
      </div>
    </header>
  );
}
