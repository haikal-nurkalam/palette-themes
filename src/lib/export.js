import { TOKEN_KEYS, CHART_KEYS } from "../data/tokens.js";

const ORDER = [...TOKEN_KEYS, ...CHART_KEYS];

// accentInk -> accent-ink, chart1 -> chart-1
export function toKebab(key) {
  return key.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([a-zA-Z])(\d+)/g, "$1-$2").toLowerCase();
}

export function toCssVars(theme, mode) {
  const tokens = theme[mode];
  const lines = ORDER.map((key) => `  --${toKebab(key)}: ${tokens[key]};`);
  return `:root {\n${lines.join("\n")}\n}`;
}

export function toTailwindConfig(theme, mode) {
  const tokens = theme[mode];
  const lines = ORDER.map((key) => `        ${key}: "${tokens[key]}",`);
  return [
    "// tailwind.config.js",
    "export default {",
    "  theme: {",
    "    extend: {",
    "      colors: {",
    ...lines,
    "      },",
    "    },",
    "  },",
    "};",
  ].join("\n");
}

export function toJson(theme) {
  return JSON.stringify(
    {
      slug: theme.slug,
      name: theme.name,
      vibe: theme.vibe,
      light: theme.light,
      dark: theme.dark,
    },
    null,
    2
  );
}
