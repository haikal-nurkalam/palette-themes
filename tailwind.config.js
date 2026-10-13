/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        ink: "#111110",
        "ink-soft": "#57534E",
        "ink-faint": "#A8A29E",
        line: "#E7E5E4",
        "line-strong": "#D6D3D1",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 7vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500" }],
        headline: ["clamp(1.75rem, 3.5vw, 3rem)", { lineHeight: "1.04", letterSpacing: "-0.03em", fontWeight: "500" }],
        title: ["1.375rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "500" }],
        body: ["0.9375rem", { lineHeight: "1.65" }],
        small: ["0.8125rem", { lineHeight: "1.5" }],
        micro: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.14em", fontWeight: "500" }],
      },
      maxWidth: {
        shell: "76rem",
        prose: "60ch",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
