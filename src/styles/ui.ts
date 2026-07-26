// Shared Tailwind utility combos — plain strings, not CSS classes, so the
// rendered HTML contains only atomic utilities. Primary and secondary are
// separate full strings on purpose: mixing conflicting utilities (two bg-*)
// leaves the winner to stylesheet order.

const buttonBase =
  'inline-block cursor-pointer rounded-full px-7 py-3.5 font-bold no-underline transition-[filter] duration-200 ease-out';

export const button = `${buttonBase} bg-button text-button-label hover:brightness-108`;

export const buttonSecondary = `${buttonBase} border border-border-token text-ink hover:bg-card-surface`;

export const card = 'rounded-2xl bg-card-surface p-4 sm:p-6';
