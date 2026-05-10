"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, Calendar } from "lucide-react";
import LeafMark from "./LeafMark";
import { InstagramIcon } from "./SocialIcons";
import { NAV_LINKS_CHROME } from "@/lib/spa";

type Props = {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  igUrl: string;
};

export default function MobileMenu({ phone, phoneDisplay, whatsapp, igUrl }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="grid place-items-center w-11 h-11 rounded-full hover:bg-[#1A1A1A]/5 text-[#1A1A1A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4F4A] md:hidden"
      >
        <Menu size={26} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-[#F8F1EC] flex flex-col p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between mb-10">
            <LeafMark size={42} withWordmark />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid place-items-center w-11 h-11 rounded-full bg-[#1A1A1A]/5 hover:bg-[#1A1A1A]/10 text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4F4A]"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 flex-1">
            {NAV_LINKS_CHROME.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3.5 text-2xl font-display font-semibold border-b border-black/10 flex items-center justify-between transition-colors ${
                  link.label === "Book"
                    ? "text-[#0E4F4A] hover:text-[#1A6F68]"
                    : "text-[#1A1A1A]/90 hover:text-[#0E4F4A]"
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.label === "Book" ? <Calendar size={22} strokeWidth={2} /> : null}
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-2.5">
            <a
              href={`tel:${phone}`}
              onClick={() => setOpen(false)}
              className="rounded-full border border-[#0E4F4A]/20 text-[#0E4F4A] px-6 py-4 text-base font-bold flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              {phoneDisplay}
            </a>
            <div className="flex gap-2.5">
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-[#25d366] text-white px-4 py-3.5 text-sm font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href={igUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-gradient-to-tr from-[#C9A66A] to-[#E8C4BD] text-[#1A1A1A] px-4 py-3.5 text-sm font-bold flex items-center justify-center gap-2"
              >
                <InstagramIcon size={16} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
