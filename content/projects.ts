export type Project = {
  name: string;
  status: 'In production' | 'Internal tool' | 'POC';
  blurb: string;
};

export const projects: Project[] = [
  {
    name: 'Customer-complaint triage agent',
    status: 'In production',
    blurb:
      'Multi-step agentic workflow that ingests CEO-forwarded customer emails, retrieves similar past complaints, feedback, and existing Jira tickets, then generates a “true problem score” to help the team prioritize issues. Turns ad-hoc executive escalations into structured, evidence-backed prioritization signal.',
  },
  {
    name: 'Automated PRD generation',
    status: 'Internal tool',
    blurb:
      'Agentic workflow that drafts PRDs from initial requirement notes — accelerating spec authoring and standardizing structure across the team.',
  },
  {
    name: 'Slack daily digest agent',
    status: 'Internal tool',
    blurb:
      'Summarizes channel conversations and extracts outstanding to-do items, surfacing action items that otherwise get lost in noise.',
  },
  {
    name: 'Production proof-of-concepts',
    status: 'POC',
    blurb:
      'Multiple Claude Code– and Cursor–built proof-of-concept features merged into production codebases.',
  },
];
