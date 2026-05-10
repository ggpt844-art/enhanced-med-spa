"use client";

import { useEffect, useRef, useState } from "react";

/** Bump when replacing `public/videos/hero.mp4` so phones drop stale cache. */
const MP4_CACHE_KEY = 4;

/** Bump when replacing the hero poster image so phones drop stale cache. */
const POSTER_CACHE_KEY = 1;

/** Drop a weak / duplicate opening (~12–15f at 30fps). */
const TRIM_START_SEC = 0.48;

type Props = {
  src: string;
  poster: string;
  className?: string;
};

function cacheBustUrl(url: string, key: number) {
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}cb=${key}`;
}

/**
 * Full-bleed hero video with trimmed loop window.
 * Mobile: poster `<img>` on top of `<video>` (same z-index, later in DOM) until first `seeked` so t=0 / cache flash doesn’t show.
 */
export default function HeroBackgroundVideo({ src, poster, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const pendingPlay = useRef<"initial" | "loop" | null>(null);
  const started = useRef(false);
  const trimReadyRef = useRef(false);
  const [trimReady, setTrimReady] = useState(false);

  const videoSrc = cacheBustUrl(src, MP4_CACHE_KEY);
  const posterSrc = cacheBustUrl(poster, POSTER_CACHE_KEY);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onSeeked = () => {
      if (!trimReadyRef.current) {
        trimReadyRef.current = true;
        setTrimReady(true);
      }
      if (!pendingPlay.current) return;
      pendingPlay.current = null;
      if (!reduce) void video.play();
    };

    /** Wait until frames exist — `loadedmetadata` alone often breaks seeks on iPhone. */
    const begin = () => {
      if (started.current) return;
      started.current = true;

      if (reduce) {
        video.pause();
        video.currentTime = TRIM_START_SEC;
        return;
      }

      pendingPlay.current = "initial";
      video.currentTime = TRIM_START_SEC;
    };

    const onEnded = () => {
      if (reduce) return;
      pendingPlay.current = "loop";
      video.currentTime = TRIM_START_SEC;
    };

    video.addEventListener("seeked", onSeeked);
    video.addEventListener("canplay", begin, { once: true });

    if (video.readyState >= 3) {
      begin();
    }

    const fallbackPlay = window.setTimeout(() => {
      if (reduce) return;
      if (!started.current) begin();
      if (video.paused) {
        if (video.currentTime < TRIM_START_SEC - 0.01) {
          video.currentTime = TRIM_START_SEC;
        }
        void video.play();
      }
    }, 600);

    video.addEventListener("ended", onEnded);

    return () => {
      window.clearTimeout(fallbackPlay);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("canplay", begin);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <>
      {/* Video first in DOM: with shared `z-0`, poster `<img>` below paints on top and hides decode/seek flash (iOS). */}
      <video
        ref={ref}
        muted
        playsInline
        preload="auto"
        className={`${className} transition-opacity duration-200 ease-out ${trimReady ? "opacity-100" : "opacity-0"}`}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <img
        src={posterSrc}
        alt=""
        aria-hidden
        className={`${className} transition-opacity duration-200 ease-out pointer-events-none ${trimReady ? "opacity-0" : "opacity-100"}`}
        decoding="async"
      />
    </>
  );
}
