import { team } from "../data/team.js";

// Project members. Photos have feathered edges (transparent PNGs) so they
// fade into the soft gradient glow behind each one.
export default function Team() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Meet the CSP project team</h1>
      <p className="mx-auto mt-2 max-w-xl text-center text-slate-600 dark:text-slate-300">
        The people behind PureCheck.
      </p>
      <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {team.map((m) => (
          <li key={m.id} className="text-center">
            <div className="relative mx-auto aspect-square w-full max-w-[200px]">
              {/* soft glow behind the photo */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-emerald-300/50 to-sky-300/40 blur-2xl dark:from-emerald-500/30 dark:to-sky-500/20" aria-hidden="true" />
              <img src={m.photo} alt={`Photo of ${m.name}`} loading="lazy" className="relative h-full w-full object-contain" />
            </div>
            <h2 className="mt-2 font-semibold">{m.name}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">{m.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
