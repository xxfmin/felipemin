export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  link: string;
}

export const experienceData: Experience[] = [
  {
    company: "Intel",
    role: "Offensive Security Research Intern",
    period: "May 2024 - August 2024",
    description:
      "Explored feasibility of utilizing hardware-provided information (MSRs/performance counters) to detect software-accessible power side-channel attacks.",
    link: "https://intel.com",
  },
  {
    company: "Intel",
    role: "Security Research Intern",
    period: "May 2023 - July 2023",
    description:
      "Explored hardware-level malware detection with Gaussian process, leveraging uncertainty estimates and increasing malware-classification accuracy.",
    link: "https://intel.com",
  },
  {
    company: "Accenture",
    role: "Solutions Architect Intern",
    period: "August 2022 – December 2022",
    description:
      "Led a team of 3 in partnership with FSU IT Services, Accenture, and Microsoft consultants to research, design, and present a winning hybrid-learning solution complete with rollout, marketing, and communications strategy.",
    link: "https://www.accenture.com/us-en",
  },
];
