import { Link } from "react-router-dom";
import DashboardPreview from "./DashboardPreview.jsx";
import { TOKEN_KEYS } from "../data/tokens.js";

export default function ThemeCard({ theme, mode }) {
  const t = theme[mode];
  return (
    <Link
      to={`/themes/${theme.slug}`}
      className="group block border border-line bg-white transition-colors duration-200 ease-editorial hover:border-ink"
    >
      <div className="p-3">
        <DashboardPreview theme={theme} mode={mode} compact />
      </div>
      <div className="flex items-center gap-3 border-t border-line px-4 py-3">
        <div className="min-w-0">
          <div className="truncate text-title">{theme.name}</div>
          <div className="eyebrow">{theme.vibe}</div>
        </div>
        <div className="ml-auto flex shrink-0 gap-1">
          {TOKEN_KEYS.slice(0, 5).map((k) => (
            <span
              key={k}
              className="h-3 w-3 rounded-full border border-line-strong"
              style={{ background: t[k] }}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
