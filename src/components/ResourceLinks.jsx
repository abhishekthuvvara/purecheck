import { ExternalLink } from "lucide-react";

export default function ResourceLinks({ resources }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {resources.map((r) => (
        <li key={r.url}>
          <a href={r.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium hover:border-emerald-500 dark:border-slate-700 dark:bg-slate-800">
            {r.label}
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
