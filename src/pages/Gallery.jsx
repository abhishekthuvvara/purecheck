import { useEffect, useState } from "react";
import { Camera, X } from "lucide-react";
import { gallery } from "../data/gallery.js";

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selected]);

  return (
    <div>
      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
          <Camera className="h-6 w-6" aria-hidden="true" />
        </div>
        <h1 className="mt-4 text-3xl font-bold">Project Gallery</h1>
        <p className="mx-auto mt-2 max-w-xl text-slate-600 dark:text-slate-300">
          Moments from our field visits, food checks, and community outreach.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-slate-700 dark:bg-slate-800"
            aria-label={`View ${item.title}`}
          >
            <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img
                src={item.photo}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close image viewer"
          >
            <X className="h-6 w-6" />
          </button>
          <figure
            className="max-h-[90vh] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selected.photo}
              alt={selected.title}
              className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-white">
              <strong>{selected.title}</strong>
              <span className="block text-sm text-slate-300">{selected.caption}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
