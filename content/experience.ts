export type Role = {
  title: string;
  dateRange: string;
};

export type Asset =
  | {
      kind: 'image';
      src: string;
      alt: string;
      caption: string;
    }
  | {
      kind: 'video';
      poster: string;
      href: string;
      alt: string;
      caption: string;
    };

export type Position = {
  company: string;
  location: string;
  start: string;
  end: string;
  startYear: number;
  endYear: number | 'present';
  roles: Role[];
  bullets: string[];
  assets?: Asset[];
};

export const experience: Position[] = [
  {
    company: 'Amazon | Ring',
    location: 'New York, NY',
    start: 'Mar 2022',
    end: 'Present',
    startYear: 2022,
    endYear: 'present',
    roles: [
      { title: 'Sr. Product Manager — Technical', dateRange: '2022–Present' },
      { title: 'Product Manager — Technical', dateRange: '2022' },
    ],
    bullets: [
      'Own product strategy for the Ring Platform (Web & Mobile) across 30M+ users, defining the roadmap for AI-powered safety features that combine on-device computer vision, cloud inference, and human-in-the-loop monitoring.',
      'Led 0→1 launch of Virtual Security Guard, Ring’s flagship subscription monitoring service. The full-stack product spans CV-based event detection, real-time human-in-the-loop verification, and a guided onboarding workflow. Improved onboarding completion from 62.9% to 91.2% and cut P50/P90 onboarding time by 43.6% / 84.9%.',
      'Designed the Standard Operating Procedure (SOP) governing human-operator response after CV-detected person-in-frame events. The SOP specifies decision rules, escalation paths, and verification steps that translate digital signals into trustworthy, real-time, real-world security response.',
      'Drove Alexa/Ring Routine integration across multiple orgs, building cross-functional alignment up to the C-suite (Ring CEO/CTO and Amazon VP of Devices); doubled feature engagement vs. baseline Alexa Routines.',
      'Set vision across multiple scrum teams; ran Monthly Product and Business Reviews at the Director level, translating telemetry, funnel, and reliability data into prioritized roadmap decisions.',
    ],
    assets: [
      {
        kind: 'image',
        src: '/assets/ring-app.png',
        alt: 'Ring app interface',
        caption: 'Ring App',
      },
      {
        kind: 'video',
        poster: '/assets/ring-vsg-poster.jpg',
        href: 'https://www.youtube.com/watch?v=CMbDHOTH6qU',
        alt: 'Virtual Security Guard video',
        caption: 'Virtual Security Guard',
      },
      {
        kind: 'video',
        poster: '/assets/ring-carcam-poster.jpg',
        href: 'https://www.youtube.com/shorts/TEESINPGQZk',
        alt: 'Ring Car Cam video',
        caption: 'Ring Car Cam',
      },
    ],
  },
  {
    company: 'Teltech | IAC Mosaic Group',
    location: 'New York, NY',
    start: 'Jun 2019',
    end: 'Mar 2022',
    startYear: 2019,
    endYear: 2022,
    roles: [
      { title: 'Sr. Product Manager', dateRange: '2020–2022' },
      { title: 'Product Manager', dateRange: '2019–2020' },
    ],
    bullets: [
      'Designed and shipped an internal ML labeling admin portal that productized a research-grade SMS classification system into a scalable labeling tool used by ops teams. Drove 200% improvement in spam-text blocked through continuous ML model refinement and a structured human-in-the-loop labeling workflow.',
      'Owned the ML-powered Spam SMS filtering roadmap end-to-end, driving accuracy to 95%. Hand-labeled new user-reported messages as spam/not-spam to feed the retraining pipeline; defined the eval criteria, labeling workflow, and human-in-the-loop feedback loop between user reports and model retraining. Raised TextKiller average review from 3.5 stars to 4.3 stars via near-daily filter iteration.',
      'Shipped 3 mobile apps in one year, including RoboKiller iOS v5.0 (~700K subscribers) and TextKiller, which was designed and productized in 4 weeks. Built consensus on backend/frontend flows across a complex VoIP, telephony, and Mobile OS stack, driving a 20% increase in spam calls blocked per user in 30 days of launch.',
      'Researched, pitched, and shipped SwitchUp (Top 100 Business category) to 2,000 paid subscribers within 90 days of launch.',
      'Promoted to Sr. PM with Rising Star designation for roadmapping and exec comms across RoboKiller (App Store Top 100 Utilities, App of the Day 2019 & 2020, 1M+ subscribers); met 90% of 2020 OKRs and developed associate PMs, cutting time-to-productive by 20%.',
      'Lifted RoboKiller trial-to-paid conversion 60% → 70% and user LTV 10.2% via funnel instrumentation, onboarding redesign, and BI/UX partnership on conversion trend analysis.',
    ],
    assets: [
      {
        kind: 'image',
        src: '/assets/robokiller.png',
        alt: 'RoboKiller app screenshot',
        caption: 'RoboKiller',
      },
      {
        kind: 'image',
        src: '/assets/textkiller.png',
        alt: 'TextKiller app screenshot',
        caption: 'TextKiller',
      },
      {
        kind: 'image',
        src: '/assets/switchup.png',
        alt: 'SwitchUp app screenshot',
        caption: 'SwitchUp',
      },
    ],
  },
  {
    company: 'Locus Energy',
    location: 'Hoboken, NJ',
    start: 'Jan 2015',
    end: 'May 2019',
    startYear: 2015,
    endYear: 2019,
    roles: [
      { title: 'Product Manager', dateRange: 'Jan 2018 – May 2019' },
      { title: 'Applications Engineer / Technical Sales Engineer', dateRange: 'Jan 2016 – Jan 2018' },
      { title: 'Project Manager', dateRange: 'Jan 2015 – Jan 2016' },
    ],
    bullets: [
      'Built B2B SaaS platform for monitoring and control of commercial, industrial, and utility-scale solar PV installations. The hardware-agnostic data-ingestion product served 10,000+ accounts of technical end users including solar engineers, asset managers, and utility operators.',
      'As Product Manager, drove $2.2M in increased market share and 137% growth in assets monitored in 2018; built consensus across engineering, sales, and customers, and shipped two mobile apps to the full user base.',
      'Identified and validated new product lines by analyzing industry trends and customer signal. Secured the second-largest U.S. solar developer as a beta partner for a new add-on product.',
      'Productized hardware-agnostic data ingestion: led 50+ new hardware and software (API) integrations and shipped a self-service integration feature, increasing new-integration deployment speed by 300%.',
      'Built internal web app and tool suite for common support tasks, reducing support bottlenecks by up to 50% and increasing team scalability.',
      'As Applications Engineer, designed custom monitoring and control solutions for high-revenue clients including Tesla and GE. Contributed to the Tesla Microgrid project in American Samoa and grew APAC region sales by $1M+ in 2017 via a new device-integration roadmap.',
    ],
    assets: [
      {
        kind: 'image',
        src: '/assets/locusnoc-dashboard.png',
        alt: 'LocusNOC solar monitoring dashboard',
        caption: 'LocusNOC Dashboard',
      },
      {
        kind: 'image',
        src: '/assets/locusnoc-app.png',
        alt: 'LocusNOC mobile app',
        caption: 'LocusNOC App',
      },
      {
        kind: 'video',
        poster: '/assets/tesla-microgrid-poster.jpg',
        href: 'https://vimeo.com/347363332',
        alt: 'Tesla Microgrid in American Samoa video',
        caption: 'Tesla Microgrid · Ta’u',
      },
    ],
  },
  {
    company: 'Mars Inc.',
    location: 'Hackettstown, NJ',
    start: 'Aug 2013',
    end: 'Jan 2015',
    startYear: 2013,
    endYear: 2015,
    roles: [
      { title: 'Commercial Buying Operations Specialist', dateRange: '2013–2015' },
    ],
    bullets: [
      'Managed Corrugate packaging category ($100M+ spend) operational issues as a special-project manager.',
      'Ideated and implemented over $1.12M in sustainability-driven savings.',
      'Represented packaging on two brand activity teams covering 50+ new products and projects, including M&M’s® Crispy.',
      'Improved the packaging pricing model, delivering a 50% reduction in the team’s time expenditure.',
    ],
  },
  {
    company: 'Apple Inc.',
    location: 'Paramus, NJ',
    start: 'Sep 2011',
    end: 'Aug 2013',
    startYear: 2011,
    endYear: 2013,
    roles: [
      { title: 'Inventory Control Specialist', dateRange: '2011–2013' },
    ],
    bullets: [
      'Managed and developed a team of 10 inventory associates using Apple Retail Leadership training.',
      'Implemented rigorous in-store recycling, capturing 90% of inbound shipping materials.',
      'Increased the inventory team’s receiving efficiency by 33% through process standardization.',
      'Managed daily inventory worth in excess of $2M.',
      'Drove continuous process improvements that brought customer order wait time under 2 minutes.',
    ],
  },
  {
    company: 'Apple Inc.',
    location: 'Paramus, NJ',
    start: 'Aug 2008',
    end: 'Sep 2011',
    startYear: 2008,
    endYear: 2011,
    roles: [
      { title: 'Mac Genius', dateRange: '2008–2011' },
    ],
    bullets: [
      'Trained as an Apple Certified Macintosh Technician at corporate headquarters in Cupertino, CA.',
      'Recognized at the 2011 semi-annual all-market meeting for a 100% Net Promoter Score (NPS) in a quarter.',
      'Ranked in the Top 5 for Genius team NPS (95%) for three years at the #1 trafficked store in the market.',
      'Resolved 50+ critical in-store IT problems; recognized as the in-store “champion” by corporate IT.',
      'Reduced customer wait time for common repairs by 75%+ by implementing a network solution.',
    ],
  },
];
