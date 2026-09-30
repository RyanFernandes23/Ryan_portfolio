import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role} working on AI systems, agents, and backend infrastructure.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Rendered with Satori, which supports only a subset of CSS — every element
 * needs an explicit display and the layout is flexbox only.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 72,
          backgroundColor: "#07080a",
          backgroundImage:
            "linear-gradient(to right, #14161c 1px, transparent 1px), linear-gradient(to bottom, #14161c 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 12,
              height: 12,
              borderRadius: 3,
              backgroundColor: "#8aa0ff",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#eceef2",
              letterSpacing: "-0.01em",
            }}
          >
            {site.name}
          </div>
          <div style={{ display: "flex", flex: 1, height: 1, backgroundColor: "#1b1e25" }} />
          <div
            style={{
              display: "flex",
              fontSize: 19,
              color: "#5f6774",
              letterSpacing: "0.14em",
            }}
          >
            SOFTWARE ENGINEER
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.06,
              letterSpacing: "-0.035em",
              color: "#eceef2",
              maxWidth: 900,
            }}
          >
            I build AI systems that actually do things.
          </div>

          <div style={{ display: "flex", fontSize: 28, color: "#98a0ad", maxWidth: 860 }}>
            AI agents, machine learning, backend systems, and full-stack products.
          </div>
        </div>

        {/* Metrics + links */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 32,
            borderTop: "1px solid #1b1e25",
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", gap: 56 }}>
            {[
              ["55+", "screens"],
              ["98.2%", "routing"],
              ["<1s", "response"],
            ].map(([value, label]) => (
              <div
                key={label}
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 40,
                    color: "#eceef2",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 17,
                    color: "#5f6774",
                    letterSpacing: "0.1em",
                  }}
                >
                  {label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", fontSize: 22, color: "#5f6774" }}>
            github.com/RyanFernandes23
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
