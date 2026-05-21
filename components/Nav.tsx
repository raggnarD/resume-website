import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-bg/75 border-b border-ink-100">
      <nav className="mx-auto max-w-5xl px-6 sm:px-8 h-14 flex items-center justify-between gap-6">
        <a
          href="#top"
          className="font-serif text-lg tracking-tight text-ink-900 hover:text-accent transition-colors"
        >
          James Kocher
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex items-center gap-7 text-sm text-ink-600">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-ink-900 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
