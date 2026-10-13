import { TOKEN_KEYS, CHART_KEYS } from "../data/tokens.js";
import { toKebab } from "../lib/export.js";

// The preview consumes the same kebab-cased variables that toCssVars emits,
// so what you see here is exactly what you paste into a project.
function styleFor(theme, mode) {
  const tokens = theme[mode];
  const vars = {};
  for (const key of [...TOKEN_KEYS, ...CHART_KEYS]) {
    vars[`--${toKebab(key)}`] = tokens[key];
  }
  return vars;
}

export default function DashboardPreview({ theme, mode = "light", compact = false }) {
  return (
    <div
      className="overflow-hidden rounded-lg border"
      style={{
        ...styleFor(theme, mode),
        background: "var(--surface)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
    >
      <div className="flex" style={{ minHeight: compact ? 150 : 420 }}>
        <aside
          className="hidden sm:flex w-40 shrink-0 flex-col gap-1 p-3"
          style={{ background: "var(--raised)", borderRight: "1px solid var(--border)" }}
        >
          <div className="mb-2 flex items-center gap-2 px-1">
            <span className="h-3 w-3 rounded-sm" style={{ background: "var(--accent)" }} />
            <span className="text-[11px] font-semibold">Northwind</span>
          </div>
          {["Overview", "Revenue", "Customers", "Reports", "Settings"].map((item, i) => (
            <div
              key={item}
              className="rounded px-2 py-1 text-[11px]"
              style={
                i === 0
                  ? { background: "var(--accent)", color: "var(--accent-ink)", fontWeight: 600 }
                  : { color: "var(--muted)" }
              }
            >
              {item}
            </div>
          ))}
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header
            className="flex items-center gap-3 px-3 py-2"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span className="text-[11px] font-semibold">Overview</span>
            <span className="rounded-full px-2 py-0.5 text-[9px]" style={{ background: "var(--raised)", color: "var(--muted)", border: "1px solid var(--border)" }}>
              Last 30 days
            </span>
            <button
              className="ml-auto rounded px-2.5 py-1 text-[10px] font-medium"
              style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
            >
              Export
            </button>
          </header>

          <div className="grid grid-cols-3 gap-2 p-3">
            {[
              { k: "MRR", v: "$48.2k", d: "+12.4%", tone: "positive" },
              { k: "Churn", v: "2.1%", d: "-0.3%", tone: "negative" },
              { k: "Active", v: "8,410", d: "+3.1%", tone: "positive" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-md p-2"
                style={{ background: "var(--raised)", border: "1px solid var(--border)" }}
              >
                <div className="text-[9px] uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                  {s.k}
                </div>
                <div className="text-[17px] font-semibold leading-tight">{s.v}</div>
                <div className="text-[9px] font-medium" style={{ color: `var(--${s.tone})` }}>
                  {s.d}
                </div>
              </div>
            ))}
          </div>

          <div
            className="mx-3 rounded-md p-3"
            style={{ background: "var(--raised)", border: "1px solid var(--border)" }}
          >
            <div className="mb-2 text-[10px] font-medium" style={{ color: "var(--muted)" }}>
              Revenue vs target
            </div>
            <div className="flex items-end gap-1.5" style={{ height: compact ? 48 : 96 }}>
              {[
                [62, 50], [78, 66], [54, 60], [90, 72], [70, 84], [96, 88],
                [58, 64], [84, 76],
              ].map(([a, b], i) => (
                <div key={i} className="flex h-full flex-1 items-end gap-0.5">
                  <div className="flex-1 rounded-t-sm" style={{ height: `${a}%`, background: "var(--chart-1)" }} />
                  <div className="flex-1 rounded-t-sm" style={{ height: `${b}%`, background: "var(--chart-2)" }} />
                </div>
              ))}
            </div>
            <div className="mt-2 flex gap-3 text-[9px]" style={{ color: "var(--muted)" }}>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-sm" style={{ background: "var(--chart-1)" }} /> Revenue
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-sm" style={{ background: "var(--chart-2)" }} /> Target
              </span>
            </div>
          </div>

          <div
            className="m-3 mt-2 overflow-hidden rounded-md"
            style={{ border: "1px solid var(--border)" }}
          >
            <div
              className="grid grid-cols-3 px-3 py-1.5 text-[9px] uppercase tracking-wide"
              style={{ background: "var(--raised)", color: "var(--muted)", borderBottom: "1px solid var(--border)" }}
            >
              <span>Customer</span>
              <span>Plan</span>
              <span className="text-right">Status</span>
            </div>
            {[
              ["Acme Co", "Pro", "Active", "positive"],
              ["Globex", "Team", "Trial", "warning"],
              ["Initech", "Pro", "Failed", "negative"],
            ].map(([c, p, s, tone]) => (
              <div
                key={c}
                className="grid grid-cols-3 items-center px-3 py-1.5 text-[10px]"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <span className="font-medium">{c}</span>
                <span style={{ color: "var(--muted)" }}>{p}</span>
                <span className="text-right">
                  <span
                    className="rounded-full px-2 py-0.5 text-[9px] font-medium"
                    style={{ background: `color-mix(in srgb, var(--${tone}) 18%, transparent)`, color: `var(--${tone})` }}
                  >
                    {s}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div
            className="mx-3 mb-3 flex items-center gap-2 rounded-md px-3 py-2 text-[10px]"
            style={{ background: "var(--raised)", border: "1px solid var(--border)" }}
          >
            <span className="h-2 w-2 rounded-full" style={{ background: "var(--positive)" }} />
            <span>All systems operational</span>
            <span className="ml-auto" style={{ color: "var(--muted)" }}>just now</span>
          </div>
        </div>
      </div>
    </div>
  );
}
