export type Degree = {
  school: string;
  location: string;
  degree: string;
  detail?: string;
};

export const education: Degree[] = [
  {
    school: 'Columbia University',
    location: 'New York, NY',
    degree: 'M.S. Sustainability Management',
    detail:
      'Coursework: Statistics for Sustainability, Energy Efficiency Analysis, GHG / Carbon Footprint Accounting, Cost-Benefit Analysis, Financing the Green Economy.',
  },
  {
    school: 'Franklin & Marshall College',
    location: 'Lancaster, PA',
    degree: 'B.A. Business Administration',
  },
];
