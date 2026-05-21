import { education } from '@/content/education';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="mb-10">
        <p className="eyebrow mb-3">Education</p>
        <h2 className="h-section">School</h2>
      </div>

      <ul className="space-y-8 max-w-readable">
        {education.map((d, i) => (
          <Reveal
            as="li"
            key={d.school}
            delay={i * 80}
            className="border-l-2 border-ink-100 pl-5"
          >
            <h3 className="font-serif text-xl text-ink-900 tracking-tight">
              {d.school}
            </h3>
            <p className="text-sm text-ink-500">{d.location}</p>
            <p className="mt-1 text-ink-800 font-medium">{d.degree}</p>
            {d.detail && (
              <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
                {d.detail}
              </p>
            )}
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
