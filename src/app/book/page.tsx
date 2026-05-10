import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import ContactForm from "@/components/ContactForm";
import { SPA, SITE_URL } from "@/lib/spa";

export const metadata: Metadata = {
  title: "Book on Calendly — Enhanced Aesthetics Medi Spa Mississauga",
  description:
    "Book your appointment with Razan at Enhanced Aesthetics Medi Spa in Mississauga. Pick a time on Calendly — most clients are seen within the week.",
  alternates: { canonical: `${SITE_URL}/book` },
};

export default function BookPage() {
  return (
    <main id="main" className="relative bg-[#F8F1EC] text-[#1A1A1A]">
      <FloatingNav phone={SPA.phone} />
      <StickyMobileCTA
        phone={SPA.phone}
        phoneDisplay={SPA.phoneDisplay}
        whatsapp={SPA.whatsapp}
      />

      {/* Header band */}
      <section className="relative bg-[#F8F1EC] overflow-hidden">
        <div
          aria-hidden
          className="drift-x pointer-events-none absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-[#0E4F4A] opacity-[0.07] blur-[120px]"
        />
        <SiteHeader />
        <div className="relative px-5 pt-6 pb-14 max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Book Your Glow
            </p>
            <h1 className="font-display text-[44px] sm:text-[60px] font-black leading-[1.02] tracking-tight">
              One tap.{" "}
              <span className="italic text-[#0E4F4A]">Real-time availability.</span>
            </h1>
            <p className="mt-5 text-[#4A4A4A] text-[16px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
              The studio is private and runs one client at a time, so we
              recommend booking your spot in advance. The full studio address
              is sent the moment your appointment is confirmed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Status badges */}
      <section className="bg-white border-y border-black/5 px-5 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-5 text-[13px] text-[#4A4A4A] flex-wrap">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#0E4F4A]">
            <Clock size={14} />
            Open 11:00 AM – 6:00 PM, every day
          </span>
          <span aria-hidden className="opacity-30">·</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} />
            Mississauga · Erin Mills
          </span>
        </div>
      </section>

      {/* Calendly embed */}
      <section className="px-5 py-16 bg-[#F8F1EC]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <CalendlyEmbed />
          </Reveal>
        </div>
      </section>

      {/* Backup channels */}
      <section className="px-5 py-16 bg-white border-y border-black/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Other Ways to Reach Razan
              </p>
              <h2 className="font-display text-[32px] sm:text-[40px] font-black leading-tight tracking-tight">
                Prefer to message first?
              </h2>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-3 gap-3">
            <li>
              <a
                href={`tel:${SPA.phone}`}
                className="block rounded-2xl bg-[#F8F1EC] ring-1 ring-black/5 p-5 hover:bg-[#E5EFEC] transition-colors h-full"
              >
                <span className="grid place-items-center w-11 h-11 rounded-full bg-[#0E4F4A] text-white mb-3">
                  <Phone size={18} />
                </span>
                <p className="font-display font-bold text-[18px]">Call</p>
                <p className="text-[#4A4A4A] text-[13.5px] mt-1">
                  {SPA.phoneDisplay}
                </p>
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${SPA.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl bg-[#F8F1EC] ring-1 ring-black/5 p-5 hover:bg-[#E5EFEC] transition-colors h-full"
              >
                <span className="grid place-items-center w-11 h-11 rounded-full bg-[#25d366] text-white mb-3">
                  <MessageCircle size={18} />
                </span>
                <p className="font-display font-bold text-[18px]">WhatsApp</p>
                <p className="text-[#4A4A4A] text-[13.5px] mt-1">
                  Razan replies same-day
                </p>
              </a>
            </li>
            <li>
              <a
                href={SPA.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl bg-[#F8F1EC] ring-1 ring-black/5 p-5 hover:bg-[#E5EFEC] transition-colors h-full"
              >
                <span className="grid place-items-center w-11 h-11 rounded-full bg-gradient-to-tr from-[#C9A66A] to-[#E8C4BD] text-[#1A1A1A] mb-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </span>
                <p className="font-display font-bold text-[18px]">Instagram</p>
                <p className="text-[#4A4A4A] text-[13.5px] mt-1">
                  {SPA.social.instagramHandle}
                </p>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact form */}
      <section className="px-5 py-20 bg-[#F8F1EC]">
        <div className="max-w-md mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Send a Message
              </p>
              <h2 className="font-display text-[30px] sm:text-[36px] font-black leading-tight tracking-tight">
                Got a <span className="italic text-[#0E4F4A]">question?</span>
              </h2>
              <p className="mt-3 text-[#4A4A4A] text-[14.5px] leading-relaxed">
                Tell Razan what your skin is doing and she&apos;ll point you
                to the right starting treatment.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <ContactForm
              toEmail={SPA.email}
              phoneDisplay={SPA.phoneDisplay}
              phone={SPA.phone}
            />
          </Reveal>
        </div>
      </section>

      {/* Cancel/policy band */}
      <section className="px-5 py-12 bg-white border-y border-black/5">
        <div className="max-w-3xl mx-auto rounded-2xl bg-[#E5EFEC] p-6 ring-1 ring-[#0E4F4A]/10 flex items-start gap-4">
          <span className="grid place-items-center w-11 h-11 rounded-full bg-[#0E4F4A] text-white shrink-0">
            <ShieldCheck size={18} />
          </span>
          <div>
            <h3 className="font-display font-bold text-[18px] mb-2">
              Cancellation policy
            </h3>
            <p className="text-[#4A4A4A] text-[14px] leading-relaxed">
              Please give 24 hours&apos; notice if you need to reschedule —
              the studio runs one client at a time, so a no-show means a full
              session is lost. Late cancellations may be charged 50% of the
              booking amount.
            </p>
            <Link
              href="/#faq"
              className="mt-3 inline-flex items-center gap-1.5 text-[#0E4F4A] text-[13px] font-bold hover:gap-2 transition-all"
            >
              See all FAQ
              <ChevronRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
