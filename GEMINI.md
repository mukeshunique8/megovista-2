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

## 2. Mandatory Dual Theme Support (Dark & Light Mode)

- **Rule**: Every single component—both existing updates and new additions—MUST fully support both Light Mode and Dark Mode.
- **Enforcement**:
  - Never assume Dark Mode or Light Mode is the only default. All components must look polished and intentional in both themes.
  - **High Contrast Rule**:
    - In Dark Mode: Light text (`text-[#F4EFE6]`, `text-white`, `text-[var(--text-main)]`) on dark backgrounds/panels.
    - In Light Mode: Dark text (`text-[#1D1D1F]`, `text-[var(--text-main)]`) on light backgrounds/panels.
    - Never render dark text on dark cards or light text on light cards.
  - Form controls, cards, badges, buttons, borders, and SVGs must all have explicit light and dark styles.
  - Tailwind v4 uses `@custom-variant dark (&:where(.dark, .dark *));` in `app/globals.css`, so all `dark:` classes react to `.dark` on `<html>`.

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
  1. Run `pnpm exec tsc --noEmit` to verify 0 TypeScript errors.
  2. Run `pnpm run build` on structural changes to ensure clean static prerendering.
  3. Verify contrast and visual integrity in both Light and Dark modes.

