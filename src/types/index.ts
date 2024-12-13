export type NavItem = {
  label: string;
  href: string;
};

export type Solution = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  benefits: string[];
  features: string[];
};

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  imageUrl: string;
};