"use client";

import "./styles/global/globals.css";

// Last resort: replaces the whole layout (fonts and header included) when the layout itself throws,
// so the font variables are set inline and everything else comes from the tokens in globals.css
export default function GlobalError({ reset }) {
  return (
    <html
      lang="en"
      style={{ "--font-sans": "system-ui", "--font-mono": "ui-monospace" }}
    >
      <body>
        <div className="shell">
          <h1
            style={{
              margin: "56px 0 0",
              fontSize: 36,
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
            }}
          >
            Something went wrong
          </h1>
          <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
            Sorry, this page could not be loaded.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 16,
              minHeight: 44,
              padding: 0,
              border: 0,
              background: "none",
              color: "var(--accent)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: 13.5,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
