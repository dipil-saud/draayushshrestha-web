---
name: Dr. Aayush Shrestha — Clinical Credibility Site
description: Conventional clinical-editorial design system; cool white, deep clinical navy, serif-meets-sans, flat and hairline-ruled.
colors:
  clinical-navy: "oklch(38% 0.14 255)"
  clinical-navy-deep: "oklch(30% 0.12 258)"
  navy-ink-on-accent: "oklch(99% 0.003 250)"
  paper: "oklch(99% 0.003 250)"
  paper-2: "oklch(96% 0.006 250)"
  surface: "oklch(100% 0 0)"
  ink: "oklch(20% 0.02 250)"
  body-text: "oklch(33% 0.015 250)"
  muted-text: "oklch(44% 0.015 250)"
  rule: "oklch(88% 0.008 250)"
  dark-ground: "oklch(20% 0.025 255)"
  dark-ground-2: "oklch(26% 0.03 255)"
  dark-ink: "oklch(96% 0.008 250)"
  focus: "oklch(55% 0.18 252)"
  focus-on-dark: "oklch(78% 0.13 250)"
typography:
  display:
    fontFamily: "Newsreader, ui-serif, Georgia, serif"
    fontWeight: 700
    fontSize: "clamp(2.8rem, 7vw, 5.25rem)"
    fontVariation: "opsz 6..72"
  headline:
    fontFamily: "Newsreader, ui-serif, Georgia, serif"
    fontWeight: 700
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    lineHeight: 1.1
  body:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    fontSize: "1.125rem"
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 600
    fontSize: "0.75rem"
    letterSpacing: "0.06em"
rounded:
  action: "0.375rem"
  pill: "999px"
  avatar: "50%"
spacing:
  2xs: "0.25rem"
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  2xl: "4rem"
  3xl: "6rem"
  4xl: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.clinical-navy-deep}"
    textColor: "{colors.navy-ink-on-accent}"
    rounded: "{rounded.action}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.clinical-navy}"
  button-light:
    backgroundColor: "transparent"
    textColor: "{colors.dark-ink}"
    padding: "0.75rem 1.5rem"
  text-link:
    textColor: "{colors.clinical-navy-deep}"
    typography: "{typography.body}"
---

# Design System: Dr. Aayush Shrestha — Clinical Credibility Site

## Overview

**Creative North Star: "The Clinical Journal"**

> The creative metaphor and atmosphere language below were inferred from PRODUCT.md and the user's canon + Mayo-Clinic peer choice; the qualitative interview was declined. Re-run `/impeccable document` to revise the voice.

This is a conventional clinical-editorial system in the Mayo register: a cool, near-white ground; a deep clinical-navy accent that carries authority; and a serif display (Newsreader) over a humanist sans body (IBM Plex Sans). It behaves like a peer-reviewed medical publication — hairline-ruled, tonal, and calm — built to make a Nepal orthopaedic and spine surgeon's expertise legible to anxious patients and evaluating clinicians alike.

Depth is structural, not decorative. There are no drop shadows anywhere in the system; separation is earned by 1px hairline rules, tonal steps between paper and paper-2, and a navy-charcoal dark used for the notice banner, the "What hurts?" body-map, and the footer. The single accent is rare and directional: it marks the booking action, the disclosure markers, and the focus ring, and otherwise stays out of the way. Warmth comes from the photography and human copy, never from the chrome.

**Confirmed anti-reference:** the warm teal palette this system replaced, and any expressive or arts-and-crafts visual world (Wayfinding/saffron, Lokta Press, Raku), were offered and declined for the conventional door.

**Key Characteristics:**
- Cool near-white ground, one committed clinical-navy accent, warm-neutral ink.
- Fully flat — hairline rules and tonal layering carry all depth; zero box-shadows.
- Serif display over humanist sans; fluid clamped display sizes.
- Mobile-first; two breakpoints; hairline-grid editorial composition.
- Restrained, state-only motion (120–420ms, exponential ease-out).
- Accessibility is a floor, not a feature: WCAG AA met with AAA-adjacent contrast.

## Colors

A restrained palette: cool neutrals carry the surface and text; one committed clinical navy does almost all the chromatic work, used in fields rather than scattered.

### Primary
- **Clinical Navy** (`oklch(38% 0.14 255)`): the system's only saturated color. Links, disclosure markers, list bullets, focus on dark. Rare and directional.
- **Clinical Navy, Deep** (`oklch(30% 0.12 258)`): the darker variant that owns whole regions — the notice banner, the primary button, the CTA, and the browser theme-color. Text-on-light and hover ground.

### Neutral
- **Paper** (`oklch(99% 0.003 250)`): the primary ground, a cool near-white.
- **Paper-2** (`oklch(96% 0.006 250)`): one tonal step down, used to separate alternate sections.
- **Ink** (`oklch(20% 0.02 250)`): headings; warm-neutral near-black.
- **Body Text** (`oklch(33% 0.015 250)`): running prose.
- **Muted Text** (`oklch(44% 0.015 250)`): metadata, captions, secondary labels (7.5:1 on paper).
- **Rule** (`oklch(88% 0.008 250)`): the 1px hairline that separates every region — the system's primary depth device.
- **Dark Ground** (`oklch(20% 0.025 255)`) / **Dark Ground-2** (`oklch(26% 0.03 255)`): navy-charcoal for the banner, body-map, and footer.
- **Dark Ink** (`oklch(96% 0.008 250)`): paper-bright text on dark grounds.

### Focus
- **Focus** (`oklch(55% 0.18 252)`): the 3px focus ring on light surfaces.
- **Focus on Dark** (`oklch(78% 0.13 250)`): the focus ring and kickers on dark grounds.

### Named Rules
**The One Accent Rule.** Clinical navy is the only saturated color on the surface. It is used in fields (banner, button, markers, focus) and stays rare; a second decorative hue is never introduced.
**The Tint-From-The-Hue Rule.** On the navy banner and dark grounds, secondary text is tinted toward navy/paper, never gray. Muted text only ever sits on the paper ground where it clears 4.5:1.

## Typography

**Display Font:** Newsreader (variable, opsz 6–72), with `ui-serif, Georgia, serif` fallback.
**Body Font:** IBM Plex Sans (400, 600), with `ui-sans-serif, system-ui, sans-serif` fallback.

**Character:** A literary clinical voice — Newsreader's optical-sizing serif gives headlines warmth and authority without preciousness; IBM Plex Sans keeps running text humanist and highly legible at small sizes. The pairing reads as a medical publication, not a marketing site.

### Hierarchy
- **Display** (Newsreader 700, `clamp(2.8rem, 7vw, 5.25rem)`, ~1.05): the page H1, one per route.
- **Headline** (Newsreader 700, `clamp(2rem, 5vw, 3.5rem)`, 1.1): section H2s and large dark-block headings.
- **Title** (Newsreader 700, ~1.953–2.441rem, 1.15): sub-section and card headings.
- **Body** (IBM Plex Sans 400, 1.125rem, 1.6): running prose; measure held to roughly 65–75ch via `.narrow`.
- **Label / Kicker** (IBM Plex Sans 600, 0.75rem, `0.06em`, often uppercase): category kickers and metadata.

### Named Rules
**The Two-Voice Rule.** Display roles are always Newsreader; body and UI are always IBM Plex Sans. Never set a heading in the sans or body copy in the serif.

## Layout

A mobile-first, hairline-grid editorial composition. The `.shell` container is `min(100% - 3rem, 78rem)` on mobile, widening to `min(100% - 4rem, 78rem)` at the first breakpoint. Two breakpoints only: `40rem` (640px) introduces multi-column grids and the desktop gutter; `60rem` (960px) reveals the primary nav, two-column splits, sticky condition rail, and three-to-four-column card grids. Display and headline sizes are fluid via `clamp()`. A fixed header (notice banner `2.5rem` + nav `4.5rem`) is offset everywhere with `scroll-margin-top`. Coarse-pointer viewports bump touch targets to 3rem. `overflow-x: clip` on the root prevents horizontal scroll. Density varies deliberately: dense condition tables earn quiet photographic splits beside them.

## Elevation & Depth

**This system is flat.** There are no `box-shadow` values anywhere in the codebase. Depth is conveyed three ways: 1px hairline rules (`--color-rule`) separate every region; tonal layering steps between paper, paper-2, and the navy-charcoal dark ground; and a single `backdrop-filter: blur(12px)` frosts the sticky guide-toolbar over content. The notice banner and footer read as grounded blocks through tonal contrast, not lift.

### Named Rules
**The Flat-By-Default Rule.** Never introduce a drop shadow to separate or elevate content. Use a hairline rule, a tonal step, or a dark ground. The only permitted blur is the sticky toolbar's frost.

## Shapes

Two form languages, used consistently. Actions and inputs carry a gentle `0.375rem` (6px) radius. Filter chips and avatars use a full pill (`999px`) or circle (`50%`). Cards and containers are square-cornered — separation is by hairline rule, never by a rounded card silhouette. Photography is rectangular and bleeds to the figure edge.

### Named Rules
**The Square-Card Rule.** Cards and content containers have no border-radius. Reserve the 6px radius for controls (buttons, inputs, the appointment link) and the pill for chips and avatars only.

## Components

### Buttons
- **Shape:** gentle radius (`0.375rem`).
- **Primary:** deep clinical-navy ground, navy-ink text, `0.75rem 1.5rem` padding; transitions background/color over 220ms.
- **Hover / Focus:** lightens to clinical-navy on hover; `:active` translates 1px down; focus ring is a 3px navy outline offset 3px.
- **Light:** transparent with a dark-ink border and dark-ink text, for use on dark grounds.

### Text Link
- Inline body links inherit an underline (`0.08em` thickness, `0.2em` offset); standalone `.text-link` actions are navy-deep with a trailing arrow.

### Disclosure (details / summary)
- Native `<details>`; the marker is hidden and replaced with a `+`/`−` glyph in navy, rotating through state. Used for FAQ, condition groups, and region guides — keyboard-accessible without JS. Summary rows are full-width hairline-divided, not card chrome.

### Guide Post (card)
- Square-cornered; a 16:9 media top, a hairline rule, then header (kicker, serif title link, updated date) and a bottom "Read article" row. The trailing link carries `tabindex="-1" aria-hidden="true"` so the whole card is a single tab stop via the title link. Hover scales the image `1.015`.

### Condition Rail (navigation)
- A sticky, hairline-divided list of zone links numbered `01–09`; each link is a 3rem-tall paper tile. This numbered-zone grammar is the signature navigation motif.

### Site Header
- Fixed; a dismissible clinical-navy notice banner retracts on scroll-down (translateY by `--banner-h`) and a paper nav bar with an underlined `aria-current` active state. Mobile hamburger syncs `aria-expanded` and closes on Escape with focus return.

### Guide Filter (chip)
- Pill (`999px`), transparent at rest; `aria-pressed` toggles to a navy-deep ground with navy-ink text. A live region announces the filtered count.

## Do's and Don'ts

### Do:
- **Do** keep clinical navy as the single saturated accent, used in fields (banner, button, markers, focus), never scattered as decoration.
- **Do** separate regions with 1px hairline rules and tonal steps between paper and paper-2.
- **Do** set every heading in Newsreader and every body/UI string in IBM Plex Sans.
- **Do** hold touch targets to 2.75rem minimum (3rem on coarse pointers) and keep contrast at or above 4.5:1.
- **Do** use native `<details>` for disclosures and number the condition zones `01–09`.

### Don't:
- **Don't** introduce a `box-shadow` to lift or separate content — the system is flat by design.
- **Don't** add a second decorative hue, a gradient, or warm-teal tones (the replaced palette is a confirmed anti-reference).
- **Don't** round cards or containers; reserve radius for controls, and the pill for chips/avatars.
- **Don't** set body copy in the serif or headings in the sans.
- **Don't** animate layout properties casually; motion is state-only, 120–420ms, exponential ease-out.
