import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock, ChevronRight, Calendar } from "lucide-react";
import { SPA, NAV_LINKS } from "@/lib/spa";
import { hours } from "@/lib/content";
import { InstagramIcon, GoogleIcon, FreshaIcon } from "./SocialIcons";
import LeafMark from "./LeafMark";
import Reveal from "./Reveal";

/**
 * Dark deep-teal footer. Contact rows, Google Maps embed, working hours,
 * socials, secondary nav, copyright.
 */
export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="px-5 pt-20 pb-10 bg-[#0a3a36] text-white"
    >
      <div className="max-w-md mx-auto">
        <Reveal>
          <div className="text-center mb-10">
            <p className="text-[#E7D4A9] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Visit the Studio
            </p>
            <h2 className="font-display text-[34px] sm:text-[40px] font-black leading-[1.05] tracking-tight">
              We&apos;d love to <span className="italic text-[#E8C4BD]">meet you.</span>
            </h2>
          </div>
        </Reveal>

        {/* Contact rows */}
        <div className="flex flex-col gap-3">
          <a
            href={`tel:${SPA.phone}`}
            className="flex items-center gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/10 transition-colors"
          >
            <span className="grid place-items-center w-11 h-11 rounded-full bg-[#0E4F4A] ring-1 ring-[#C9A66A]/30">
              <Phone size={18} />
            </span>
            <div>
              <div className="text-white/65 text-[11px] uppercase tracking-[0.18em] font-bold">
                Phone
              </div>
              <div className="font-semibold">{SPA.phoneDisplay}</div>
            </div>
          </a>
          <a
            href={`https://wa.me/${SPA.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/10 transition-colors"
          >
            <span className="grid place-items-center w-11 h-11 rounded-full bg-[#25d366]">
              <MessageCircle size={18} />
            </span>
            <div>
              <div className="text-white/65 text-[11px] uppercase tracking-[0.18em] font-bold">
                WhatsApp
              </div>
              <div className="font-semibold">Message Razan directly</div>
            </div>
          </a>
          <a
            href={`mailto:${SPA.email}`}
            className="flex items-center gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/10 transition-colors"
          >
            <span className="grid place-items-center w-11 h-11 rounded-full bg-[#C9A66A] text-[#1A1A1A]">
              <Mail size={18} />
            </span>
            <div>
              <div className="text-white/65 text-[11px] uppercase tracking-[0.18em] font-bold">
                Email
              </div>
              <div className="font-semibold">{SPA.email}</div>
            </div>
          </a>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(SPA.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/10 transition-colors"
          >
            <span className="grid place-items-center w-11 h-11 rounded-full bg-[#0E4F4A] ring-1 ring-[#C9A66A]/30">
              <MapPin size={18} />
            </span>
            <div>
              <div className="text-white/65 text-[11px] uppercase tracking-[0.18em] font-bold">
                Studio
              </div>
              <div className="font-semibold leading-tight">
                {SPA.address.line1}
                <br />
                <span className="text-white/85 text-sm font-normal">
                  {SPA.address.line2}
                </span>
                <br />
                <span className="text-white/70 text-[12px] font-normal block mt-1.5">
                  {SPA.landmark} · Address shared after booking
                </span>
              </div>
            </div>
            <ChevronRight size={18} className="ml-auto text-white/65 self-center" />
          </a>
        </div>

        {/* Map embed */}
        <Reveal>
          <div className="mt-5 rounded-3xl overflow-hidden ring-1 ring-white/10 bg-[#222] aspect-[4/3] relative">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(SPA.mapsQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              title={`${SPA.name} — Mississauga, ON`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#C9A66A]/15 rounded-3xl" />
          </div>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(SPA.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-[#E7D4A9] text-sm font-semibold hover:gap-2 hover:text-white transition-all"
          >
            Get directions
            <ChevronRight size={16} />
          </a>
        </Reveal>

        {/* Hours */}
        <div className="mt-8 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
          <div className="flex items-center gap-2 mb-4 text-[#E7D4A9]">
            <Clock size={16} />
            <h3 className="font-bold uppercase tracking-[0.18em] text-[11px]">
              Studio Hours
            </h3>
          </div>
          <ul className="flex flex-col gap-2.5">
            {hours.map((h) => (
              <li
                key={h.day}
                className="flex items-center justify-between text-[14px]"
              >
                <span className="text-white/85">{h.day}</span>
                <span className="font-semibold text-white">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-white/60 text-[12px] leading-relaxed">
            Same hours, every day — by appointment only. Book on Fresha to
            secure your time.
          </p>
        </div>

        {/* Socials */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={SPA.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid place-items-center w-11 h-11 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-gradient-to-tr hover:from-[#C9A66A] hover:to-[#E8C4BD] hover:text-[#1A1A1A] transition-all"
          >
            <InstagramIcon />
          </a>
          <a
            href={SPA.social.fresha}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fresha booking"
            className="grid place-items-center w-11 h-11 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-[#C9A66A] hover:text-[#1A1A1A] transition-colors"
          >
            <FreshaIcon />
          </a>
          <a
            href={SPA.social.google}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google reviews"
            className="grid place-items-center w-11 h-11 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-[#C9A66A] hover:text-[#1A1A1A] transition-colors"
          >
            <GoogleIcon />
          </a>
        </div>

        {/* Secondary CTA */}
        <Link
          href="/book"
          className="mt-10 rounded-full bg-[#C9A66A] text-[#1A1A1A] px-6 py-4 font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-[#E7D4A9] transition-colors"
        >
          <Calendar size={16} />
          Book Your Glow
        </Link>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col items-center gap-4">
          <LeafMark size={36} withWordmark inverted />
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-white/65 text-[12.5px]">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-white/55 text-[11.5px] text-center">
            © {new Date().getFullYear()} {SPA.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
