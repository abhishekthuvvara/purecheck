import { levelFor } from "./RiskAlert.jsx";

const CHIP = {
  caution: "bg-yellow-100 text-yellow-900 dark:bg-yellow-900/50 dark:text-yellow-100",
  warning: "bg-orange-100 text-orange-900 dark:bg-orange-900/50 dark:text-orange-100",
  danger: "bg-red-100 text-red-900 dark:bg-red-900/50 dark:text-red-100",
};

// Chips with severity text (not colour alone) and a short description
export default function AdulterantList({ adulterants }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {adulterants.map((a) => (
        <li key={a.name} className="rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
          <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${CHIP[levelFor[a.severity]]}`}>
            {a.name} · {a.severity} concern
          </span>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{a.description}</p>
        </li>
      ))}
    </ul>
  );
}
