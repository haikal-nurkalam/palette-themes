import { useState } from "react";
import { toCssVars, toTailwindConfig, toJson } from "../lib/export.js";
import CopyButton from "./CopyButton.jsx";

export default function CodeTabs({ theme, mode }) {
  const [tab, setTab] = useState("css");

  const code = {
    css: toCssVars(theme, mode),
    tailwind: toTailwindConfig(theme, mode),
    json: toJson(theme),
  }[tab];

  const tabs = [
    { id: "css", label: "CSS variables" },
    { id: "tailwind", label: "Tailwind" },
    { id: "json", label: "JSON" },
  ];

  return (
    <div className="border border-line bg-white">
      <div className="flex items-center gap-1 border-b border-line px-3 py-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-1 text-small transition-colors ${
              tab === t.id ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
        <div className="ml-auto">
          <CopyButton text={code} />
        </div>
      </div>
      <pre className="max-h-96 overflow-auto p-4 font-mono text-small leading-relaxed text-ink-soft">
        <code>{code}</code>
      </pre>
    </div>
  );
}
