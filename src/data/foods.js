// Educational data only. Based on widely published FSSAI guidance (e.g. the DART booklet).
// Home tests are indicative, never conclusive.
import { moreFoods } from "./moreFoods.js";

export const REPORT_URL = "https://foscos.fssai.gov.in"; // Food Safety Connect / FoSCoS

export const SAFETY_WARNING =
  "Do not taste or swallow test samples. Use gloves. Keep away from children. Dispose of chemicals safely.";

const common = [
  { label: "FSSAI – Food Safety and Standards Authority of India", url: "https://www.fssai.gov.in" },
  { label: "Food Safety Connect / FoSCoS (report a concern)", url: "https://foscos.fssai.gov.in" },
  { label: "FSSAI DART booklet (rapid tests)", url: "https://www.fssai.gov.in/upload/uploadfiles/files/DART_Book.pdf" },
];

// `icon` is a lucide-react icon name, resolved in components/FoodCard.jsx
const baseFoods = [
  {
    id: "milk", name: "Milk", icon: "Milk",
    summary: "A daily staple that can be diluted or have additives mixed in.",
    adulterants: [
      { name: "Water", description: "Dilutes the milk and lowers its nutritional value.", severity: "low" },
      { name: "Starch", description: "Added to thicken diluted milk.", severity: "medium" },
      { name: "Detergent", description: "Sometimes added to give a frothy, creamy look.", severity: "high" },
    ],
    healthRisks: [
      { risk: "Stomach upset", cause: "Contaminated water or detergent residues may irritate the digestive system.", severity: "medium" },
      { risk: "Reduced nutrition", cause: "Dilution lowers protein and calcium per serving.", severity: "low" },
    ],
    homeTests: [
      { title: "Water dilution check", adulterant: "Water",
        steps: ["Place a drop of milk on a clean, polished, slanting surface.", "Watch how the drop moves."],
        whatYouSee: "Pure milk flows slowly and leaves a white trail. Diluted milk flows quickly with little or no trail.",
        safetyNote: "Indicative only. Wipe the surface clean afterwards." },
      { title: "Starch check", adulterant: "Starch",
        steps: ["Put about 5 ml of milk in a clean container.", "Add 2–3 drops of tincture iodine (adult handling only).", "Observe the colour."],
        whatYouSee: "A blue colour suggests starch may be present. No colour change suggests none was detected.",
        safetyNote: "Iodine stains and irritates skin. Discard the sample; never consume it." },
      { title: "Detergent check", adulterant: "Detergent",
        steps: ["Mix 5–10 ml of milk with an equal amount of water in a closed clean bottle.", "Shake well and let it stand."],
        whatYouSee: "Dense, lasting lather may suggest detergent. Pure milk gives only a thin, short-lived foam.",
        safetyNote: "Discard the sample after the check." },
    ],
    comparison: {
      pure: ["Flows slowly, leaves a white trail", "No blue colour with iodine", "Thin foam on shaking"],
      adulterated: ["Flows fast, little trail", "May turn blue with iodine (starch)", "Dense, lasting lather on shaking"],
    },
    resources: common,
  },
  {
    id: "honey", name: "Honey", icon: "Droplets",
    summary: "A natural sweetener that may be mixed with sugar syrups.",
    adulterants: [
      { name: "Sugar syrup", description: "Added to increase volume at lower cost.", severity: "medium" },
      { name: "Water", description: "Raises moisture, which can lead to spoilage.", severity: "low" },
    ],
    healthRisks: [
      { risk: "Added sugar intake", cause: "Syrups add sugar without honey's natural components.", severity: "medium" },
      { risk: "Spoilage", cause: "Extra moisture can allow fermentation.", severity: "low" },
    ],
    homeTests: [
      { title: "Water glass test", adulterant: "Sugar syrup",
        steps: ["Fill a glass with water.", "Gently add a spoonful of honey and do not stir."],
        whatYouSee: "Pure honey tends to settle as a lump. Adulterated honey tends to dissolve and spread.",
        safetyNote: "Indicative only. Some processed syrups can pass simple tests." },
      { title: "Flame wick test", adulterant: "Water / syrup",
        steps: ["Dip a dry cotton wick in honey and shake off the excess.", "An adult may light it with a match at arm's length, away from flammables."],
        whatYouSee: "A wick that burns steadily suggests low moisture. Crackling or refusal to burn suggests extra water.",
        safetyNote: "Fire hazard. Keep away from children and flammable items; extinguish fully." },
    ],
    comparison: {
      pure: ["Settles as a lump in water", "Wick tends to burn steadily"],
      adulterated: ["Dissolves quickly in water", "Wick crackles or will not burn"],
    },
    resources: common,
  },
  {
    id: "turmeric", name: "Turmeric", icon: "Sprout",
    summary: "A bright golden spice that can be coloured to look fresher.",
    adulterants: [
      { name: "Metanil yellow", description: "A non-permitted dye used to brighten colour.", severity: "high" },
      { name: "Chalk or starch powder", description: "Fillers added to increase weight.", severity: "low" },
    ],
    healthRisks: [
      { risk: "Digestive irritation", cause: "Non-permitted dyes may irritate the gut over time.", severity: "high" },
      { risk: "Lower spice quality", cause: "Fillers reduce flavour and curcumin content.", severity: "low" },
    ],
    homeTests: [
      { title: "Water colour test", adulterant: "Added colour",
        steps: ["Add a teaspoon of turmeric to a glass of water.", "Leave it for a few minutes without stirring."],
        whatYouSee: "Pure turmeric settles slowly with a light yellow tint. Added colour may leave strong yellow streaks quickly.",
        safetyNote: "Indicative only. Confirming specific dyes needs a laboratory." },
    ],
    comparison: {
      pure: ["Light, even yellow tint in water", "Settles slowly"],
      adulterated: ["Intense colour streaks appear fast", "Gritty residue may settle"],
    },
    resources: common,
  },
  {
    id: "chilli-powder", name: "Chilli Powder", icon: "Flame",
    summary: "A common spice that may contain fillers or added colour.",
    adulterants: [
      { name: "Brick powder", description: "A gritty filler added to increase weight.", severity: "medium" },
      { name: "Artificial colours", description: "Added to make the powder look redder.", severity: "high" },
    ],
    healthRisks: [
      { risk: "Gut irritation", cause: "Grit and non-permitted dyes may irritate the digestive tract.", severity: "medium" },
      { risk: "Dye exposure", cause: "Some dyes are not approved for food use.", severity: "high" },
    ],
    homeTests: [
      { title: "Brick powder check", adulterant: "Brick powder",
        steps: ["Sprinkle a teaspoon of chilli powder on a glass of water.", "Watch for a minute."],
        whatYouSee: "Pure powder mostly floats and settles slowly. Heavy particles sinking fast may suggest brick powder.",
        safetyNote: "Avoid touching your eyes. Wash hands after handling." },
      { title: "Added colour check", adulterant: "Artificial colours",
        steps: ["Sprinkle a little powder on water in a clear glass.", "Look for coloured streaks."],
        whatYouSee: "Distinct colour trails descending from the grains may suggest added dye.",
        safetyNote: "Wear gloves; chilli irritates skin." },
    ],
    comparison: {
      pure: ["Floats, settles slowly", "Little colour in water"],
      adulterated: ["Heavy gritty particles sink fast", "Colour streaks in water"],
    },
    resources: common,
  },
  {
    id: "ghee", name: "Ghee", icon: "Soup",
    summary: "Clarified butter that may be blended with cheaper fats or starch.",
    adulterants: [
      { name: "Vanaspati / other fats", description: "Cheaper fats mixed in to cut cost.", severity: "medium" },
      { name: "Mashed potato or starch", description: "Added to add bulk.", severity: "low" },
    ],
    healthRisks: [
      { risk: "Lower nutritional value", cause: "Substituted fats lack ghee's natural components.", severity: "low" },
      { risk: "Unwanted fat intake", cause: "Some added fats may be less healthy than expected.", severity: "medium" },
    ],
    homeTests: [
      { title: "Starch check", adulterant: "Starch / mashed potato",
        steps: ["Melt a small amount of ghee and let it cool slightly.", "Add 2 drops of tincture iodine (adult handling only).", "Observe the colour."],
        whatYouSee: "A blue colour suggests starch may be present. Other fats need laboratory analysis.",
        safetyNote: "Iodine stains skin and surfaces. Discard the sample." },
    ],
    comparison: {
      pure: ["No colour change with iodine", "Characteristic aroma and grainy texture"],
      adulterated: ["May turn blue with iodine (starch)", "Flat aroma or unusually smooth texture"],
    },
    resources: common,
  },
  {
    id: "pulses", name: "Pulses", icon: "Bean",
    summary: "Dals and lentils that may be polished or coloured.",
    adulterants: [
      { name: "Metanil yellow", description: "A non-permitted dye used to brighten colour.", severity: "high" },
      { name: "Lathyrus (kesari) dal", description: "A cheaper dal mixed into other dals; excess intake is a concern.", severity: "high" },
    ],
    healthRisks: [
      { risk: "Digestive irritation", cause: "Non-permitted dyes may irritate the gut.", severity: "medium" },
      { risk: "Neurological concerns", cause: "Heavy long-term kesari dal consumption has been linked to lathyrism.", severity: "high" },
    ],
    homeTests: [
      { title: "Warm water colour test", adulterant: "Added colour",
        steps: ["Soak a spoonful of dal in warm water for 10–15 minutes.", "Check whether the water takes a strong yellow tint."],
        whatYouSee: "Heavy colour in the water may suggest added dye. Mild cloudiness is normal.",
        safetyNote: "Indicative only. Rinse and discard the soaking water." },
      { title: "Visual look", adulterant: "Kesari dal",
        steps: ["Spread dal on a white plate in good light.", "Look for slightly wedge-shaped grains mixed among the rest."],
        whatYouSee: "A noticeable mix of different-shaped grains may need checking. This cannot confirm anything.",
        safetyNote: "Visual only. Buy from reliable sources and consult FSSAI guidance." },
    ],
    comparison: {
      pure: ["Uniform grain shape", "Little colour in soaking water"],
      adulterated: ["Mixed grain shapes", "Strong yellow tint in water"],
    },
    resources: common,
  },
];

// Combine the original foods with the additional ones from moreFoods.js
export const foods = [...baseFoods, ...moreFoods];

export const getFood = (id) => foods.find((f) => f.id === id);

// Match on food name or any adulterant name/description
export function filterFoods(query) {
  const q = query.trim().toLowerCase();
  if (!q) return foods;
  return foods.filter(
    (f) =>
      f.name.toLowerCase().includes(q) ||
      f.adulterants.some((a) => (a.name + " " + a.description).toLowerCase().includes(q))
  );
}