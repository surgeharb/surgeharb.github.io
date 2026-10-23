# Serge Harb

Personal website at https://sergeharb.com. The interface comes from the Lovable project in `surgeharb/ai-engineer-portfolio`, commit `bf79926`. This repository keeps the existing Next.js deployment.

## Run locally

Use the Node.js version in `.nvmrc`.

```sh
npm ci
npm run dev
```

## Check a change

```sh
npm run lint
npm run typecheck
npm run build
```

## Update the content

Edit `data/portfolio.ts` for contact details, project descriptions, project URLs, and technologies. Edit `app/page.tsx` for the introduction and Preply section.

The Preply section describes current work. It does not claim measured outcomes or disclose internal architecture. Projects without a verified public URL link to an email enquiry. Do not link private repositories from the public site.

The Space Grotesk and JetBrains Mono fonts are stored in `assets/fonts/` with their SIL Open Font License files. The site does not fetch fonts from Google at runtime.

## Deploy

Push `main` to the existing `surgeharb/surgeharb.github.io` repository. The Vercel project is `surgeharb-github-io`, with the domain `sergeharb.com`. `vercel.json` sets the Next.js framework, `npm ci`, and the production build command. `package.json` selects Node.js 24.

The `archive` branch preserves the previous website at `f489de963245f796bdc8f8153749edd36e2cded3`. Preserve published history. To restore that interface, create a new commit on `main` from the archived files.
