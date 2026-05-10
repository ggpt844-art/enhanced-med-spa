"use client";

import { useRef, useState } from "react";
import Placeholder from "./Placeholder";

type Props = {
  /** Optional image URLs. If omitted, branded placeholders render. */
  beforeSrc?: string;
  afterSrc?: string;
  treatment: string;
  note?: string;
  className?: string;
};

/**
 * Drag-handle before/after slider. Mouse, touch, and keyboard accessible.
 * The single highest-converting element on a med-spa site (per the
 * sources I researched) — used on /, /results, and individual treatment
 * sections.
 */
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  treatment,
  note,
  className = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const [dragging, setDragging] = useState(false);

  function setFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.max(0, Math.min(100, next)));
  }

  return (
    <figure
      className={`relative rounded-[28px] overflow-hidden ring-1 ring-black/5 shadow-xl bg-[#0E4F4A] ${className}`}
    >
      <div
        ref={containerRef}
        className="relative aspect-[4/5] sm:aspect-[4/3] select-none touch-none"
        onMouseDown={(e) => {
          setDragging(true);
          setFromClientX(e.clientX);
        }}
        onMouseMove={(e) => {
          if (!dragging) return;
          setFromClientX(e.clientX);
        }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchStart={(e) => {
          setDragging(true);
          setFromClientX(e.touches[0].clientX);
        }}
        onTouchMove={(e) => {
          if (!dragging) return;
          setFromClientX(e.touches[0].clientX);
        }}
        onTouchEnd={() => setDragging(false)}
      >
        {/* AFTER (full background) */}
        <div className="absolute inset-0">
          {afterSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={afterSrc}
              alt={`${treatment} — after`}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          ) : (
            <Placeholder
              label={`After · ${treatment}`}
              caption="Drop the AFTER image here"
              variant="spa"
              className="h-full"
            />
          )}
          <span className="absolute bottom-3 right-3 rounded-full bg-white/95 text-[#0E4F4A] px-3 py-1 text-[11px] font-bold tracking-[0.18em] uppercase shadow">
            After
          </span>
        </div>

        {/* BEFORE (clipped to slider) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pct}%` }}
          aria-hidden
        >
          {beforeSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={beforeSrc}
              alt={`${treatment} — before`}
              className="absolute inset-0 h-full object-cover"
              style={{ width: `${(100 / pct) * 100}%`, maxWidth: "none" }}
              draggable={false}
            />
          ) : (
            <Placeholder
              label={`Before · ${treatment}`}
              caption="Drop the BEFORE image here"
              variant="blush"
              className="h-full"
            />
          )}
          <span className="absolute bottom-3 left-3 rounded-full bg-white/95 text-[#1A1A1A] px-3 py-1 text-[11px] font-bold tracking-[0.18em] uppercase shadow">
            Before
          </span>
        </div>

        {/* Drag handle line */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white/95 shadow-[0_0_12px_rgba(0,0,0,0.35)] pointer-events-none"
          style={{ left: `calc(${pct}% - 1px)` }}
          aria-hidden
        />
        {/* Drag handle puck (also keyboard) */}
        <div
          role="slider"
          aria-label={`Reveal slider for ${treatment}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pct)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPct((p) => Math.max(0, p - 5));
            if (e.key === "ArrowRight") setPct((p) => Math.min(100, p + 5));
            if (e.key === "Home") setPct(0);
            if (e.key === "End") setPct(100);
          }}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-12 h-12 rounded-full bg-white text-[#0E4F4A] shadow-lg ring-2 ring-[#C9A66A] cursor-grab active:cursor-grabbing focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C9A66A]"
          style={{ left: `${pct}%` }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M9 6 L4 12 L9 18 Z" />
            <path d="M15 6 L20 12 L15 18 Z" />
          </svg>
        </div>
      </div>
      <figcaption className="px-5 py-4 bg-white">
        <p className="font-bold text-[14px] text-[#1A1A1A]">{treatment}</p>
        {note && (
          <p className="mt-1 text-[12.5px] text-[#4A4A4A] leading-relaxed">
            {note}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
