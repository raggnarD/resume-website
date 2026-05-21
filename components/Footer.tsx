import { profile } from '@/content/profile';

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 mt-10">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-ink-500">
        <p>
          © {new Date().getFullYear()} James Kocher · Built with Next.js +
          Tailwind
        </p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-ink-900 transition-colors"
          >
            Email
          </a>
          <a
            href={profile.links.github}
            className="hover:text-ink-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            className="hover:text-ink-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
