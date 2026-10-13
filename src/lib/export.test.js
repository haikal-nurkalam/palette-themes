import { describe, it, expect } from "vitest";
import { toCssVars, toTailwindConfig, toJson } from "./export.js";
import { THEMES } from "../data/themes.js";

const theme = THEMES[0]; // midnight-ops

describe("toCssVars", () => {
  it("emits kebab-cased custom properties with the mode's values", () => {
    const css = toCssVars(theme, "dark");
    expect(css).toContain("--surface: #0F1115;");
    expect(css).toContain("--accent-ink: #08111F;");
    expect(css).toContain("--chart-1: #4C8DFF;");
  });

  it("wraps output in a :root block", () => {
    const css = toCssVars(theme, "light");
    expect(css.trim().startsWith(":root {")).toBe(true);
    expect(css.trim().endsWith("}")).toBe(true);
  });
});

describe("toTailwindConfig", () => {
  it("emits camelCase color keys with quoted hex", () => {
    const cfg = toTailwindConfig(theme, "light");
    expect(cfg).toContain('accentInk: "#FFFFFF"');
    expect(cfg).toContain('surface: "#F4F5F7"');
  });
});

describe("toJson", () => {
  it("round-trips to an object with slug, name and both modes", () => {
    const parsed = JSON.parse(toJson(theme));
    expect(parsed.slug).toBe("midnight-ops");
    expect(parsed.name).toBe("Midnight Ops");
    expect(parsed.light.surface).toBe("#F4F5F7");
    expect(parsed.dark.surface).toBe("#0F1115");
  });
});
