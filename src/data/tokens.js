// The shape of every theme. Order here drives order in the UI.
export const TOKEN_GROUPS = [
  {
    label: "Surfaces",
    tokens: [
      { key: "surface", label: "Surface", hint: "Page background" },
      { key: "raised", label: "Raised", hint: "Cards, panels" },
      { key: "border", label: "Border", hint: "Dividers, outlines" },
    ],
  },
  {
    label: "Content",
    tokens: [
      { key: "text", label: "Text", hint: "Primary text" },
      { key: "muted", label: "Muted", hint: "Secondary text" },
      { key: "accent", label: "Accent", hint: "Primary action" },
      { key: "accentInk", label: "Accent ink", hint: "Text on accent" },
    ],
  },
  {
    label: "Status",
    tokens: [
      { key: "positive", label: "Positive", hint: "Up, success" },
      { key: "negative", label: "Negative", hint: "Down, error" },
      { key: "warning", label: "Warning", hint: "Caution" },
    ],
  },
];

// Flat list of the 10 semantic token keys, in display order.
export const TOKEN_KEYS = TOKEN_GROUPS.flatMap((g) => g.tokens.map((t) => t.key));

// Chart series is separate from semantic tokens.
export const CHART_KEYS = ["chart1", "chart2", "chart3", "chart4", "chart5", "chart6", "chart7", "chart8"];

// Every key that must exist in a theme's token object.
export const ALL_KEYS = [...TOKEN_KEYS, ...CHART_KEYS];

export const VIBES = ["Minimal", "Editorial", "Vibrant", "Technical", "Warm", "Cool"];
