# Design System – Gymnastics Evening TV Frutigen 2028 «Ab ads Turnfescht»

> This file is the binding design reference for the gymnastics evening website.

> Applies **only** to this project (not to the entire TV Frutigen).

> Claude Code should use colors, fonts, and component rules from this file,
> without having to reinvent them for every new screen/component.

## 1. Colors (CSS Custom Properties)

Always include colors via CSS variables, never hardcode hex values into components:

```css
:root {
    /* Main color */
    --color-green: #034001; /* Logo, header, title, primary structure */
    --color-green-contrast: #FFFFFF;

    /* Secondary / Text */
    --color-anthracite: #252624; /* Body text, footer, borders */
    --color-anthracite-contrast: #FFFFFF;

    /* Accents – sparingly, max. ~10% of the area */
    --color-yellow: #F2E205; /* Primary CTA, highlights */
    --color-yellow-contrast: #252624;
    --color-orange: #F2A444; /* Secondary CTA, quotes/borders */
    --color-orange-contrast: #252624;

    /* Base */
    --color-black: #0D0D0D; /* Default text color */
    --color-bg: #FFFFFF; /* Base area */
    --color-bg-subtle: #F7F7F6; /* Alternative light area, e.g., section transition */
    --color-border: #E8E8E6;
}
```

**Distribution Rule (60-30-10):** ~60% white/light gray as the main color, ~30% green/anthracite for structure and text, ~10% yellow/orange exclusively for targeted accents (buttons, badges, highlights).

**Contrast Rules (strict, non-negotiable):**

- Text on yellow or orange → always `--color-anthracite` or `--color-black`, never white.
- Text on green, anthracite, or black → always white.
- Never use yellow as a large area color for text blocks (contrast too weak) – only as a button/badge/thin accent.
- Do not use yellow and orange next to each other in the same size.
- Maximum 3 colors active per screen/component (e.g., white + green + yellow).

## 2. Typography

```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@400;600&display=swap');

:root {
    --font-heading: 'Montserrat', Arial, sans-serif; /* Bold/ExtraBold, often uppercase */
    --font-body: 'Open Sans', Arial, sans-serif; /* Regular/Semibold */
}
```

| Element              | Font             | Weight  | Size (Recommended)                                  |
|----------------------|------------------|---------|-----------------------------------------------------|
| H1                   | `--font-heading` | 700–800 | 2–2.5rem, often UPPERCASE                           |
| H2                   | `--font-heading` | 700     | 1.5–1.75rem                                         |
| Body Text            | `--font-body`    | 400     | 1rem, line-height 1.5                               |
| Button Label         | `--font-heading` | 700     | 0.9–1rem, UPPERCASE, slightly raised letter spacing |
| Small Print / Footer | `--font-body`    | 400     | 0.8rem                                              |

## 3. Component Rules

**Header/Navigation**

- Background: `--color-green` or `--color-anthracite`, white text.
- Logo left-aligned, navigation right-aligned or centered.

**Primary Button (e.g., "Tickets," "Program")**

```css
background: var(--color-yellow);
color: var(--color-anthracite);

font-family: var(--font-heading);
font-weight: 700;

text-transform: uppercase;
```

Alternative: `--color-orange` with `--color-anthracite` text if a second, visually distinct call to action (CTA) is needed (e.g., primary = yellow "Tickets," secondary = orange "Program").

**Secondary Button / Link**

```css
background: transparent;
color: var(--color-green);
border: 2 px solid var(--color-green);
```

**Sections**

- Alternating `--color-bg` (white) and `--color-bg-subtle` (#F7F7F6) for rhythm; no colored section backgrounds.
- Dark sections (e.g., countdown, highlight quote) in `--color-green` or `--color-anthracite` with white text and optionally a yellow/orange accent (frame, icon, number).

**Footer**

- `--color-anthracite` area, white text, similar to letterhead: club name/gymnastics evening title, address, links.

**Images**

- Action photos: subtle green or anthracite gradient/overlay at the bottom of the image if text is overlaid (for readability).
- Icons: consistently `--color-green` or `--color-anthracite`; Specimen badges (e.g., "Tickets on sale") in yellow/orange.

## 4. Assets

- Logo: `Logo_TV_transparent_RGB.png` (transparent background, square, scale for header/favicon/social media).
- Claim: **"Ab ads Turnfescht!"** – used as a headline element/logo, in `--font-heading`, usually in yellow or white on a dark background.

## 5. Not part of this document

Rules for letterhead, email signatures, and Instagram feed design are described in the separate CI concept (Word) and are not relevant to the website code.
