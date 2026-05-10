"use client";

import { useRef, useState } from "react";

type ViewMode = "before" | "after" | "split";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  /** Used for alt text and ARIA labels */
  label: string;
};

/**
 * Home signature cards: full before, full after, or draggable split view.
 * Buttons below match the requested Before / After / Split pattern.
 */
export default function TreatmentPhotoToggle({
  beforeSrc,
  afterSrc,
  label,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<ViewMode>("split");
  const [pct, setPct] = useState(50);
  const [dragging, setDragging] = useState(false);

  function selectMode(next: ViewMode) {
    setDragging(false);
    if (next === "split") setPct(50);
    setMode(next);
  }

  function setFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.max(0, Math.min(100, next)));
  }

  const tabs: { id: ViewMode; text: string }[] = [
    { id: "before", text: "Before" },
    { id: "after", text: "After" },
    { id: "split", text: "Split" },
  ];

  return (
    <div className="flex flex-col">
      <div
        className={`relative aspect-[4/3] overflow-hidden bg-[#0E4F4A] ${
          mode === "split" ? "select-none touch-none" : ""
        }`}
        ref={mode === "split" ? containerRef : undefined}
        onMouseDown={
          mode === "split"
            ? (e) => {
                setDragging(true);
                setFromClientX(e.clientX);
              }
            : undefined
        }
        onMouseMove={
          mode === "split"
            ? (e) => {
                if (!dragging) return;
                setFromClientX(e.clientX);
              }
            : undefined
        }
        onMouseUp={mode === "split" ? () => setDragging(false) : undefined}
        onMouseLeave={mode === "split" ? () => setDragging(false) : undefined}
        onTouchStart={
          mode === "split"
            ? (e) => {
                setDragging(true);
                setFromClientX(e.touches[0].clientX);
              }
            : undefined
        }
        onTouchMove={
          mode === "split"
            ? (e) => {
                if (!dragging) return;
                setFromClientX(e.touches[0].clientX);
              }
            : undefined
        }
        onTouchEnd={mode === "split" ? () => setDragging(false) : undefined}
      >
        {mode === "before" && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={beforeSrc}
            alt={`${label} — before`}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        )}
        {mode === "after" && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={afterSrc}
            alt={`${label} — after`}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        )}
        {mode === "split" && (
          <>
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={afterSrc}
                alt={`${label} — after / comparison`}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
            </div>
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pct}%` }}
              aria-hidden
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={beforeSrc}
                alt=""
                className="absolute inset-0 h-full object-cover"
                style={{
                  width: `${(100 / Math.max(pct, 0.25)) * 100}%`,
                  maxWidth: "none",
                }}
                draggable={false}
              />
            </div>
            <div
              className="absolute inset-y-0 w-0.5 bg-white/95 shadow-[0_0_12px_rgba(0,0,0,0.35)] pointer-events-none"
              style={{ left: `calc(${pct}% - 1px)` }}
              aria-hidden
            />
            <div
              role="slider"
              aria-label={`Before and after comparison for ${label}`}
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
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white text-[#0E4F4A] shadow-lg ring-2 ring-[#C9A66A] cursor-grab active:cursor-grabbing focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C9A66A] z-10"
              style={{ left: `${pct}%` }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M9 6 L4 12 L9 18 Z" />
                <path d="M15 6 L20 12 L15 18 Z" />
              </svg>
            </div>
          </>
        )}
      </div>

      <div
        className="flex mt-3 gap-1.5 p-1 rounded-full bg-[#E5EFEC] ring-1 ring-[#0E4F4A]/10"
        role="tablist"
        aria-label={`Photo view for ${label}`}
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={mode === t.id}
            onClick={() => selectMode(t.id)}
            className={`flex-1 rounded-full py-2 px-2 text-[11px] font-bold tracking-[0.12em] uppercase transition-colors ${
              mode === t.id
                ? "bg-[#0E4F4A] text-white shadow-sm"
                : "text-[#1A1A1A]/70 hover:text-[#0E4F4A]"
            }`}
          >
            {t.text}
          </button>
        ))}
      </div>
    </div>
  );
}
