import { Search } from "lucide-react";

// Controlled search input; parent filters the list
export default function SearchBar({ value, onChange }) {
  return (
    <div role="search" className="relative mx-auto max-w-xl">
      <label htmlFor="food-search" className="sr-only">Search by food name or adulterant</label>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" aria-hidden="true" />
      <input id="food-search" type="search" value={value} onChange={(e) => onChange(e.target.value)}
        placeholder="Search a food or adulterant, e.g. “starch”"
        className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-3 text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-white" />
    </div>
  );
}
