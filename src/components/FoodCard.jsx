import { Link } from "react-router-dom";
import {
  Milk, Droplets, Sprout, Flame, Soup, Bean, Utensils, ArrowRight,
  Box, Candy, Snowflake, Leaf, Coffee, Droplet, Wheat, Flower2,
} from "lucide-react";

// Maps the icon name in the food data to the actual icon component
const ICONS = {
  Milk, Droplets, Sprout, Flame, Soup, Bean,
  Box, Candy, Snowflake, Leaf, Coffee, Droplet, Wheat, Flower2,
};

export default function FoodCard({ food }) {
  const Icon = ICONS[food.icon] || Utensils;
  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
      <h3 className="mt-3 text-lg font-semibold">{food.name}</h3>
      <p className="mt-1 flex-1 text-sm text-slate-600 dark:text-slate-300">{food.summary}</p>
      <Link to={`/food/${food.id}`} aria-label={`Learn more about ${food.name}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-400">
        Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}