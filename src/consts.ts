// Every open decision from website-plan.md lives here, in one place.
// Swap the placeholders and the whole site updates.

export const SITE_NAME = 'SomaFlow';
export const SITE_TAGLINE =
  'Guided breathing for a calmer nervous system — free, private, yours.';

// TODO(Anastasia): real Google Play listing URL once the app is live.
export const PLAY_STORE_URL = '';

// TODO(Anastasia): URL of the deployed web app.
export const WEB_APP_URL = '';

// Hero demo media, served from Cloudinary: f_auto/q_auto negotiate the
// best format and quality per browser (~144 KB vs the 3.3 MB source),
// w_576 caps at the recording's native width, and so_0 renders the video's
// own first frame as the poster image — no separate poster asset to keep
// in sync.
const DEMO_CLOUDINARY_BASE = 'https://res.cloudinary.com/dshb0v9pc/video/upload';
const DEMO_PUBLIC_ID = 'v1784965301/screen-20260725-172846-1784964510509_sugmhg';
export const DEMO_VIDEO_URL = `${DEMO_CLOUDINARY_BASE}/f_auto,q_auto,w_576/${DEMO_PUBLIC_ID}.mp4`;
export const DEMO_POSTER_URL = `${DEMO_CLOUDINARY_BASE}/so_0,f_auto,q_auto,w_576/${DEMO_PUBLIC_ID}.jpg`;

// Donations: a Stripe buy button embedded in src/pages/feedback.astro
// (test-mode ids — swap for live ones before launch).

export const PRIVACY_LAST_UPDATED = '13 July 2026';
