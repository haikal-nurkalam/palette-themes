import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="shell flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex gap-1">
            <span className="h-3 w-3 rounded-full bg-ink" />
            <span className="h-3 w-3 rounded-full bg-ink-faint" />
            <span className="h-3 w-3 rounded-full border border-line-strong" />
          </span>
          <span className="text-small font-medium">Palette Themes</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="eyebrow text-ink-soft hover:text-ink">
            Gallery
          </Link>
        </nav>
      </div>
    </header>
  );
}
