"use client";

import { useEffect, useRef } from "react";

/** Drop a weak / duplicate opening (~12–15f at 30fps). */
const TRIM_START_SEC = 0.48;

type Props = {
  src: string;
  poster: string;
  className?: string;
};

/**
 * Full-bleed hero video with trimmed loop window.
 * Mobile Safari is picky: seek only after data is buffered (`canplay`), loop via `ended` only.
 */
export default function HeroBackgroundVideo({ src, poster, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const pendingPlay = useRef<"initial" | "loop" | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onSeeked = () => {
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
    <video ref={ref} muted playsInline preload="auto" poster={poster} className={className}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
