# resume-website

Personal resume / portfolio site, deployed to `resume.jameskocher.com`.

## Stack
- Next.js 15 (App Router, static export)
- Tailwind CSS
- TypeScript
- Hosted on GitHub Pages via GitHub Actions

## Local dev

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Fonts

The site uses **Source Sans 3** (Google Fonts) as the free open-source
counterpart to Adobe's **Myriad Pro**. Same x-height, very close letterforms.

To swap to actual Myriad Pro via Adobe Fonts:
1. In Adobe Fonts, create a kit containing Myriad Pro and add
   `resume.jameskocher.com` to the allowed domains.
2. Replace the Google Fonts `<link>` in `app/layout.tsx` with the Typekit
   `<script>` snippet Adobe gives you.
3. In `tailwind.config.ts` change `font-sans` and `font-serif` to
   `myriad-pro`.

## Editing content

All resume content lives in `content/`:
- `experience.ts` — positions, roles, bullets
- `projects.ts` — agentic AI projects
- `skills.ts` — skill chip groups
- `education.ts` — degrees
- `profile.ts` — name, contact links, summary

Edit those files; the components render from them automatically.

## Build (static export)

```bash
npm run build
# → produces ./out/ (static site)
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml` which builds and
publishes to GitHub Pages.

### One-time setup
1. Create a public GitHub repo, push this project to `main`.
2. In repo Settings → Pages, set **Source: GitHub Actions**.
3. In Squarespace DNS panel for `jameskocher.com`, add a CNAME record:
   - Host: `resume`
   - Target: `<your-github-username>.github.io`
4. In repo Settings → Pages, set Custom domain to `resume.jameskocher.com`
   and check "Enforce HTTPS" once the cert provisions.
