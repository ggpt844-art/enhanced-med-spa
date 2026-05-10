import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Enhanced Aesthetics Medi Spa — Private Med Spa in Mississauga";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          background: "#0E4F4A",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blurs */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 480,
            height: 480,
            borderRadius: 999,
            background: "#E8C4BD",
            opacity: 0.45,
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -160,
            width: 460,
            height: 460,
            borderRadius: 999,
            background: "#C9A66A",
            opacity: 0.35,
            filter: "blur(90px)",
          }}
        />

        {/* Top brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, position: "relative" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background:
                "linear-gradient(135deg, #1A6F68, #0E4F4A 60%, #E8C4BD)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 900,
              letterSpacing: "-0.05em",
              fontFamily: "Georgia, serif",
            }}
          >
            E
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
            <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: "0.04em" }}>
              ENHANCED AESTHETICS
            </div>
            <div style={{ fontSize: 13, color: "#E7D4A9", fontWeight: 700, letterSpacing: "0.32em", marginTop: 4 }}>
              MEDI · SPA · MISSISSAUGA
            </div>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 26,
              color: "#E7D4A9",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            ★ 4.9 · 66+ Google Reviews
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: "white",
              fontFamily: "Georgia, serif",
            }}
          >
            Skin that <span style={{ color: "#E8C4BD", fontStyle: "italic" }}>glows.</span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.35,
              maxWidth: 950,
            }}
          >
            Private home studio · One client at a time · By Razan Shahrour, Para-Medical Skin Care Technician.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
