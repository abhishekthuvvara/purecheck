import ResourceLinks from "../components/ResourceLinks.jsx";
import Disclaimer from "../components/Disclaimer.jsx";
import { foods } from "../data/foods.js";

export default function Resources() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Official food-safety resources</h1>
      <p className="text-slate-600 dark:text-slate-300">Use these official sources for guidance, laboratory testing and to report concerns.</p>
      <ResourceLinks resources={foods[0].resources} />
      <Disclaimer />
    </div>
  );
}
