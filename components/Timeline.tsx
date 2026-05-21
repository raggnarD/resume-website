import { experience, type Position } from '@/content/experience';
import Reveal from './Reveal';
import AssetGallery from './AssetGallery';

function years(positions: Position[]) {
  const earliest = Math.min(...positions.map((p) => p.startYear));
  const latest = new Date().getFullYear();
  const ticks: number[] = [];
  for (let y = latest; y >= earliest; y -= 1) ticks.push(y);
  return ticks;
}

export default function Timeline() {
  const tickYears = years(experience);
  const latestYear = tickYears[0];

  return (
    <section id="experience" className="section pt-4">
      <div className="mb-8 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="h-section">A career, end to end</h2>
        </div>
        <p className="text-sm text-ink-500 max-w-sm">
          17 years across solar SaaS, consumer mobile, and AI-native safety
          products at Amazon | Ring.
        </p>
      </div>

      <div className="relative">
        {/* spine */}
        <div
          aria-hidden
          className="absolute top-1 bottom-1 left-[6px] sm:left-[260px] w-px bg-gradient-to-b from-ink-200 via-ink-200 to-transparent"
        />

        <ol className="space-y-12 sm:space-y-16">
          {experience.map((pos) => (
            <li key={`${pos.company}-${pos.start}`} className="relative">
              {/* dot */}
              <span
                aria-hidden
                className={[
                  'absolute top-2 sm:top-2.5 left-0 sm:left-[254px]',
                  'h-[13px] w-[13px] rounded-full',
                  pos.endYear === 'present'
                    ? 'bg-accent animate-breathe motion-reduce:animate-none motion-reduce:ring-4 motion-reduce:ring-accent-soft'
                    : 'bg-bg ring-2 ring-ink-300',
                ].join(' ')}
              />

              <div className="pl-7 sm:pl-0 sm:grid sm:grid-cols-[240px_1fr] sm:gap-x-12">
                {/* LEFT column (desktop): year + assets */}
                <aside className="hidden sm:block sm:pr-6 sm:text-right">
                  <p className="font-mono text-xs text-ink-500 tracking-wider mb-4">
                    {pos.endYear === 'present' ? 'Present' : pos.endYear}
                    <span className="mx-1 text-ink-300">—</span>
                    {pos.startYear}
                  </p>
                  {pos.assets && pos.assets.length > 0 && (
                    <Reveal>
                      <AssetGallery
                        assets={pos.assets}
                        orientation="vertical"
                      />
                    </Reveal>
                  )}
                </aside>

                {/* RIGHT column (or full mobile) */}
                <div>
                  <div className="flex items-baseline justify-between flex-wrap gap-x-4 gap-y-1">
                    <h3 className="font-serif text-2xl text-ink-900 tracking-tight">
                      {pos.company}
                    </h3>
                    <p className="font-mono text-xs text-ink-500 uppercase tracking-wider sm:hidden">
                      {pos.start} — {pos.end}
                    </p>
                  </div>
                  <p className="text-sm text-ink-500 mt-0.5">{pos.location}</p>

                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-ink-700">
                    {pos.roles.map((r, idx) => (
                      <li key={r.title} className="flex items-center gap-2">
                        <span className="font-medium">{r.title}</span>
                        <span className="text-ink-400 text-xs">
                          ({r.dateRange})
                        </span>
                        {idx < pos.roles.length - 1 && (
                          <span className="text-ink-300">•</span>
                        )}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-ink-700 max-w-readable">
                    {pos.bullets.map((b, idx) => (
                      <Reveal
                        as="li"
                        key={idx}
                        delay={idx * 70}
                        className="relative pl-5"
                      >
                        <span
                          aria-hidden
                          className="absolute left-0 top-[10px] h-[5px] w-[5px] rounded-full bg-accent"
                        />
                        {b}
                      </Reveal>
                    ))}
                  </ul>

                  {/* MOBILE asset gallery (horizontal scroller) */}
                  {pos.assets && pos.assets.length > 0 && (
                    <div className="sm:hidden">
                      <Reveal delay={pos.bullets.length * 70}>
                        <AssetGallery assets={pos.assets} />
                      </Reveal>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <p className="sr-only">
        Years on the timeline: {tickYears.join(', ')}. Most recent year:{' '}
        {latestYear}.
      </p>
    </section>
  );
}
