export const site = {
  name: "Seattle MasterFix Precision Craftsmanship",
  shortName: "Seattle MasterFix",
  tagline: "Built on trust. Executed with precision.",
  description:
    "High-performance contracting across King County. From full exterior transformations to meticulous interior finishes — uncompromising quality on strict timelines for property owners and general contractors.",
  url: "https://seattlemasterfix.com",
  phone: "(206) 550-4576",
  phoneHref: "tel:+12065504576",
  email: "info@seattlemasterfix.com",
  estimatesEmail: "estimates@seattlemasterfix.com",
  address: {
    street: "5415 6th Ave NW",
    city: "Seattle",
    state: "WA",
    zip: "98107",
    full: "5415 6th Ave NW, Seattle, WA 98107",
  },
  license: "SEATTMP744NL",
  ubi: "605904953",
  credentials: "Licensed, bonded, and fully insured",
  calendly: "https://calendly.com/bill-seattlemasterfix",
  /** Public Formspree form ID used on the live site */
  formspreeDefault: "https://formspree.io/f/xnjeedlb",
  areaServed: "King County, Washington",
} as const;

export function getFormspreeEndpoint(): string {
  return (
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
    (process.env.NEXT_PUBLIC_FORMSPREE_ID
      ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
      : site.formspreeDefault)
  );
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/contact", label: "Contact" },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Preconstruction & feasibility",
    body: "We align on space, requirements, budget, and timeline before design begins — so scope is honest from day one.",
  },
  {
    step: "02",
    title: "Architecture, engineering & permitting",
    body: "Architectural, MEP, and health-department approvals as needed. Permit management included so you are not left chasing paper.",
  },
  {
    step: "03",
    title: "Construction & build-out",
    body: "Quality-driven work with clear communication and schedule control — trade specialists executing to the plan.",
  },
  {
    step: "04",
    title: "Project closeout & opening support",
    body: "Final inspections, punch list, documentation, and support through handover so nothing is left unfinished.",
  },
] as const;

export type ServiceSlug =
  | "siding"
  | "fencing"
  | "tile"
  | "laminate"
  | "drywall"
  | "paint";

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  headline: string;
  summary: string;
  intro: string;
  heroImage: string;
  images: string[];
  timeline: string;
  costDrivers: string[];
  materials: string[];
  mistakes: { title: string; body: string }[];
  process: { title: string; body: string }[];
};

function imgs(trade: string, files: string[]) {
  return files.map((f) => `/images/services/${trade}/${f}`);
}

export const services: Service[] = [
  {
    slug: "siding",
    name: "Premium exterior siding",
    shortName: "Siding",
    headline: "Durable, weather-tight siding for the Pacific Northwest",
    summary:
      "High-performance exterior siding built to withstand PNW weather while elevating curb appeal.",
    intro:
      "Siding is your building's first line of defense against Seattle's rain, wind, and temperature swings — and the first thing anyone notices. We install weather-resistive systems with proper flashing, rain-screen detailing, and manufacturer-spec fastening so the finish lasts.",
    heroImage: "/images/services/siding/siding.webp",
    images: imgs("siding", [
      "siding.webp",
      "siding1.webp",
      "siding2.webp",
      "siding3.webp",
      "siding4.webp",
      "siding5.webp",
      "siding6.webp",
      "siding7.webp",
    ]),
    timeline: "Typically 1–4 weeks depending on elevation count, repairs, and weather windows.",
    costDrivers: [
      "Square footage and number of elevations",
      "Sheathing or rot repair discovered after demo",
      "Material system (fiber cement, engineered wood, vinyl)",
      "Trim complexity, window/door count, and scaffolding access",
      "Permit and rain-screen detailing requirements",
    ],
    materials: [
      "Fiber cement and engineered wood cladding",
      "House wrap / WRB and rain-screen furring",
      "Flashing, trim, and corner systems per manufacturer",
    ],
    mistakes: [
      {
        title: "Skipping moisture management",
        body: "In the PNW, a proper weather-resistive barrier and rain-screen gap matter more than the face material. Skipping this is the #1 cause of rot behind new siding.",
      },
      {
        title: "Covering damaged substrate",
        body: "We inspect sheathing for soft spots before install. Beautiful new siding over bad substrate only hides a more expensive problem.",
      },
      {
        title: "Wrong fastening or flashing",
        body: "Correct flashing at windows, doors, and penetrations — plus manufacturer fastening patterns — is what keeps a job warrantied and watertight.",
      },
    ],
    process: [
      { title: "Evaluate", body: "Existing siding, sheathing, and moisture points before writing a scope." },
      { title: "Protect", body: "House wrap, flashing, and rain-screen first — the part no one sees but everyone benefits from." },
      { title: "Install", body: "Panels cut, aligned, and fastened for a clean, consistent reveal." },
      { title: "Finish", body: "Corners, window trim, and transitions for a crisp professional look." },
    ],
  },
  {
    slug: "fencing",
    name: "Custom fencing & perimeter",
    shortName: "Fencing",
    headline: "High-integrity wood and commercial perimeter fencing",
    summary:
      "From durable wood privacy fencing to custom commercial perimeter builds — systems that stay plumb through wet winters.",
    intro:
      "A fence has to hold up structurally against wind and ground movement, and look good doing it. We set posts to proper depth with concrete footings, select the right wood for ground contact vs. panels, and hang gates with commercial-grade hardware.",
    heroImage: "/images/services/fencing/fencing4.webp",
    images: imgs("fencing", [
      "fencing.webp",
      "fencing1.webp",
      "fencing2.webp",
      "fencing3.webp",
      "fencing4.webp",
      "fencing5.webp",
      "fencing6.webp",
      "fencing7.webp",
    ]),
    timeline: "Typically 3–10 days for residential runs; longer for complex commercial perimeters.",
    costDrivers: [
      "Linear footage and terrain",
      "Post depth, soil conditions, and footing size",
      "Material (cedar, pressure-treated, mixed systems)",
      "Gate count, width, and hardware grade",
      "HOA / height / setback constraints",
    ],
    materials: [
      "Cedar and pressure-treated lumber",
      "Concrete footings sized for local soils",
      "Commercial-grade hinges and latch hardware",
    ],
    mistakes: [
      {
        title: "Guessing property lines",
        body: "Confirm boundaries before posts go in the ground — the most common source of neighbor disputes.",
      },
      {
        title: "Shallow posts",
        body: "A fence is only as strong as what's below grade. Proper depth and drainage prevent leaning through wet winters.",
      },
      {
        title: "Underbuilt gates",
        body: "Most fence complaints come from sagging gates. We size hinges and closers to the actual gate weight.",
      },
    ],
    process: [
      { title: "Layout", body: "Mark the line, gate locations, and confirm boundary or utility concerns." },
      { title: "Posts", body: "Set to proper depth with concrete footings sized for soil and weather." },
      { title: "Panels", body: "Rails and panels level and plumb with consistent spacing." },
      { title: "Gates", body: "Hung, squared, and fitted with hardware built for daily use." },
    ],
  },
  {
    slug: "tile",
    name: "Custom tile work",
    shortName: "Tile",
    headline: "Precision tile for kitchens, baths, and commercial floors",
    summary:
      "Unforgiving work done right — flat substrates, planned layouts, and waterproofing where it matters.",
    intro:
      "Every seam, lippage line, and grout joint is visible for the life of the installation. We level substrates, dry-lay layouts around focal points, and install waterproof membranes in wet areas before a single tile is set.",
    heroImage: "/images/services/tile/tile5.webp",
    images: imgs("tile", [
      "tile.webp",
      "tile1.webp",
      "tile2.webp",
      "tile3.webp",
      "tile4.webp",
      "tile5.webp",
      "tile6.webp",
      "tile7.webp",
      "tile8.webp",
      "tile9.webp",
      "tile10.webp",
      "tile11.webp",
      "tile12.webp",
      "tile13.webp",
    ]),
    timeline: "Typically 3–14 days depending on area, pattern complexity, and cure times.",
    costDrivers: [
      "Square footage and pattern complexity",
      "Subfloor leveling and waterproofing needs",
      "Tile size (large-format needs more prep)",
      "Grout type (epoxy vs. cementitious)",
      "Niche, curb, and transition details",
    ],
    materials: [
      "Porcelain, ceramic, and natural stone",
      "Waterproof membranes for wet areas",
      "Leveling systems and appropriate thinset / grout",
    ],
    mistakes: [
      {
        title: "Skipping waterproofing",
        body: "In showers and wet kitchens, the membrane behind the tile prevents leaks — not the surface grout.",
      },
      {
        title: "Ignoring flatness",
        body: "Lippage is almost always a subfloor problem. We self-level before setting tile.",
      },
      {
        title: "Rushing large-format",
        body: "Porcelain and large-format tile need proper cure times. Rushing causes cracking months later.",
      },
    ],
    process: [
      { title: "Prep", body: "Subfloor leveling and membrane in any wet-area application." },
      { title: "Layout", body: "Full layout planned before adhesive — avoiding awkward edge cuts." },
      { title: "Set", body: "Leveling systems keep edges flush and grout lines consistent." },
      { title: "Finish", body: "Grout applied, cleaned, and sealed for traffic and moisture." },
    ],
  },
  {
    slug: "laminate",
    name: "High-traffic laminate flooring",
    shortName: "Laminate",
    headline: "Commercial-grade laminate built for real use",
    summary:
      "Flooring that survives foot traffic, rolling loads, and Seattle humidity without gapping or peaking.",
    intro:
      "Laminate has to perform through daily wear and humidity swings. We acclimate material, check subfloor flatness and moisture, install the right underlayment, and leave code-correct expansion gaps so the floor stays flat season after season.",
    heroImage: "/images/services/laminate/laminate1.webp",
    images: imgs("laminate", [
      "laminate.webp",
      "laminate1.webp",
      "laminate2.webp",
      "laminate3.webp",
      "laminate4.webp",
      "laminate5.webp",
      "laminate6.webp",
      "laminate7.webp",
      "laminate8.webp",
      "laminate9.webp",
      "laminate10.webp",
      "laminate11.webp",
      "laminate12.webp",
    ]),
    timeline: "Typically 1–5 days for most residential and light-commercial spaces.",
    costDrivers: [
      "Square footage and room count",
      "Subfloor repairs and leveling",
      "AC wear rating for traffic level",
      "Underlayment and vapor barrier needs",
      "Transitions, stairs, and trim",
    ],
    materials: [
      "Traffic-rated laminate (AC appropriate to use)",
      "Underlayment for sound and moisture",
      "Vapor barriers over concrete slabs",
    ],
    mistakes: [
      {
        title: "Skipping acclimation",
        body: "Material must equalize to room humidity before install — top cause of gapping or buckling later.",
      },
      {
        title: "No vapor barrier on slab",
        body: "Moisture wicking through concrete damages flooring from below without a proper barrier.",
      },
      {
        title: "Tight perimeter",
        body: "Floating floors need expansion gaps. We leave them so seasonal movement does not buckle the floor.",
      },
    ],
    process: [
      { title: "Assess", body: "Flatness, moisture levels, and repairs before flooring goes down." },
      { title: "Acclimate", body: "Material equalizes to the space's temperature and humidity." },
      { title: "Underlay", body: "Right underlayment for subfloor type and sound needs." },
      { title: "Install", body: "Correct expansion gaps and staggered seams for strength." },
    ],
  },
  {
    slug: "drywall",
    name: "Flawless drywall finishing",
    shortName: "Drywall",
    headline: "Hanging, taping, and texture that disappears under paint",
    summary:
      "Seams that vanish, corners that stay crisp, and finishes checked under real room light.",
    intro:
      "Great drywall work is invisible. We hang board with correct fastener patterns, build joints through proper coat schedules, match existing textures on repairs, and contain dust so the rest of your space stays clean.",
    heroImage: "/images/services/drywall/drywall.webp",
    images: imgs("drywall", [
      "drywall.webp",
      "drywall1.webp",
      "drywall2.webp",
      "drywall3.webp",
      "drywall4.webp",
      "drywall5.webp",
      "drywall6.webp",
    ]),
    timeline: "Typically 3–10 days including dry time between coats.",
    costDrivers: [
      "Square footage of hang vs. finish-only",
      "Level of finish (paint-ready smooth vs. texture)",
      "Fire-rated or moisture-resistant board requirements",
      "Patch matching on existing textured walls",
      "Dust containment and occupied-space constraints",
    ],
    materials: [
      "Standard, MR, and fire-rated gypsum board",
      "Joint compounds suited to coat schedule",
      "Corner bead and texture materials matched to existing",
    ],
    mistakes: [
      {
        title: "Rushing coats",
        body: "Quality finishing is typically three coats with dry time between each. Rushing shows as seams under paint.",
      },
      {
        title: "Ignoring raking light",
        body: "Window and fixture light reveal every imperfection. We check finishes under actual room lighting.",
      },
      {
        title: "Wrong board type",
        body: "Garages, baths, and shared walls often need fire- or moisture-rated board by code — not the cheapest sheet.",
      },
    ],
    process: [
      { title: "Hang", body: "Board tight to framing with correct fastener spacing." },
      { title: "Tape", body: "Seams and corners coated to build a flat invisible surface." },
      { title: "Feather", body: "Additional coats widen joints for seamless transitions." },
      { title: "Texture", body: "Sanded smooth or matched to existing walls as needed." },
    ],
  },
  {
    slug: "paint",
    name: "Professional interior & exterior paint",
    shortName: "Paint",
    headline: "Sharp lines and durable finishes — prep first",
    summary:
      "Meticulous painting where prep does most of the work and weather windows guide exterior timing.",
    intro:
      "A paint job is only as good as the prep underneath. We clean, sand, patch, prime to the substrate, and cut clean lines by hand. Exterior work is scheduled around Seattle weather windows so coatings cure correctly.",
    heroImage: "/images/services/paint/paint.webp",
    images: imgs("paint", ["paint.webp"]),
    timeline: "Typically 2–7 days depending on rooms, exterior elevations, and dry conditions.",
    costDrivers: [
      "Interior sq ft vs. exterior elevations",
      "Surface condition and patch volume",
      "Color changes requiring extra coats",
      "Sheen and product grade by room use",
      "Lead-safe practices on pre-1978 homes",
    ],
    materials: [
      "Primers matched to substrate and prior coatings",
      "Interior and exterior architectural coatings",
      "Caulk, patch compounds, and masking systems",
    ],
    mistakes: [
      {
        title: "Skipping prep",
        body: "Cleaning, sanding, patching, and priming are ~80% of a lasting job — not optional extras.",
      },
      {
        title: "Wrong primer",
        body: "New drywall, oil-painted surfaces, and bare wood need different primers. Wrong choice causes peeling.",
      },
      {
        title: "Fighting the weather",
        body: "Exterior paint needs the right temperature and dry conditions. We plan around Seattle windows, not just the calendar.",
      },
    ],
    process: [
      { title: "Prep", body: "Clean, sand, patch, and mask for a durable finish." },
      { title: "Prime", body: "Correct primer for substrate and prior coatings." },
      { title: "Cut & roll", body: "Edges cut by hand; fields rolled or sprayed evenly." },
      { title: "Second coat", body: "Full second coat for consistent color and durability." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const allProjectImages = services.flatMap((s) =>
  s.images.map((src) => ({ src, trade: s.slug, label: s.shortName }))
);
