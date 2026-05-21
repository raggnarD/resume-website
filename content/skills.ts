export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: 'AI / ML Product',
    items: [
      'ML model productization (data → labeling → training → eval → deploy)',
      'LLM applications',
      'Computer Vision (CV)',
      'Image Recognition',
      'Object Detection',
      'Agentic AI workflows (Claude Code, Cursor)',
      'Human-in-the-Loop Systems',
    ],
  },
  {
    label: 'Technical',
    items: [
      'Python',
      'SQL',
      'Postgres',
      'JSON',
      'Swift',
      'Kotlin',
      'JavaScript',
      'HTML',
      'React',
      'Ember',
      'Vertica',
      'Redshift',
      'BigQuery',
      'REST APIs',
      'Machine Learning',
    ],
  },
  {
    label: 'Product & Strategy',
    items: [
      'Product Strategy & Roadmap',
      'OKRs',
      'Agile / Scrum / Kanban',
      'Cross-Functional Leadership',
      'Stakeholder Management',
      'Lean Startup',
      'User Testing',
      'A/B Testing',
      'Business Intelligence',
      'Root Cause Analysis',
    ],
  },
  {
    label: 'Tools',
    items: [
      'JIRA',
      'Confluence',
      'Looker',
      'Tableau',
      'Amplitude',
      'Firebase',
      'Adjust',
      'Leanplum',
      'Figma',
      'Balsamiq',
      'Invision',
      'GitLab',
      'Asana',
      'Salesforce',
      'Postman',
      'TextQL',
    ],
  },
  {
    label: 'Domain',
    items: [
      'B2B SaaS & Enterprise Software',
      'Mobile App Development',
      'IoT / Sensor Data Ingestion',
      'Solar / Clean Energy Monitoring',
      'Subscription Lifecycle',
      'Monetization',
      'User Journey & Conversion',
      'LTV Optimization',
    ],
  },
  {
    label: 'Design',
    items: ['Design Thinking', 'UX', 'UI', 'Mobile App Design', 'Figma'],
  },
];
