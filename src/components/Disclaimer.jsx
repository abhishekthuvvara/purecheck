import { Info } from "lucide-react";
import { REPORT_URL } from "../data/foods.js";

export default function Disclaimer() {
  return (
    <aside aria-label="Disclaimer" className="flex gap-3 rounded-lg border border-sky-300 bg-sky-50 p-4 text-sm text-sky-950 dark:border-sky-700 dark:bg-sky-950/40 dark:text-sky-100">
      <Info className="h-5 w-5 shrink-0" aria-hidden="true" />
      <p>
        Home tests are indicative only. For confirmation, use an FSSAI-notified/NABL-accredited laboratory or report to FSSAI.{" "}
        <a className="font-medium underline" href={REPORT_URL} target="_blank" rel="noopener noreferrer">Report adulteration</a>
      </p>
    </aside>
  );
}
