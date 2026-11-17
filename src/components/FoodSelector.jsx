import { useNavigate } from "react-router-dom";
import FoodCard from "./FoodCard.jsx";
import { SearchX } from "lucide-react";

// Dropdown (jump straight to a food) + grid of cards
export default function FoodSelector({ foods, allFoods, query }) {
  const navigate = useNavigate();
  return (
    <section aria-labelledby="select-heading" className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="select-heading" className="text-xl font-semibold">Choose a food</h2>
        <div>
          <label htmlFor="food-select" className="sr-only">Select a food</label>
          <select id="food-select" defaultValue="" onChange={(e) => e.target.value && navigate(`/food/${e.target.value}`)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800">
            <option value="" disabled>Select a food…</option>
            {allFoods.map((f) => <option key={f.id} value={f.id}>{f.name}</option>)}
          </select>
        </div>
      </div>

      {foods.length === 0 ? (
        // Empty state
        <div role="status" className="mt-8 rounded-xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-600">
          <SearchX className="mx-auto h-10 w-10 text-slate-400" aria-hidden="true" />
          <p className="mt-3 font-medium">No results for “{query}”</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">Try a food such as milk, or an adulterant such as starch.</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {foods.map((f) => <FoodCard key={f.id} food={f} />)}
        </div>
      )}
    </section>
  );
}
