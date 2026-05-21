import { projects } from '@/content/projects';
import Reveal from './Reveal';

const statusStyle: Record<string, string> = {
  'In production': 'bg-accent-soft text-accent',
  'Internal tool': 'bg-ink-50 text-ink-700',
  POC: 'bg-ink-50 text-ink-700',
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="mb-8">
        <p className="eyebrow mb-3">Agentic AI Projects</p>
        <h2 className="h-section">Things I build with AI</h2>
        <p className="mt-4 body-lg max-w-readable">
          Production-grade and proof-of-concept workflows I’ve shipped using
          Claude Code, Cursor, and other agent frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <Reveal
            as="article"
            key={p.name}
            delay={i * 80}
            className="group relative rounded-2xl border border-ink-100 bg-surface p-6 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-serif text-xl text-ink-900 tracking-tight">
                {p.name}
              </h3>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase ${
                  statusStyle[p.status] ?? 'bg-ink-50 text-ink-700'
                }`}
              >
                {p.status}
              </span>
            </div>
            <p className="text-[15px] leading-relaxed text-ink-700">
              {p.blurb}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
