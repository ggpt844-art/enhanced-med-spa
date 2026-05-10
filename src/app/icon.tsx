import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0E4F4A, #1A6F68 60%, #E8C4BD)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: "-0.06em",
          borderRadius: 8,
          fontFamily: "Georgia, serif",
        }}
      >
        E
      </div>
    ),
    { ...size }
  );
}
