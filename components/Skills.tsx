import { skills } from '@/content/skills';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mb-8">
        <p className="eyebrow mb-3">Skills</p>
        <h2 className="h-section">Toolbox</h2>
      </div>

      <dl className="space-y-7">
        {skills.map((group, i) => (
          <Reveal
            key={group.label}
            delay={i * 60}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr] md:gap-x-12 gap-y-2"
          >
            <dt className="font-mono text-xs uppercase tracking-wider text-ink-500 md:pt-1">
              {group.label}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-ink-100 bg-surface px-3 py-1 text-sm text-ink-700"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
