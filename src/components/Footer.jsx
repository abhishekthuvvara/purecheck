import { REPORT_URL } from "../data/foods.js";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
      <p>PureCheck is for awareness only and is not affiliated with FSSAI.</p>
      <p className="mt-1">
        <a className="underline" href={REPORT_URL} target="_blank" rel="noopener noreferrer">Report adulteration to FSSAI</a>
      </p>
    </footer>
  );
}
