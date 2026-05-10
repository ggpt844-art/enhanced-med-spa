"use client";

import { useState } from "react";
import { ChevronRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <form
        className="flex flex-col sm:flex-row gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        aria-label="Subscribe to journal updates"
      >
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          required
          disabled={submitted}
          placeholder="you@email.com"
          className="flex-1 rounded-full bg-white border border-black/10 px-5 py-3.5 text-[15px] text-[#1A1A1A] placeholder:text-[#4A4A4A]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4F4A] disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={submitted}
          className="rounded-full bg-[#0E4F4A] text-white px-6 py-3.5 font-bold text-[14px] hover:bg-[#1A6F68] transition-colors inline-flex items-center justify-center gap-2 disabled:bg-[#C9A66A] disabled:text-[#1A1A1A]"
        >
          {submitted ? (
            <>
              <Check size={16} />
              You&apos;re in
            </>
          ) : (
            <>
              Notify Me
              <ChevronRight size={16} />
            </>
          )}
        </button>
      </form>
      <p className="mt-3 text-[12px] text-[#4A4A4A]/80">
        {submitted
          ? "We'll send you the next journal post the moment it goes live."
          : "Skin tips and the rare studio promo. No spam — unsubscribe anytime."}
      </p>
    </>
  );
}
