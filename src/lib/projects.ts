export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category: "commercial" | "industrial" | "infrastructure";
  categoryLabel: string;
  location: string;
  year: string;
  status: "completed" | "ongoing";
  image: string;
  details: {
    scope: string;
    tonnage?: string;
    duration?: string;
    standard?: string;
  };
}

export const PROJECTS: ProjectData[] = [
  {
    id: "central-rail-hub",
    title: "Central Rail Hub Assembly",
    description: "Complex structural steel framework for Auckland's major transit hub, involving precision-engineered beam connections and seismic-rated joints.",
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    location: "Auckland CBD",
    year: "2024",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1541888086925-920eb1fd1e60?q=80&w=1200&auto=format&fit=crop",
    details: {
      scope: "Primary steel structure, connection design, erection",
      tonnage: "2,400 tonnes",
      duration: "18 months",
      standard: "AS/NZS 5131",
    },
  },
  {
    id: "harbour-bridge-reinforcement",
    title: "Harbour Bridge Reinforcement",
    description: "Seismic strengthening and structural steel upgrades for critical bridge infrastructure. High-tolerance welding in marine environment.",
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    location: "Auckland Harbour",
    year: "2024",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    details: {
      scope: "Seismic retrofit, steel reinforcement plates, coded welding",
      tonnage: "850 tonnes",
      duration: "24 months",
      standard: "AS/NZS 1554.1",
    },
  },
  {
    id: "precision-pipe-network",
    title: "Precision Pipe Network",
    description: "Industrial piping support steelwork for a major processing facility. Custom bracket fabrication with sub-millimeter tolerances.",
    category: "industrial",
    categoryLabel: "Industrial",
    location: "South Auckland",
    year: "2024",
    status: "completed",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
    details: {
      scope: "Pipe rack steelwork, support brackets, platform access",
      tonnage: "620 tonnes",
      duration: "8 months",
      standard: "AS/NZS 1554.5",
    },
  },
  {
    id: "welding-plant-expansion",
    title: "Welding Plant Expansion",
    description: "Heavy industrial workshop expansion including overhead crane beams, mezzanine flooring, and structural portal frames.",
    category: "industrial",
    categoryLabel: "Industrial",
    location: "Hamilton",
    year: "2024",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop",
    details: {
      scope: "Portal frames, crane beams, mezzanine steel",
      tonnage: "340 tonnes",
      duration: "6 months",
      standard: "NZS 3404",
    },
  },
  {
    id: "commercial-tower-framework",
    title: "Commercial Tower Framework",
    description: "12-storey commercial office tower structural steel package. Full 3D Tekla modeling, shop drawing production, and site erection.",
    category: "commercial",
    categoryLabel: "Commercial",
    location: "Auckland CBD",
    year: "2023",
    status: "completed",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    details: {
      scope: "Structural steel detailing, fabrication coordination, erection",
      tonnage: "1,800 tonnes",
      duration: "14 months",
      standard: "AS/NZS 5131",
    },
  },
  {
    id: "retail-complex-steel",
    title: "Retail Complex Steelwork",
    description: "Multi-tenancy retail development requiring complex roof truss systems and architectural steel feature elements.",
    category: "commercial",
    categoryLabel: "Commercial",
    location: "North Shore",
    year: "2023",
    status: "completed",
    image: "https://images.unsplash.com/photo-1582213706038-f8d9ce3dff1b?q=80&w=1200&auto=format&fit=crop",
    details: {
      scope: "Roof trusses, architectural steelwork, canopy structures",
      tonnage: "450 tonnes",
      duration: "10 months",
      standard: "NZS 3404",
    },
  },
  {
    id: "custom-bracket-fabrication",
    title: "Custom Bracket Fabrication",
    description: "Bespoke heavy steel assemblies engineered for high-tension bridge components requiring sub-millimeter precision.",
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    location: "Waikato",
    year: "2024",
    status: "completed",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
    details: {
      scope: "Custom brackets, connection plates, anchor assemblies",
      tonnage: "120 tonnes",
      duration: "4 months",
      standard: "AS/NZS 1554.1",
    },
  },
  {
    id: "warehouse-steel-erection",
    title: "Warehouse Steel Erection",
    description: "Large-span industrial warehouse with clear-height portal frame design. Rapid site erection with specialized rigging crews.",
    category: "industrial",
    categoryLabel: "Industrial",
    location: "East Tamaki",
    year: "2023",
    status: "completed",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop",
    details: {
      scope: "Portal frames, purlins, girts, bracing",
      tonnage: "280 tonnes",
      duration: "5 months",
      standard: "NZS 3404",
    },
  },
];

export const PROJECT_CATEGORIES = [
  { value: "all", label: "All Projects" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industrial" },
  { value: "infrastructure", label: "Infrastructure" },
] as const;
