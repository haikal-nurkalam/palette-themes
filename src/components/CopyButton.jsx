import { useState } from "react";

export default function CopyButton({ text, label = "Copy" }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="border border-line px-3 py-1.5 font-mono text-micro uppercase text-ink-soft transition-colors hover:border-ink hover:text-ink"
    >
      {copied ? "Copied" : label}
    </button>
  );
}
