"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, RotateCcw, Sparkles, Calendar } from "lucide-react";
import type { Treatment } from "@/lib/content";
import { treatments } from "@/lib/content";

type Step = {
  q: string;
  options: { label: string; tag: string }[];
};

const STEPS: Step[] = [
  {
    q: "What's your skin telling you right now?",
    options: [
      { label: "Dull, tired, dehydrated", tag: "glow" },
      { label: "Active breakouts or congestion", tag: "acne" },
      { label: "Texture, fine lines, dryness", tag: "texture" },
      { label: "I just need a reset / event prep", tag: "event" },
    ],
  },
  {
    q: "How often do you treat your skin in-clinic?",
    options: [
      { label: "Never — this would be my first time", tag: "first" },
      { label: "Once or twice a year", tag: "casual" },
      { label: "I have a regular routine", tag: "regular" },
    ],
  },
  {
    q: "What outcome matters most to you?",
    options: [
      { label: "Fast, visible glow for an event", tag: "fast" },
      { label: "Long-term skin health & clarity", tag: "longterm" },
      { label: "Pampering and downtime", tag: "spa" },
    ],
  },
];

/**
 * Maps quiz answers to a recommended treatment slug. Simple and transparent —
 * no AI, no tracking, just "if you said X, here's what fits."
 */
function recommend(tags: string[]): Treatment {
  const slug =
    tags.includes("acne")
      ? "acne-reset"
      : tags.includes("event") || tags.includes("fast")
      ? "signature-hydrabrasion"
      : tags.includes("texture")
      ? "dermaplaning-glow"
      : tags.includes("first")
      ? "consult"
      : "custom-medi-facial";
  return (
    treatments.find((t) => t.slug === slug) ??
    (treatments.find((t) => t.slug === "custom-medi-facial") as Treatment)
  );
}

export default function SkinQuiz() {
  const [step, setStep] = useState<number>(-1);
  const [answers, setAnswers] = useState<string[]>([]);

  const choose = (tag: string) => {
    setAnswers((prev) => [...prev, tag]);
    setStep((s) => s + 1);
  };

  const reset = () => {
    setStep(-1);
    setAnswers([]);
  };

  if (step === -1) {
    return (
      <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-sm p-7 max-w-md mx-auto text-center">
        <span className="grid place-items-center w-12 h-12 mx-auto mb-4 rounded-full bg-[#E5EFEC] text-[#0E4F4A]">
          <Sparkles size={20} />
        </span>
        <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
          30-second skin quiz
        </p>
        <h3 className="font-display text-[26px] font-black leading-tight text-[#1A1A1A]">
          What does <span className="italic text-[#0E4F4A]">your</span> skin need?
        </h3>
        <p className="mt-3 text-[#4A4A4A] text-[15px] leading-relaxed">
          Three quick questions and we&apos;ll match you to the right treatment
          to start with.
        </p>
        <button
          type="button"
          onClick={() => setStep(0)}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#0E4F4A] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#1A6F68] transition-colors shadow-md shadow-[#0E4F4A]/20"
        >
          Start <ChevronRight size={16} />
        </button>
        <Link
          href="/book"
          className="block mt-4 text-[#0E4F4A] text-sm font-semibold underline-offset-4 hover:underline"
        >
          Or skip · book on Calendly
        </Link>
      </div>
    );
  }

  if (step >= STEPS.length) {
    const rec = recommend(answers);
    return (
      <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-sm p-7 max-w-md mx-auto text-center">
        <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
          Your match
        </p>
        <h3 className="font-display text-[28px] font-black leading-tight text-[#1A1A1A]">
          {rec.name}
        </h3>
        <p className="mt-3 italic text-[#0E4F4A] font-semibold">{rec.pitch}</p>
        <p className="mt-3 text-[#4A4A4A] text-[14.5px] leading-relaxed">
          {rec.blurb}
        </p>
        <p className="mt-4 text-[#1A1A1A] text-[14px]">
          <span className="font-bold">{rec.duration}</span>
          {rec.priceFrom > 0 && (
            <>
              <span className="mx-2 text-[#4A4A4A]/40">·</span>
              <span className="font-bold">From ${rec.priceFrom}</span>
            </>
          )}
        </p>
        <Link
          href="/book"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#0E4F4A] text-white px-7 py-4 font-bold text-base hover:bg-[#1A6F68] transition-colors shadow-md shadow-[#0E4F4A]/20 w-full"
        >
          <Calendar size={18} />
          Book {rec.name}
        </Link>
        <button
          type="button"
          onClick={reset}
          className="mt-4 inline-flex items-center gap-1.5 text-[#4A4A4A] text-sm font-semibold hover:text-[#0E4F4A] transition-colors"
        >
          <RotateCcw size={13} /> Start over
        </button>
      </div>
    );
  }

  const current = STEPS[step];
  return (
    <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-sm p-7 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-5 gap-4">
        <span className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold">
          Step {step + 1} of {STEPS.length}
        </span>
        <Link
          href="/book"
          className="inline-flex items-center gap-1 text-[#0E4F4A] text-xs font-bold underline-offset-4 hover:underline whitespace-nowrap"
        >
          Skip · book directly
        </Link>
      </div>

      <div className="h-1.5 w-full rounded-full bg-[#E5EFEC] overflow-hidden mb-6">
        <div
          className="h-full bg-[#0E4F4A] transition-all duration-500"
          style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          aria-hidden
        />
      </div>

      <h3 className="font-display text-[22px] sm:text-[24px] font-black leading-tight text-[#1A1A1A]">
        {current.q}
      </h3>
      <ul className="mt-5 flex flex-col gap-2.5">
        {current.options.map((option) => (
          <li key={option.label}>
            <button
              type="button"
              onClick={() => choose(option.tag)}
              className="w-full text-left rounded-2xl bg-[#F8F1EC] hover:bg-[#0E4F4A] hover:text-white ring-1 ring-black/5 hover:ring-[#0E4F4A] px-5 py-4 text-[15px] font-semibold text-[#1A1A1A] transition-colors"
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
