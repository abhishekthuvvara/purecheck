// Additional foods. Educational only; home tests are indicative, never conclusive.
// Based on widely published FSSAI guidance (e.g. the DART booklet).

const common = [
  { label: "FSSAI – Food Safety and Standards Authority of India", url: "https://www.fssai.gov.in" },
  { label: "Food Safety Connect / FoSCoS (report a concern)", url: "https://foscos.fssai.gov.in" },
  { label: "FSSAI DART booklet (rapid tests)", url: "https://www.fssai.gov.in/upload/uploadfiles/files/DART_Book.pdf" },
];

export const moreFoods = [
  {
    id: "paneer", name: "Paneer", icon: "Box",
    summary: "A fresh dairy product that may be bulked up with starch or other fillers.",
    adulterants: [
      { name: "Starch", description: "Added to increase weight and firmness.", severity: "medium" },
      { name: "Non-dairy fillers", description: "Cheaper substitutes mixed in to cut cost.", severity: "low" },
    ],
    healthRisks: [
      { risk: "Lower protein content", cause: "Fillers replace milk solids, reducing nutrition per serving.", severity: "low" },
      { risk: "Digestive discomfort", cause: "Poor-quality or spoiled substitutes may upset the stomach.", severity: "medium" },
    ],
    homeTests: [
      { title: "Starch check", adulterant: "Starch",
        steps: ["Boil a small piece of paneer in water and let it cool.", "Add 2–3 drops of tincture iodine (adult handling only).", "Observe the colour."],
        whatYouSee: "A blue colour suggests starch may be present. No colour change suggests none was detected.",
        safetyNote: "Iodine stains and irritates skin. Discard the sample; never eat it." },
    ],
    comparison: {
      pure: ["Soft, slightly crumbly texture", "No colour change with iodine"],
      adulterated: ["Rubbery or unusually firm", "May turn blue with iodine (starch)"],
    },
    resources: common,
  },
  {
    id: "sugar", name: "Sugar", icon: "Candy",
    summary: "A kitchen staple that can contain chalk or other white powders.",
    adulterants: [
      { name: "Chalk powder", description: "A white filler added to increase weight.", severity: "low" },
      { name: "Washing soda", description: "A non-food chemical sometimes mixed in.", severity: "high" },
    ],
    healthRisks: [
      { risk: "Stomach irritation", cause: "Non-food powders may irritate the digestive tract.", severity: "medium" },
      { risk: "Reduced sweetness", cause: "Fillers lower the actual sugar content.", severity: "low" },
    ],
    homeTests: [
      { title: "Water dissolve test", adulterant: "Chalk powder",
        steps: ["Dissolve a tablespoon of sugar in a glass of water.", "Let it stand for a few minutes."],
        whatYouSee: "Pure sugar dissolves into a clear solution. A white sediment at the bottom may suggest chalk.",
        safetyNote: "Indicative only. Pour the sample away; do not drink it." },
    ],
    comparison: {
      pure: ["Dissolves completely", "Clear solution in water"],
      adulterated: ["White sediment settles at the bottom", "Cloudy water"],
    },
    resources: common,
  },
  {
    id: "salt", name: "Salt", icon: "Snowflake",
    summary: "Table salt may be mixed with fine white powders or grit.",
    adulterants: [
      { name: "Chalk or whitening powder", description: "Fine white filler added to increase weight.", severity: "low" },
      { name: "Fine sand or grit", description: "Added to bulk up the quantity.", severity: "medium" },
    ],
    healthRisks: [
      { risk: "Digestive irritation", cause: "Insoluble grit may irritate the gut.", severity: "medium" },
      { risk: "Lower salt content", cause: "Fillers reduce the real salt per spoon.", severity: "low" },
    ],
    homeTests: [
      { title: "Water suspension test", adulterant: "Chalk / grit",
        steps: ["Stir a spoonful of salt into a glass of water.", "Let it settle for a few minutes."],
        whatYouSee: "Pure salt dissolves, leaving clear water. A white cloudiness or gritty sediment may suggest fillers.",
        safetyNote: "Indicative only. Pour the sample away; do not drink it." },
    ],
    comparison: {
      pure: ["Dissolves into clear water", "No sediment"],
      adulterated: ["Cloudy white suspension", "Gritty sediment at the bottom"],
    },
    resources: common,
  },
  {
    id: "tea", name: "Tea", icon: "Leaf",
    summary: "Tea leaves can be coloured, reused, or mixed with iron filings.",
    adulterants: [
      { name: "Artificial colour", description: "Dye used to make old or low-grade leaves look fresh.", severity: "high" },
      { name: "Iron filings", description: "Metal particles that can enter during processing or be added deliberately.", severity: "medium" },
      { name: "Used tea leaves", description: "Dried, recoloured leaves mixed into fresh tea.", severity: "low" },
    ],
    healthRisks: [
      { risk: "Dye exposure", cause: "Non-permitted colours may irritate the digestive system.", severity: "high" },
      { risk: "Poor quality", cause: "Used leaves lower flavour and beneficial compounds.", severity: "low" },
    ],
    homeTests: [
      { title: "Wet paper colour test", adulterant: "Artificial colour",
        steps: ["Dampen a piece of white filter paper or tissue.", "Sprinkle a pinch of tea leaves on it.", "Wait a minute, then brush the leaves off and look at the paper."],
        whatYouSee: "Coloured spots or streaks on the paper may suggest added dye.",
        safetyNote: "Indicative only. Dispose of the paper and leaves." },
      { title: "Magnet test", adulterant: "Iron filings",
        steps: ["Spread a spoonful of dry tea on a sheet of paper.", "Move a magnet slowly underneath the paper."],
        whatYouSee: "Small particles sticking to the magnet may be iron filings.",
        safetyNote: "Keep magnets away from children and electronics." },
    ],
    comparison: {
      pure: ["No coloured spots on wet paper", "Nothing sticks to a magnet"],
      adulterated: ["Colour spots appear on wet paper", "Particles cling to a magnet"],
    },
    resources: common,
  },
  {
    id: "coffee", name: "Coffee", icon: "Coffee",
    summary: "Coffee powder may be blended with chicory or roasted husk.",
    adulterants: [
      { name: "Chicory", description: "A roasted root often blended in. Permitted blends must be labelled, but unlabelled addition is a concern.", severity: "low" },
      { name: "Roasted husk or tamarind seed powder", description: "Cheap bulking agents mixed into ground coffee.", severity: "medium" },
    ],
    healthRisks: [
      { risk: "Mislabelled content", cause: "You may get less coffee than you paid for.", severity: "low" },
      { risk: "Poor quality fillers", cause: "Unknown roasted fillers may be of low hygiene quality.", severity: "medium" },
    ],
    homeTests: [
      { title: "Floating powder test", adulterant: "Chicory / husk",
        steps: ["Fill a glass with water.", "Gently sprinkle a spoonful of coffee powder on the surface.", "Watch for about a minute."],
        whatYouSee: "Pure coffee tends to float, while chicory sinks quickly and leaves coloured streaks.",
        safetyNote: "Indicative only. Check the label: some blends legally include chicory." },
    ],
    comparison: {
      pure: ["Mostly floats on water", "Little colour streaking"],
      adulterated: ["Particles sink quickly", "Dark streaks trail downwards"],
    },
    resources: common,
  },
  {
    id: "oil", name: "Cooking Oil", icon: "Droplet",
    summary: "Edible oils can be blended with cheaper or non-edible oils.",
    adulterants: [
      { name: "Argemone oil", description: "A harmful seed oil historically found mixed into mustard oil.", severity: "high" },
      { name: "Cheaper oils or mineral oil", description: "Substituted to reduce cost; some are not fit for eating.", severity: "high" },
    ],
    healthRisks: [
      { risk: "Serious illness", cause: "Argemone oil contamination has been linked to epidemic dropsy in past outbreaks.", severity: "high" },
      { risk: "Nutritional mismatch", cause: "Blends may not match the oil declared on the pack.", severity: "low" },
    ],
    homeTests: [
      { title: "Label and packaging check", adulterant: "Unlabelled blends",
        steps: ["Buy sealed, packaged oil with an intact seal.", "Check for an FSSAI licence number, the oil type, batch number and dates.", "Avoid loose, unlabelled oil where possible."],
        whatYouSee: "Complete, clear labelling makes the source traceable. Missing details are a reason to be cautious.",
        safetyNote: "No reliable home chemical test for oil adulteration exists. Confirm suspicions in a laboratory." },
    ],
    comparison: {
      pure: ["Sealed pack with FSSAI details", "Clear label and batch information"],
      adulterated: ["Loose or unlabelled", "Missing licence or batch details"],
    },
    resources: common,
  },
  {
    id: "rice", name: "Rice", icon: "Wheat",
    summary: "Rice may contain stones, grit or added polish and colour.",
    adulterants: [
      { name: "Stones and grit", description: "Small stones that add weight.", severity: "medium" },
      { name: "Artificial polish or colour", description: "Used to make old grains look fresh and bright.", severity: "medium" },
    ],
    healthRisks: [
      { risk: "Dental harm", cause: "Stones and grit can damage teeth.", severity: "low" },
      { risk: "Dye exposure", cause: "Non-permitted colours may irritate the stomach.", severity: "medium" },
    ],
    homeTests: [
      { title: "Visual and water check", adulterant: "Stones / colour",
        steps: ["Spread a handful of rice on a white plate in good light and look for stones or odd grains.", "Soak a spoonful in warm water for 10 minutes.", "Check whether the water turns strongly coloured."],
        whatYouSee: "Visible stones or a strongly coloured soaking water may suggest a problem. Light cloudiness is normal.",
        safetyNote: "Indicative only. Rinse rice well before cooking regardless." },
    ],
    comparison: {
      pure: ["Even-coloured grains", "Light cloudy soaking water"],
      adulterated: ["Stones or odd grains visible", "Strong colour in soaking water"],
    },
    resources: common,
  },
  {
    id: "cumin", name: "Cumin (Jeera)", icon: "Sprout",
    summary: "Whole cumin seeds may be mixed with look-alike seeds coloured with dust.",
    adulterants: [
      { name: "Coloured grass seeds", description: "Look-alike seeds dyed to resemble cumin.", severity: "medium" },
      { name: "Charcoal or stone dust", description: "Used to darken and bulk the seeds.", severity: "medium" },
    ],
    healthRisks: [
      { risk: "Gut irritation", cause: "Dust and dyes may irritate the digestive tract.", severity: "medium" },
      { risk: "Weaker flavour", cause: "Fillers reduce aroma and taste.", severity: "low" },
    ],
    homeTests: [
      { title: "White paper rub test", adulterant: "Charcoal / dye",
        steps: ["Wearing gloves, rub a few seeds firmly on a clean white sheet of paper.", "Check the paper for dark or coloured marks."],
        whatYouSee: "A grey or black smear may suggest added dust or colour.",
        safetyNote: "Indicative only. Wash hands afterwards and discard the paper." },
    ],
    comparison: {
      pure: ["Little or no smear on white paper", "Uniform seeds with strong aroma"],
      adulterated: ["Grey or black smear on paper", "Mixed seed shapes"],
    },
    resources: common,
  },
  {
    id: "coriander", name: "Coriander Powder", icon: "Flower2",
    summary: "Ground coriander may be bulked with husk powder or colour.",
    adulterants: [
      { name: "Husk or sawdust powder", description: "Cheap plant material mixed in to add weight.", severity: "medium" },
      { name: "Added colour", description: "Dye used to give a fresher green-brown look.", severity: "high" },
    ],
    healthRisks: [
      { risk: "Stomach upset", cause: "Unknown fillers and dyes may irritate the gut.", severity: "medium" },
      { risk: "Poor flavour", cause: "Fillers dilute the natural aroma.", severity: "low" },
    ],
    homeTests: [
      { title: "Water float test", adulterant: "Husk / sawdust",
        steps: ["Sprinkle a teaspoon of powder on a glass of water.", "Watch for a minute without stirring."],
        whatYouSee: "A large amount of light, fibrous material floating on top may suggest bulking. Some natural husk floating is normal.",
        safetyNote: "Indicative only. Confirm any concern with a laboratory." },
    ],
    comparison: {
      pure: ["Mostly settles slowly", "Water has only a light tint"],
      adulterated: ["Heavy floating fibrous material", "Strong colour streaks in water"],
    },
    resources: common,
  },
];