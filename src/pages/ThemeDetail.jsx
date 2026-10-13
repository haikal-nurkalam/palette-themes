import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { THEMES } from "../data/themes.js";
import DashboardPreview from "../components/DashboardPreview.jsx";
import TokenTable from "../components/TokenTable.jsx";
import CodeTabs from "../components/CodeTabs.jsx";
import SiteHeader from "../components/SiteHeader.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import NotFound from "./NotFound.jsx";

export default function ThemeDetail() {
  const { slug } = useParams();
  const theme = THEMES.find((t) => t.slug === slug);
  const [mode, setMode] = useState("light");

  if (!theme) return <NotFound />;

  return (
    <>
      <SiteHeader />
      <main className="shell">
        <div className="py-8">
          <Link to="/" className="eyebrow text-ink-soft hover:text-ink">
            &larr; All themes
          </Link>
        </div>

        <header className="flex flex-wrap items-end gap-6 border-b border-line pb-8">
          <div>
            <p className="eyebrow">{theme.vibe}</p>
            <h1 className="mt-2 text-headline">{theme.name}</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {["light", "dark"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-3 py-1 text-small capitalize transition-colors ${
                  mode === m ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </header>

        <section className="py-10">
          <div className="eyebrow mb-4">Preview — {mode}</div>
          <DashboardPreview theme={theme} mode={mode} />
        </section>

        <section className="grid grid-cols-1 gap-12 py-10 lg:grid-cols-2">
          <div>
            <div className="eyebrow mb-6">Tokens</div>
            <TokenTable theme={theme} />
          </div>
          <div>
            <div className="eyebrow mb-6">Use it</div>
            <CodeTabs theme={theme} mode={mode} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
