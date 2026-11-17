import { CheckCircle2, XCircle } from "lucide-react";

function Card({ title, items, tone, Icon }) {
  return (
    <section className={`rounded-xl border p-5 ${tone}`}>
      <h3 className="flex items-center gap-2 font-semibold"><Icon className="h-5 w-5" aria-hidden="true" />{title}</h3>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">{items.map((x) => <li key={x}>{x}</li>)}</ul>
    </section>
  );
}

export default function ComparisonCards({ comparison }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card title="Pure" items={comparison.pure} Icon={CheckCircle2}
        tone="border-green-300 bg-green-50 text-green-950 dark:border-green-700 dark:bg-green-950/40 dark:text-green-100" />
      <Card title="Possibly adulterated" items={comparison.adulterated} Icon={XCircle}
        tone="border-red-300 bg-red-50 text-red-950 dark:border-red-700 dark:bg-red-950/40 dark:text-red-100" />
    </div>
  );
}
