"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone } from "lucide-react";

type Props = {
  toEmail: string;
  phoneDisplay: string;
  phone: string;
};

/**
 * No-backend contact form. On submit, opens the user's email client with a
 * pre-filled mailto: so Razan receives the message until a real form
 * backend is wired (Resend, Formspree, etc.).
 */
export default function ContactForm({ toEmail, phoneDisplay, phone }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneVal, setPhoneVal] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New website enquiry from ${name || "a client"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phoneVal}\n\nMessage:\n${message}\n\n— Sent from enhancedaesthetics.ca`
    );
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-white ring-1 ring-black/5 p-8 text-center shadow-sm">
        <span className="grid place-items-center w-14 h-14 mx-auto mb-4 rounded-full bg-[#0E4F4A]/10 text-[#0E4F4A]">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="font-display text-[22px] font-black leading-tight">
          Your email is opening.
        </h3>
        <p className="mt-3 text-[#4A4A4A] text-[14.5px] leading-relaxed">
          If nothing pops up, message Razan on Instagram or call directly —
          fastest by phone.
        </p>
        <a
          href={`tel:${phone}`}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0E4F4A] text-white px-6 py-3 font-bold text-sm hover:bg-[#1A6F68] transition-colors"
        >
          <Phone size={15} />
          {phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white ring-1 ring-black/5 p-6 sm:p-8 shadow-sm flex flex-col gap-4"
    >
      <Field
        label="Your name"
        required
        type="text"
        autoComplete="name"
        value={name}
        onChange={setName}
      />
      <Field
        label="Email"
        required
        type="email"
        autoComplete="email"
        value={email}
        onChange={setEmail}
      />
      <Field
        label="Phone (optional)"
        type="tel"
        autoComplete="tel"
        value={phoneVal}
        onChange={setPhoneVal}
      />
      <label className="flex flex-col gap-1.5">
        <span className="text-[12.5px] font-semibold text-[#1A1A1A]">
          Your message
        </span>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell Razan about your skin goals, ask a question, or request a custom plan…"
          className="rounded-xl border border-black/15 bg-[#F8F1EC] px-3.5 py-3 text-[15px] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#0E4F4A] focus:border-transparent transition resize-y min-h-[120px]"
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#0E4F4A] text-white px-7 py-4 font-bold text-[15px] hover:bg-[#1A6F68] transition-colors shadow-md shadow-[#0E4F4A]/20"
      >
        <Send size={16} />
        Send Message
      </button>
      <p className="text-[12px] text-[#4A4A4A] text-center">
        Razan replies within one business day. For faster help, call{" "}
        <a
          href={`tel:${phone}`}
          className="text-[#0E4F4A] font-semibold hover:underline"
        >
          {phoneDisplay}
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  type,
  autoComplete,
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  type: "text" | "email" | "tel";
  autoComplete?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12.5px] font-semibold text-[#1A1A1A]">
        {label}
        {required && <span className="text-[#0E4F4A] ml-0.5">*</span>}
      </span>
      <input
        required={required}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-black/15 bg-[#F8F1EC] px-3.5 py-3 text-[15px] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#0E4F4A] focus:border-transparent transition"
      />
    </label>
  );
}
