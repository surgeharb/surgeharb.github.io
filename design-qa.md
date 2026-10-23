# Portfolio design QA

final result: passed

## Comparison targets

- Source: `surgeharb/ai-engineer-portfolio`, commit `bf79926`, rendered locally from its unchanged source. Visual truth: `docs/evidence/original-source-desktop.png` and `docs/evidence/original-source-mobile.png`.
- Implementation: production build of `surgeharb/surgeharb.github.io`, commit `6a2856a`. Screenshots: `docs/evidence/website-desktop.png` and `docs/evidence/website-mobile.png`.
- Desktop viewport: 1440 × 1000 CSS pixels, device scale factor 1. Source full-page image: 1440 × 1460 pixels. Implementation: 1440 × 2737 pixels.
- Mobile viewport: 390 × 844 CSS pixels, device scale factor 1. Source full-page image: 390 × 1785 pixels. Implementation: 390 × 3572 pixels.
- Density normalization: none needed. Each capture uses one image pixel per CSS pixel. No browser chrome or device frame is included.
- State: home page, dark theme, fonts loaded, no hover or keyboard focus. Keyboard focus is captured separately.

## Findings

No actionable P0, P1, or P2 visual findings remain.

The longer page is intentional. It adds the confirmed Preply role, six selected project entries, working project links, and a client contact section. It removes the source's sample platform achievements, unsupported technologies, generic social links, and unconfirmed location.

## Required fidelity surfaces

- Fonts and typography: Space Grotesk and JetBrains Mono match the source and load from local WOFF2 files. Heading sizes remain 48 pixels on mobile and 72 pixels on desktop, with the original 1.05 line height, weight, and tracking. The desktop H1 crop at `(296, 160, 1144, 387)` has a mean RGB pixel difference of zero against the source. The full role title appears in the Preply section. Project copy and the new contact section wrap cleanly on mobile.
- Spacing and layout: the original centered 896-pixel outer container, 24-pixel side padding, 112-pixel desktop top padding, 64-pixel mobile top padding, project grid, divider rules, rounded buttons, and section rhythm are preserved. Added project links increase row heights intentionally. No horizontal overflow occurs at 320, 390, 768, or 1440 CSS pixels.
- Colors and tokens: the original OKLCH background, foreground, muted text, lime primary color, border color, and 28-pixel dotted background grid are retained. The captured background is `oklch(0.16 0.01 150)` in both versions. Focus outlines use the same lime primary color.
- Image quality and assets: the source contains no hero or project imagery to reproduce. Fonts are copied locally with their OFL licenses. The original site identity icons remain. The generated social preview was checked at 1200 × 630 pixels and uses the new identity and copy.
- Copy and content: the site uses Serge Harb's confirmed title, company, email, projects, and broad stack. Preply work is ongoing activity, without invented start dates, performance figures, or private architecture. Snatched's fashion marketplace description and App Store ID match its public website and listing. Private project repositories are not linked.

## Comparison evidence

Source is on the left and implementation on the right in each comparison.

- Full desktop: `docs/evidence/comparison-desktop-full.png`.
- Full mobile: `docs/evidence/comparison-mobile-full.png`.
- Focused desktop hero: `docs/evidence/comparison-desktop-hero.png`.
- Focused mobile hero: `docs/evidence/comparison-mobile-hero.png`.
- Focused project rows: `docs/evidence/comparison-project-rows.png`. The numbering, three-column desktop alignment, typography, and borders match. Copy and project links account for the different row heights.

## Comparison history

The first visual comparison found no implementation defects. Before the final comparison, captures were normalized to remove retained hover and focus states. No visual code fixes were required after comparison.

## Browser and engineering validation

- Production page returns HTTP 200; missing routes return the themed HTTP 404 page.
- Keyboard skip link, selected-work anchor, visible focus states, GitHub profile, contact email, three project-specific email enquiries, three public project websites, and Snatched's App Store URL pass their checks.
- Title, canonical URL, Open Graph metadata and PNG, Twitter metadata, robots.txt, and sitemap.xml pass.
- Browser page errors, console errors, failed requests, and external runtime requests: zero.
- Lint, TypeScript, and the production build pass. Dependency installation reports zero vulnerabilities.
- Standards review: no actionable findings.
- Requirements review: no actionable findings.
- Browser assertions and measured viewport bounds: `docs/evidence/browser-checks.json`.

## Follow-up polish

No P3 visual findings. The owner's specific contribution to Snatched can be added when supplied. Its current description states product capabilities without claiming sole authorship.

## Implementation checklist

- [x] Capture desktop and mobile source evidence.
- [x] Compare full views and focused regions.
- [x] Check typography, spacing, colors, assets, and copy.
- [x] Test primary interactions, keyboard navigation, and responsive widths.
- [x] Check metadata, social preview, production build, and both code-review axes.

final result: passed
