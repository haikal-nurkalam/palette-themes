import { describe, it, expect } from "vitest";
import { THEMES } from "./themes.js";
import { ALL_KEYS } from "./tokens.js";

describe("theme data", () => {
  it("has exactly 18 themes", () => {
    expect(THEMES).toHaveLength(18);
  });

  it("has unique slugs", () => {
    const slugs = THEMES.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every theme has a name, vibe, and both modes", () => {
    for (const t of THEMES) {
      expect(typeof t.name).toBe("string");
      expect(t.name.length).toBeGreaterThan(0);
      expect(typeof t.vibe).toBe("string");
      expect(t.light).toBeTruthy();
      expect(t.dark).toBeTruthy();
    }
  });

  it("every theme defines all token keys in both modes", () => {
    for (const t of THEMES) {
      for (const mode of ["light", "dark"]) {
        for (const key of ALL_KEYS) {
          const value = t[mode][key];
          expect(value, `${t.slug}.${mode}.${key}`).toMatch(/^#[0-9A-Fa-f]{6}$/);
        }
      }
    }
  });
});
