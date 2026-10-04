// Shared Tailwind utility combos — plain strings, not CSS classes, so the
// rendered HTML contains only atomic utilities. Primary and secondary are
// separate full strings on purpose: mixing conflicting utilities (two bg-*)
// leaves the winner to stylesheet order.

const buttonBase =
  'inline-flex cursor-pointer items-center justify-center rounded-full font-bold no-underline transition-[filter] duration-200 ease-out';

const buttonSize = 'gap-2 px-7 py-3.5';

const secondarySkin = 'border border-border-token text-ink hover:bg-card-surface';

export const button = `${buttonBase} ${buttonSize} bg-button text-button-label hover:brightness-108`;

export const buttonSecondary = `${buttonBase} ${buttonSize} ${secondarySkin}`;

export const buttonSecondaryCompact = `${buttonBase} gap-1.5 px-4 py-2 text-sm ${secondarySkin}`;

export const card = 'rounded-2xl bg-card-surface p-4 sm:p-6';
