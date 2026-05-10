"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FaqItem = { q: string; a: string };

type Props = {
  items: FaqItem[];
};

export default function FAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={item.q}
            className="rounded-2xl border border-[#1A1A1A]/10 bg-white overflow-hidden hover:border-[#0E4F4A]/30 transition-colors"
          >
            <button
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A66A] focus-visible:ring-inset"
              aria-expanded={isOpen}
            >
              <span className="text-[16.5px] md:text-[18px] font-semibold text-[#1A1A1A] leading-snug">
                {item.q}
              </span>
              <span
                className={`shrink-0 grid place-items-center w-9 h-9 rounded-full transition-colors ${
                  isOpen ? "bg-[#0E4F4A] text-white" : "bg-[#E5EFEC] text-[#0E4F4A]"
                }`}
                aria-hidden
              >
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] md:text-[16px] text-[#4A4A4A] leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
