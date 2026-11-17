import { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import FoodSelector from "../components/FoodSelector.jsx";
import { foods, filterFoods } from "../data/foods.js";

export default function Home() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => filterFoods(query), [query]);
  return (
    <>
      <section className="text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Know your food, calmly.</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          PureCheck shares educational information about common food adulterants in India. It is for awareness only and does not replace laboratory testing.
        </p>
        <div className="mt-6"><SearchBar value={query} onChange={setQuery} /></div>
      </section>
      <FoodSelector foods={results} allFoods={foods} query={query} />
    </>
  );
}
