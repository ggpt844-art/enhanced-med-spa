"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import Placeholder from "./Placeholder";

type Props = {
  /** Video file URL. Optional — if omitted, we render the cinematic placeholder. */
  src?: string;
  /** Static fallback image while the video loads (or when missing). */
  poster?: string;
  className?: string;
  /**
   * Extra Tailwind for `<video />` framing under `object-cover` — e.g.
   * `object-[center_58%]` to bias the crop so on‑set signage stays clear of the header.
   */
  objectPositionClass?: string;
  /** Label rendered on the placeholder when no `src` is provided. */
  placeholderLabel?: string;
  placeholderCaption?: string;
};

/**
 * Hero video with a pause toggle and reduced-motion handling.
 * Until the cinematic edit is delivered, this component shows a
 * branded placeholder so the layout never breaks.
 */
export default function HeroVideo({
  src,
  poster,
  className = "",
  objectPositionClass = "",
  placeholderLabel = "Cinematic studio video",
  placeholderCaption = "Drop the final edit at /public/videos/hero.mp4",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => {
      setReduced(mq.matches);
      if (mq.matches && videoRef.current) {
        videoRef.current.pause();
        setPlaying(false);
      }
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  if (!src) {
    return (
      <div
        className={`relative min-h-[100dvh] w-full lg:min-h-[100svh] ${className}`}
      >
        <Placeholder
          label={placeholderLabel}
          caption={placeholderCaption}
          className="min-h-[100dvh] lg:min-h-[100svh]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative min-h-[100dvh] w-full lg:min-h-[100svh] ${className}`}
    >
      <video
        ref={videoRef}
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className={`absolute inset-0 w-full h-full object-cover ${objectPositionClass}`.trim()}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute top-4 right-4 z-20 grid place-items-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white ring-1 ring-white/15 hover:bg-black/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A66A]"
      >
        {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
      </button>
    </div>
  );
}
