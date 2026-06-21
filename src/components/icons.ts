// Hand-crafted inline SVG icon set — 24×24, drawn with `currentColor` so each
// icon inherits the role/team colour from its parent. These replace the emoji
// the landing used before, giving the page a real, consistent icon language.
// Filled details (dice pips, skull eyes, play triangle) set their own fill.

export type IconName =
  // role icons
  | "crown" | "crosshair" | "search" | "shield" | "cross" | "sword"
  | "heart" | "scales" | "eye" | "dice" | "bomb" | "skull" | "user"
  // ui / feature icons
  | "zap" | "mic" | "users" | "sparkles" | "telegram" | "devices"
  | "play" | "arrow-down" | "moon";

export const ICONS: Record<IconName, string> = {
  // ── Roles ──────────────────────────────────────────────
  crown: `<path d="M4 17.5 2.7 7.4l5.3 3.6L12 4.3l4 6.7 5.3-3.6L20 17.5z"/><path d="M5 20.7h14"/>`,
  crosshair: `<circle cx="12" cy="12" r="8.2"/><path d="M12 1.4v3.6M12 19v3.6M1.4 12H5M19 12h3.6"/><circle cx="12" cy="12" r="2"/>`,
  search: `<circle cx="10.5" cy="10.5" r="6.6"/><path d="M15.6 15.6 21 21"/>`,
  shield: `<path d="M12 2.4 4.8 5.4v5.6c0 4.5 3 7.7 7.2 9.2 4.2-1.5 7.2-4.7 7.2-9.2V5.4z"/><path d="m8.8 11.6 2.1 2.1L15.4 9"/>`,
  cross: `<rect x="3.4" y="3.4" width="17.2" height="17.2" rx="4.6"/><path d="M12 7.8v8.4M7.8 12h8.4"/>`,
  sword: `<path d="M14.5 17.5 3 6V3h3l11.5 11.5"/><path d="m13 19 6-6"/><path d="m16 16 4 4"/><path d="m19 21 2-2"/>`,
  heart: `<path d="M12 20.6C5.4 16.5 2.4 12.6 2.4 8.9A4.6 4.6 0 0 1 12 6.5 4.6 4.6 0 0 1 21.6 8.9c0 3.7-3 7.6-9.6 11.7Z"/>`,
  scales: `<path d="M12 4.4v15.2"/><path d="M7.8 19.6h8.4"/><path d="M4.4 7.6h15.2"/><path d="M4.4 7.6 1.8 13.2h5.2z"/><path d="M19.6 7.6 17 13.2h5.2z"/>`,
  eye: `<path d="M2 12s3.7-6.9 10-6.9S22 12 22 12s-3.7 6.9-10 6.9S2 12 2 12Z"/><circle cx="12" cy="12" r="2.9"/>`,
  dice: `<rect x="3.4" y="3.4" width="17.2" height="17.2" rx="4.2"/><g fill="currentColor" stroke="none"><circle cx="8.4" cy="8.4" r="1.15"/><circle cx="15.6" cy="8.4" r="1.15"/><circle cx="12" cy="12" r="1.15"/><circle cx="8.4" cy="15.6" r="1.15"/><circle cx="15.6" cy="15.6" r="1.15"/></g>`,
  bomb: `<circle cx="10.5" cy="14" r="6.6"/><path d="M15.3 9.2 17.6 6.9"/><path d="M16.6 6.4h2.6"/><path d="M19.2 6.4V3.8"/><path d="m20.8 7.8 1.4-.3M20.2 4.4l1.1-1"/>`,
  skull: `<path d="M19 13.6c0 2-1.2 3.5-3 4.3V20a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.1c-1.8-.8-3-2.3-3-4.3 0 0-.5-1-.5-3C4.5 6.8 7.8 3.4 12 3.4s7.5 3.4 7.5 7.2c0 2-.5 3-.5 3Z"/><circle cx="9" cy="12" r="1.7" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1.7" fill="currentColor" stroke="none"/><path d="M10.2 21v-2.4M13.8 21v-2.4"/>`,
  user: `<circle cx="12" cy="8" r="4"/><path d="M4.6 20.4c0-3.6 3.3-6 7.4-6s7.4 2.4 7.4 6"/>`,

  // ── UI / features ──────────────────────────────────────
  zap: `<path d="M13 2 4 13.6h6.6L10 22l9-11.6h-6.6L13 2Z"/>`,
  mic: `<rect x="9" y="2.5" width="6" height="11.5" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0"/><path d="M12 17.5V21"/><path d="M8.5 21h7"/>`,
  users: `<circle cx="9" cy="8" r="3.6"/><path d="M2.6 20c0-3.4 2.9-5.7 6.4-5.7S15.4 16.6 15.4 20"/><path d="M16.4 4.7a3.6 3.6 0 0 1 0 6.6"/><path d="M18 14.7c2.2.6 3.4 2.4 3.4 5.3"/>`,
  sparkles: `<path d="M12 3l1.9 4.9 4.6 1.8-4.6 1.8L12 16.4l-1.9-4.9L5.5 9.7l4.6-1.8z"/><path d="m18.6 14 .9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9z"/>`,
  telegram: `<path d="M21.6 3.5 2.6 11c-.5.2-.5.9 0 1.1l4.7 1.5 1.8 5.7c.1.4.6.5.9.2l2.5-2.5 4.6 3.4c.3.3.8.1.9-.3l3.4-15c.1-.5-.4-1-.9-.8Z"/><path d="m7.3 13.6 9.6-6.4-7 7.6"/>`,
  devices: `<rect x="2.4" y="4.4" width="12.6" height="9" rx="2"/><path d="M6 17h5M8.5 13.4V17"/><rect x="14.6" y="9.4" width="7" height="11.6" rx="2"/><path d="M17.6 18h1"/>`,

  // ── Misc UI ────────────────────────────────────────────
  play: `<path d="M7 4.4 19.6 12 7 19.6z" fill="currentColor" stroke="none"/>`,
  "arrow-down": `<path d="M12 4.5v15M6 13.5l6 6 6-6"/>`,
  moon: `<path d="M20.5 14.3A8.5 8.5 0 1 1 9.7 3.5a6.8 6.8 0 0 0 10.8 10.8Z"/>`,
};
