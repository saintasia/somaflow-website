# SomaFlow website

Static marketing/support site for the SomaFlow breathing app, built with
[Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com)
(CSS-first config via `@tailwindcss/vite` — no `tailwind.config.js`).
Visual language lives in `design.md`.

## Commands

```sh
npm install
npm run dev       # dev server at localhost:4321
npm run build     # static build → dist/
npm run preview   # serve the build locally
```

Audit performance against the **build** (`npm run build && npm run preview`),
not the dev server — dev ships Vite's client and the Astro dev toolbar,
which tank the numbers.

## Pages

| Path | Notes |
|------|-------|
| `/` | Landing — hero with the app demo video in a phone frame |
| `/privacy` | Doubles as the Play Store privacy-policy URL — must never move |
| `/research` | Structured placeholder; reference entries to be filled in |
| `/feedback` | Bug/idea form via Netlify Forms; donations card commented out |

## Forms

The feedback form is wired through **Netlify Forms**: `data-netlify` on the
`<form>` gets it registered at deploy time, and the page script POSTs
submissions URL-encoded (with the `form-name` field) without a reload.
Submissions land in the Netlify dashboard. This only works when the site
is hosted on Netlify — there is no fallback endpoint.

## Media

The hero demo video and its poster are served from **Cloudinary**, built in
[`src/consts.ts`](src/consts.ts) (`DEMO_VIDEO_URL` / `DEMO_POSTER_URL`):
`f_auto,q_auto` negotiate format/quality per browser (~144 KB delivered),
and `so_0` renders the video's own first frame as the poster — no separate
poster asset. The video ships without a `src` and only loads after the
page is idle; the poster paints first (it's the LCP) and fades out when
playback starts. Under `prefers-reduced-motion` the video never auto-loads.

## Before launch

Configurable values live in [`src/consts.ts`](src/consts.ts):

- **Google Play URL** (`PLAY_STORE_URL`) — empty shows a "Coming to Google
  Play" pill instead of a link.
- **Web app URL** (`WEB_APP_URL`) — empty hides the button.

The domain (`site` in `astro.config.mjs`, feeding canonical + OG URLs) is
set to `https://soma-flow.app`.

Also search the codebase for `TODO(Anastasia)`:

- `src/pages/feedback.astro` — the donations card (Stripe buy button) is
  commented out; uncomment to re-enable and swap the test-mode ids for
  live ones first. The Stripe script loads on the feedback page only, and
  `/privacy` discloses it.
- `src/pages/privacy.astro` — verify the Expo OTA update wording and the
  hosting statement before publishing.

## Hosting / caching

`public/_headers` (Netlify / Cloudflare Pages format) marks `/_astro/*`
as immutable — those filenames are content-hashed, so this is safe and
prevents fonts revalidating on every navigation (visible as a text
flash). If deploying elsewhere (Vercel, S3, nginx…), configure the
equivalent header there: `Cache-Control: public, max-age=31536000,
immutable` for `/_astro/*` — but note the feedback form requires Netlify.

Note: `astro dev` and `astro preview` serve everything with `no-cache`,
so page-to-page navigation refetches fonts locally — a local-server
artifact, not how production behaves. To preview with real caching:
`npm run build && npx http-server dist -p 8080 -c3600`.

## Design notes

- `src/styles/theme.css` is the Tailwind config (v4 CSS-first — `@theme`
  replaces `tailwind.config.js`), in three layers: the brand palette
  (the only place raw hex values exist — `aqua-*` light surfaces,
  `deep-*` dark surfaces, `teal-*` brand, `rose-*` destructive),
  semantic variables that flip via `prefers-color-scheme` (translucent
  surfaces derived with `color-mix`), and an `@theme inline` mapping
  into utilities (`text-ink`, `bg-card-surface`, `text-primary`, …).
  Type scale (`text-hero` … `text-caption`), layout (`max-w-content`,
  `my-section`), and the breathing-ring sizes are all named theme
  tokens — markup contains no raw px/em/hex values.
- No component CSS classes — the rendered HTML is utilities only.
  Shared combos (button, secondary button, card) are exported strings in
  `src/styles/ui.ts`; `src/styles/global.css` holds only element base
  styles (typography, gradient, focus, reduced-motion).
- Several tokens deliberately deviate from the app's for WCAG AA (4.5:1)
  over the web gradient: muted text is teal-800 at 0.96 alpha (app uses
  0.6), links are `--link` (82% teal-800 into teal-600), and the button
  fill mixes 44% teal-800 into teal-600. Each is the minimum shift that
  passes on every gradient stop — check contrast before lightening any
  of them.
- Inclusive Sans is self-hosted via Fontsource (no third-party requests,
  which the privacy page states).
- The OG image (`public/og-image.png`, 1200×630) is a rendered composition:
  Inclusive Sans, the site gradient, and the demo video's Cloudinary first
  frame in a phone mockup. Regenerate after re-recording the demo.
