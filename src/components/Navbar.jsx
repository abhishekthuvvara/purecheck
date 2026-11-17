import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShieldCheck, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  // Toggle the Tailwind "dark" class and remember the choice
  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch (e) {}
    setDark(next);
  };

  const link = ({ isActive }) =>
    `rounded px-2 py-1 text-sm font-medium ${isActive ? "text-emerald-700 dark:text-emerald-400" : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"}`;

  return (
    <header className="border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
      <nav aria-label="Main" className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-emerald-700 dark:text-emerald-400">
          <ShieldCheck aria-hidden="true" /> PureCheck
        </Link>
        <div className="flex items-center gap-2">
          <NavLink to="/" end className={link}>Home</NavLink>
          <NavLink to="/resources" className={link}>Resources</NavLink>
          <NavLink to="/team" className={link}>Team</NavLink>
          <button onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
