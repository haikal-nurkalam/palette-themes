import { useMemo, useState } from "react";
import { THEMES } from "../data/themes.js";
import ThemeCard from "../components/ThemeCard.jsx";
import FilterBar from "../components/FilterBar.jsx";
import SiteHeader from "../components/SiteHeader.jsx";
import SiteFooter from "../components/SiteFooter.jsx";

export default function Gallery() {
  const [vibe, setVibe] = useState("All");
  const [mode, setMode] = useState("light");

  const filtered = useMemo(
    () => (vibe === "All" ? THEMES : THEMES.filter((t) => t.vibe === vibe)),
    [vibe]
  );

  return (
    <>
      <SiteHeader />
      <main className="shell">
        <section className="py-16 md:py-24">
          <p className="eyebrow">Color systems for dashboards</p>
          <h1 className="mt-4 max-w-prose text-display">
            Curated palettes, mapped to real interface roles.
          </h1>
          <p className="mt-6 max-w-prose text-body text-ink-soft">
            Eighteen hand-built themes. Each one ships a light and dark pair with the same
            semantic tokens, previewed on a live dashboard, and ready to paste as CSS
            variables, Tailwind config, or JSON.
          </p>
        </section>

        <FilterBar vibe={vibe} onVibe={setVibe} mode={mode} onMode={setMode} />

        <section className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-2">
          {filtered.map((theme) => (
            <ThemeCard key={theme.slug} theme={theme} mode={mode} />
          ))}
        </section>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-body text-ink-faint">
            No themes in this vibe yet.
          </p>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
