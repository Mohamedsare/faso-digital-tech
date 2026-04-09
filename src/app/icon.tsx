import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon généré : initiales FDT (FASODIGITAL …) */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0A121C 0%, #111B28 100%)",
          color: "#22D3EE",
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        FDT
      </div>
    ),
    {
      ...size,
    },
  );
}
