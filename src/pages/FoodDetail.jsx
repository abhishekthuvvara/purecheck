import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getFood } from "../data/foods.js";
import AdulterantList from "../components/AdulterantList.jsx";
import RiskAlert, { levelFor } from "../components/RiskAlert.jsx";
import TestGuide from "../components/TestGuide.jsx";
import ComparisonCards from "../components/ComparisonCards.jsx";
import ResourceLinks from "../components/ResourceLinks.jsx";
import Disclaimer from "../components/Disclaimer.jsx";
import NotFound from "./NotFound.jsx";

const H2 = "mb-3 text-xl font-semibold";

export default function FoodDetail() {
  const { foodId } = useParams();
  const food = getFood(foodId);
  if (!food) return <NotFound />;

  return (
    <div className="space-y-10">
      <header>
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-emerald-700 hover:underline dark:text-emerald-400">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All foods
        </Link>
        <h1 className="mt-3 text-3xl font-bold">{food.name}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{food.summary}</p>
      </header>

      <section aria-labelledby="adulterants"><h2 id="adulterants" className={H2}>Common adulterants</h2>
        <AdulterantList adulterants={food.adulterants} /></section>

      <section aria-labelledby="risks"><h2 id="risks" className={H2}>Possible health risks</h2>
        <div className="space-y-3">
          {food.healthRisks.map((r) => (
            <RiskAlert key={r.risk} level={levelFor[r.severity]} title={r.risk}>{r.cause}</RiskAlert>
          ))}
        </div></section>

      <section aria-labelledby="tests"><h2 id="tests" className={H2}>Home-check guidance</h2>
        <TestGuide tests={food.homeTests} /></section>

      <section aria-labelledby="compare"><h2 id="compare" className={H2}>Pure vs adulterated</h2>
        <ComparisonCards comparison={food.comparison} /></section>

      <section aria-labelledby="res"><h2 id="res" className={H2}>Official resources</h2>
        <ResourceLinks resources={food.resources} /></section>

      <Disclaimer />
    </div>
  );
}
