import { VIBES } from "../data/tokens.js";

export default function FilterBar({ vibe, onVibe, mode, onMode }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-line py-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="eyebrow mr-1">Vibe</span>
        <button
          onClick={() => onVibe("All")}
          className={`px-3 py-1 text-small transition-colors ${
            vibe === "All" ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
          }`}
        >
          All
        </button>
        {VIBES.map((v) => (
          <button
            key={v}
            onClick={() => onVibe(v)}
            className={`px-3 py-1 text-small transition-colors ${
              vibe === v ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      <div className="ml-auto flex items-center gap-2">
        <span className="eyebrow mr-1">Preview</span>
        {["light", "dark"].map((m) => (
          <button
            key={m}
            onClick={() => onMode(m)}
            className={`px-3 py-1 text-small capitalize transition-colors ${
              mode === m ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
            }`}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}
