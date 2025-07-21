export interface Project {
  number: string;
  title: string;
  description: string;
  link: string;
}

export const projectData: Project[] = [
  {
    number: "01",
    title: "Sous",
    description:
      "Designed a multi-agent AI system using Pydantic-AI to orchestrate agents, enabling context-aware input routing and structured output validation.",
    link: "/projects/sous",
  },
  {
    number: "02",
    title: "Delta Palette",
    description:
      "A colorblind-focused accessibility tool that generates clearer, more inclusive color palettes by leveraging the perceptual uniformity of Oklab and distance-maximization.",
    link: "/projects/delta-palette",
  },
  {
    number: "03",
    title: "Odyssey",
    description:
      "An AI-enhanced travel itinerary builder that allows users to map out their trips, explore destinations, and track expenses.",
    link: "/projects/odyssey",
  },
];
