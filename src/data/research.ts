export interface ResearchExperience {
  id: string;
  title: string;
  lab: string;
  description: string;
  details: string[];
  technologies: string[];
  imageUrl?: string;
}

export const researchExperiences: ResearchExperience[] = [
  {
    id: 'simmerling-lab',
    title: 'Quantitative Biology Research',
    lab: 'Simmerling Lab',
    description: 'Molecular dynamics simulations of protein folding and aggregation',
    details: [
      'Molecular dynamics simulations of protein folding',
      'Clustering conformations, analyzing NMR/X-ray comparisons',
      'Insights on amyloid-beta 42 folding + aggregation'
    ],
    technologies: ['Python', 'CPPTRAJ', 'VMD', 'Molecular Dynamics']
  }
];

