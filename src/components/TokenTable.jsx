import { TOKEN_GROUPS, CHART_KEYS } from "../data/tokens.js";

function Row({ label, hint, light, dark }) {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-t border-line py-3">
      <div>
        <div className="text-body">{label}</div>
        {hint && <div className="text-small text-ink-faint">{hint}</div>}
      </div>
      <div className="flex items-center gap-2">
        <span className="h-5 w-5 rounded-sm border border-line-strong" style={{ background: light }} />
        <code className="font-mono text-small text-ink-soft">{light}</code>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-5 w-5 rounded-sm border border-line-strong" style={{ background: dark }} />
        <code className="font-mono text-small text-ink-soft">{dark}</code>
      </div>
    </div>
  );
}

export default function TokenTable({ theme }) {
  return (
    <div>
      <div className="grid grid-cols-[1fr_auto_auto] gap-4 pb-2">
        <span className="eyebrow">Token</span>
        <span className="eyebrow">Light</span>
        <span className="eyebrow">Dark</span>
      </div>

      {TOKEN_GROUPS.map((group) => (
        <div key={group.label} className="mb-6">
          <div className="eyebrow mb-2 text-ink-soft">{group.label}</div>
          {group.tokens.map((t) => (
            <Row
              key={t.key}
              label={t.label}
              hint={t.hint}
              light={theme.light[t.key]}
              dark={theme.dark[t.key]}
            />
          ))}
        </div>
      ))}

      <div className="mb-2 eyebrow text-ink-soft">Chart series</div>
      {CHART_KEYS.map((key, i) => (
        <Row
          key={key}
          label={`Series ${i + 1}`}
          light={theme.light[key]}
          dark={theme.dark[key]}
        />
      ))}
    </div>
  );
}
