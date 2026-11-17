import { useState } from "react";
import { ChevronDown } from "lucide-react";
import RiskAlert from "./RiskAlert.jsx";
import { SAFETY_WARNING } from "../data/foods.js";

// Accordion of home tests; every panel starts with the safety warning
export default function TestGuide({ tests }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {tests.map((t, i) => {
        const isOpen = open === i;
        return (
          <div key={t.title} className="rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
            <h3>
              <button id={`test-btn-${i}`} aria-expanded={isOpen} aria-controls={`test-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-2 p-4 text-left font-medium">
                <span>{t.title} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">(for {t.adulterant})</span></span>
                <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
            </h3>
            {isOpen && (
              <div id={`test-panel-${i}`} role="region" aria-labelledby={`test-btn-${i}`} className="space-y-4 px-4 pb-4">
                <RiskAlert level="danger" title="Safety first">{SAFETY_WARNING}</RiskAlert>
                <ol className="list-decimal space-y-1 pl-5 text-sm">
                  {t.steps.map((s) => <li key={s}>{s}</li>)}
                </ol>
                <p className="text-sm"><strong>What you may see:</strong> {t.whatYouSee}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300"><strong>Note:</strong> {t.safetyNote}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
