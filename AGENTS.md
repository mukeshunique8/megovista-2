<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Megovista Architecture & Development Guidelines

> [!IMPORTANT]
> The following rules are MANDATORY for all code updates, refactors, and newly created components in this repository. Never divert from these standards.

---

## 1. Zero Hardcoded Colors at Component Level

- **Rule**: NEVER write raw, arbitrary hex color codes (e.g., `#0C0B14`, `#F4EFE6`, `#1C1A30`, `#FF5A36`, `#FFB800`, `#1D1D1F`, `#FFFFFF`) directly inside component JSX or inline styles.
- **Enforcement**:
  - Use semantic CSS variables and design tokens defined in `app/globals.css`:
    - Backgrounds: `bg-[var(--bg-primary)]`, `bg-[var(--bg-surface)]`, `bg-[var(--bg-panel)]`
    - Text: `text-[var(--text-main)]`, `text-[var(--text-muted)]`
    - Borders: `border-[var(--border-subtle)]`
    - Or named Tailwind tokens: `bg-ink`, `bg-cream`, `text-ink`, `text-cream`, `text-vermilion`, `text-gold`
  - When dual-mode explicit pairs are needed: use standard utility pairs such as `bg-white dark:bg-[#1C1A30]` and `text-[#1D1D1F] dark:text-[#F4EFE6]`.
  - **Color Palette Standards**:
    - Primary Accent: Warm Golden Amber (`#FFB800`, token `var(--color-gold)`)
    - Brand Highlight: Vermilion (`#FF5A36`, token `var(--color-vermilion)`)
    - Deep Dark: Ink Charcoal (`#0C0B14` / `#1C1A30`)
    - Light Background: Apple Off-White (`#F5F5F7` / `#FFFFFF`)
  - **Strictly Prohibited**: Never use raw light green/lime (`#D7FF3D`). Warm golden amber (`#FFB800`) is the approved accent.

---

## 2. Mandatory Dual Theme & Component Integration Standards

- **Rule**: Whenever any component is added or provided by the user, it MUST immediately be adapted to strictly reflect our app's theming system and design tokens:
  - **Full Dual Theme Support (Dark & Light Mode)**:
    - Never leave hardcoded light-only or dark-only colors (e.g., raw `bg-white`, `border-zinc-200`, `bg-black`, `text-zinc-800`).
    - Adapt all elements to support both themes seamlessly using semantic CSS variables (`bg-[var(--bg-surface)]`, `bg-[var(--bg-primary)]`, `text-[var(--text-main)]`, `text-[var(--text-muted)]`, `border-[var(--border-subtle)]`) or Tailwind dual-mode utilities (`dark:`).
  - **Primary & Secondary Color Theming**:
    - Interactive states, active indicators, masks, hover fills, and accents must use our designated primary and secondary tokens (`var(--primary)`, `var(--secondary)`, `bg-primary`, `text-primary-foreground`, `bg-secondary`, etc.).
  - **Megovista Data Integration**:
    - Replace all generic/dummy links, labels, titles, and placeholders with actual Megovista constants and copy from `src/content/megovista.ts` and `src/constants/routes.ts`.
  - **Incremental Integration**:
    - Integrate each component one by one with clean layout positioning.
    - Do not run `tsc` or `build` unless explicitly asked by the user.

---

## 3. Zero Hardcoded Text, Copy, Routes, and URLs

- **Rule**: NEVER hardcode text copy, section titles, subtitles, paragraph descriptions, button labels, badge texts, routes, external URLs, phone numbers, or emails inside JSX.
- **Enforcement**:
  - All content, copy, metric stats, milestones, leadership profiles, values, advantages, checklist items, and FAQs must be imported from `@/src/content/megovista` (or `@/content/megovista`).
  - All navigation links, section anchor IDs (`#story`, `#offer`, `#blueprint`, `#people`, `#faq`, `#contact`), and routes must be imported from `@/src/constants/routes` or `@/src/content/megovista`.
  - All company contact details (WhatsApp URL, Google Maps link, phone, email, address) must come from `companyContact` in `@/src/content/megovista`.
  - **Workflow**: If you need new text, cards, or routes, FIRST add the data structure to `src/content/megovista.ts` (or `src/constants/routes.ts`), then import and render it inside the component.

---

## 4. Scroll & Layout Integrity

- **Rule**:
  - Do NOT apply `overflow-x: hidden` or `overflow: hidden` to `html`, `body`, or parent scroll containers. Use `overflow-x: clip` to prevent horizontal scrolling without breaking CSS `position: sticky`.
  - Pinned/sticky scrollytelling viewports (e.g., Chapter 01) must maintain mathematically unified coordinate spaces (SVG aspect ratio matching HTML percentages).

---

## 5. Verification & Quality Gates

- Before completing any task:
  1. Run `pnpm exec tsc --noEmit` to verify 0 TypeScript errors (only when explicitly requested by user).
  2. Run `pnpm run build` on structural changes to ensure clean static prerendering (only when explicitly requested by user).
  3. Verify contrast and visual integrity in both Light and Dark modes.

---

## 6. Global Typography & Font Weight Hierarchy Standards

- **Core Aesthetic**: Clean, modern, refined Apple / Linear display typography.
- **Display Headlines**:
  - Use refined, elegant weights: `font-light` (300) to `font-normal` (400) for large display titles and hero headlines. Never use heavy, chunky black (800-900) weights.
  - Apply tight display tracking (`tracking-tight` / `-0.035em`) and tight line height (`leading-[1.05]`).
  - Accent lines use glowing gradient fills (e.g., icy cyan/blue to violet).
- **Body & Subtitles**:
  - `font-light` or `font-normal` (300-400), clean line height (`leading-relaxed`), and muted contrast (`text-[var(--text-muted)]`).
- **Controls & Badges**:
  - Pill containers with `font-medium` (500) to `font-semibold` (600), clean letter spacing.
