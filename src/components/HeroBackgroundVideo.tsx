"use client";

import { useEffect, useRef } from "react";

/** Drop a weak / duplicate opening (~12–15f at 30fps). */
const TRIM_START_SEC = 0.48;
/** Jump back before the true EOF to avoid encoder tail / last-frame mismatch vs. loop start. */
const LOOP_TAIL_SEC = 0.16;

type Props = {
  src: string;
  poster: string;
  className?: string;
};

/**
 * Full-bleed hero video with a trimmed loop window (no native `loop` — we seek).
 */
export default function HeroBackgroundVideo({ src, poster, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const pendingPlay = useRef<"initial" | "loop" | null>(null);
  const metadataHandled = useRef(false);
  const loopArm = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onSeeked = () => {
      loopArm.current = false;
      if (!pendingPlay.current) return;
      pendingPlay.current = null;
      if (!reduce) void video.play();
    };

    const onLoadedMetadata = () => {
      if (metadataHandled.current) return;
      metadataHandled.current = true;

      if (reduce) {
        video.pause();
        video.currentTime = TRIM_START_SEC;
        return;
      }
      pendingPlay.current = "initial";
      video.currentTime = TRIM_START_SEC;
    };

    /** Snap back slightly before the file ends so the jump lines up cleaner than `ended`. */
    const onTimeUpdate = () => {
      if (reduce || !video.duration || loopArm.current) return;
      const loopBackAt = video.duration - LOOP_TAIL_SEC;
      if (loopBackAt <= TRIM_START_SEC + 0.2) return;
      if (video.currentTime >= loopBackAt) {
        loopArm.current = true;
        pendingPlay.current = "loop";
        video.currentTime = TRIM_START_SEC;
      }
    };

    const onEnded = () => {
      if (reduce || loopArm.current) return;
      pendingPlay.current = "loop";
      video.currentTime = TRIM_START_SEC;
    };

    video.addEventListener("seeked", onSeeked);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);

    if (video.readyState >= 1) {
      onLoadedMetadata();
    }

    return () => {
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <video
      ref={ref}
      muted
      playsInline
      preload="auto"
      poster={poster}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
