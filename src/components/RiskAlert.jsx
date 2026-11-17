import { Info, AlertTriangle, OctagonAlert } from "lucide-react";

// level: "caution" (yellow) | "warning" (orange) | "danger" (red)
const STYLES = {
  caution: { box: "border-yellow-400 bg-yellow-50 text-yellow-950 dark:bg-yellow-950/40 dark:text-yellow-100", Icon: Info, label: "Caution" },
  warning: { box: "border-orange-400 bg-orange-50 text-orange-950 dark:bg-orange-950/40 dark:text-orange-100", Icon: AlertTriangle, label: "Warning" },
  danger: { box: "border-red-500 bg-red-50 text-red-950 dark:bg-red-950/40 dark:text-red-100", Icon: OctagonAlert, label: "Danger" },
};

// Maps data severity to an alert level
export const levelFor = { low: "caution", medium: "warning", high: "danger" };

export default function RiskAlert({ level = "caution", title, children }) {
  const { box, Icon, label } = STYLES[level] || STYLES.caution;
  return (
    <div role="note" className={`flex gap-3 rounded-lg border-l-4 p-4 ${box}`}>
      <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <div>
        <p className="font-semibold"><span className="sr-only">{label}: </span>{title}</p>
        {children && <div className="mt-1 text-sm">{children}</div>}
      </div>
    </div>
  );
}
