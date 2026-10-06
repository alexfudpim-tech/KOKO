---
name: KOKO Design Lab
description: Four distinct demo storefront worlds; Maison KOKO is the default
colors:
  maison-ink: "#322b23"
  maison-accent: "#586444"
  maison-surface: "#f7f3ea"
  maison-line: "#ded4c5"
  maison-subtle: "#685d50"
  electric-ink: "#17171a"
  electric-accent: "#2554ec"
  electric-accent-hover: "#173abe"
  electric-surface: "#fff"
  electric-line: "#dfdfe3"
  electric-subtle: "#5f6068"
  electric-lime: "#dcff6a"
  electric-pink: "#fae2ed"
  electric-blue-soft: "#dfe8fe"
  gloss-ink: "#5a1634"
  gloss-accent: "#a52b56"
  gloss-surface: "#fffafc"
  gloss-line: "#e9d8df"
  gloss-subtle: "#715462"
  gloss-blush: "#f0d4df"
  gloss-stage: "#f7eff2"
  gloss-outline: "#d4b8c5"
  skin-ink: "#153d3c"
  skin-accent: "#096c65"
  skin-surface: "#fcfdfd"
  skin-line: "#dae4e3"
  skin-subtle: "#536968"
  skin-panel: "#eaf2f1"
  skin-stage: "#f1f5f4"
  skin-featured: "#d9e9e6"
  lab-bg: "#18191c"
  lab-tabs: "#2b2c31"
  lab-text: "#ceced4"
  lab-choice: "#dfff75"
  white: "#fff"
  search-neutral: "#f5f5f6"
typography:
  electric-display:
    fontFamily: "'Manrope Variable', sans-serif"
    fontSize: "clamp(44px, 4.5vw, 70px)"
    fontWeight: 850
    lineHeight: 1.05
    letterSpacing: "-.035em"
  gloss-display:
    fontFamily: "'Prata', serif"
    fontSize: "clamp(38px, 3.8vw, 60px)"
    fontWeight: 400
    lineHeight: 1.23
    letterSpacing: "-.03em"
  skin-display:
    fontFamily: "'Golos Text Variable', sans-serif"
    fontSize: "clamp(38px, 3.75vw, 57px)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-.035em"
  retail-body:
    fontFamily: "'Manrope Variable', sans-serif"
    fontSize: "16px"
  skin-body:
    fontFamily: "'Golos Text Variable', sans-serif"
    fontSize: "16px"
  button-label:
    fontSize: "14px"
    fontWeight: 650
    lineHeight: 1.3
  product-brand:
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: ".07em"
rounded:
  square: "0"
  skin-control: "4px"
  skin-stage: "6px"
  tab-item: "7px"
  tab-track: "8px"
  circle: "50%"
spacing:
  compact: "8px"
  panel-gap: "12px"
  phone-gutter: "16px"
  tablet-gutter: "20px"
  compact-desktop-gutter: "24px"
  desktop-gutter: "36px"
components:
  button-electric:
    backgroundColor: "{colors.electric-accent}"
    textColor: "{colors.white}"
    typography: "{typography.button-label}"
    rounded: "{rounded.square}"
    padding: "14px 28px"
  button-electric-hover:
    backgroundColor: "{colors.electric-accent-hover}"
  button-gloss:
    backgroundColor: "{colors.gloss-ink}"
    textColor: "{colors.white}"
    typography: "{typography.button-label}"
    rounded: "{rounded.square}"
    padding: "14px 28px"
  button-skin:
    backgroundColor: "{colors.skin-ink}"
    textColor: "{colors.white}"
    typography: "{typography.button-label}"
    rounded: "{rounded.skin-control}"
    padding: "14px 28px"
  search-electric:
    backgroundColor: "{colors.search-neutral}"
    textColor: "{colors.electric-ink}"
    padding: "0 14px"
    height: "46px"
  filter-electric-selected:
    backgroundColor: "{colors.electric-ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "12px 23px"
  card-stage-skin:
    backgroundColor: "{colors.skin-stage}"
    rounded: "{rounded.skin-stage}"
    height: "270px"
  smooth-tab:
    backgroundColor: "{colors.lab-tabs}"
    textColor: "{colors.lab-text}"
    rounded: "{rounded.tab-track}"
    height: "46px"
---

# Design System: KOKO Design Lab

## Overview

**Creative North Star: "Three Retail Worlds, One Beauty Shelf"**

KOKO Design Lab holds three additional, separately linkable storefront worlds for Russian-speaking beauty shoppers in Kazakhstan. It is a private comparison prototype, not a replacement of the incumbent KOKO store. The shared dark comparison toolbar sits outside the storefront identity; changing a world changes composition, typography, imagery treatment and controls, not just its accent.

Electric Market is confident campaign retail: oversized sans, cobalt statements, chartreuse punctuation and a modular mosaic. Gloss Atelier is a portrait-led beauty magazine: berry ink, blush planes and Prata editorial headlines. Skin Archive is a measured care archive: cold daylight, teal ink, Golos Text and ingredient-led rows. These descriptions capture the implemented concepts; they do not declare a winning brand identity.

**Key Characteristics:**

- Three independently composed retail worlds.
- Shared recognizable search, favorites and browser-only basket.
- Locally bundled type and image files.
- Responsive catalog and native dialog overlays.

Source of truth: `src/styles.css`, `src/App.jsx`, `src/catalog.js` and `src/components/smooth-tab.jsx`. This is a scan of built code, not a seed. Browser interaction was not authorized; this document does not certify a live-browser review.

## Colors

Frontmatter primitives are normative. The storefront scopes own `--ink`, `--accent`, `--surface`, `--line` and `--subtle`; never flatten those three sets into one global palette.

### Primary

- Electric cobalt: emphatic hero type, first catalog action, campaign brand rail and interaction feedback.
- Gloss berry: editorial accent, favorites and interaction feedback; deep berry ink carries mastheads and solid actions.
- Skin teal: calm interaction feedback; deep teal ink carries care typography and actions.

### Secondary

- Electric chartreuse: SPF discovery tile and rotated campaign sticker; soft pink and soft blue distinguish routine steps.
- Gloss blush: large editorial copy planes, with pale pink product stages.
- Skin water tones: care panel, product stages and the featured-product strip.

### Neutral

- Each world's own surface, line and subtle text colors support catalog density.
- Lab charcoal, white selected tab and lime saved-choice state belong only to comparison controls.

**The World Boundary Rule.** Keep each world's palette, type and composition together; shared commerce behavior is not permission to homogenize its visual language.

## Typography

Electric Market uses locally bundled Manrope Variable for oversized, heavy display and everyday retail text. Gloss Atelier pairs locally bundled Prata (Cyrillic and Latin, weight 400) for the wordmark, hero and editorial headings with Manrope for commerce metadata. Skin Archive uses locally bundled Golos Text Variable with lighter measured headings.

The frontmatter display roles describe desktop hero text. At the phone breakpoint, Electric becomes (31px, 850, 1.13), Gloss (32px, 400, 1.25), Skin (34px, 500, 1.15). Product names start at (17px, 600, 1.35) and become (13px) on phones; Skin uses weight (450). Shared section headings start at (34px); Skin uses (31px, 500), while Gloss uses Prata (34px, 400). Phone section headings are (24px), or (25px) in Gloss. Metadata is deliberately smaller than names and prices; do not enlarge editorial flourishes at its expense.

## Layout

All worlds share a commerce header, category discovery, four-column desktop product shelf/catalog, editorial section, secondary social section and footer. Large screens cap the storefront at (1680px) from a (1600px) minimum-width query. Gutters step from (36px) to (24px) at max (1100px), (20px) at max (800px), and (16px) at max (520px). Product grids become two columns at (800px).

- **Electric Market:** desktop mosaic uses copy, portrait and stacked product/SPF blocks, with columns (1fr 1.03fr .56fr), rows (300px 210px) and gap (12px). At (800px), it becomes a two-by-two campaign; at (520px), rows are (310px 130px), gap (8px), with copy beside the cropped portrait and two smaller actions below. Routine products stay in three columns on phones.
- **Gloss Atelier:** desktop is a full-width three-part editorial, columns (.95fr 1.24fr .86fr), height (535px). At (800px), the still-life hero column and the secondary editorial product column disappear, retaining copy plus portrait; phone hero height is (375px). Do not turn this composition into Electric's card mosaic.
- **Skin Archive:** desktop is an inset care panel, columns (1fr 1.05fr), rows (385px 110px); water photography spans the right side while a featured-product strip sits below copy. At (520px), it stacks copy, (235px) art and (90px) featured product. Ingredient discovery shifts from a title/list split to one column.
- **Shared phone commerce:** comparison toolbar becomes two rows at (520px), total height (101px), with full-width (42px) tabs. Search moves below wordmark/actions. Category navigation reveals more entries through the mobile menu. Cards use (205px) stages and full-width (44px minimum-height) add buttons. Product dialogs stack image then content; the basket becomes full-screen width.

These are observed responsive rules, not a claim that every control meets a (44px) target: favorite buttons are (31px) and quantity controls (32px) in the current build.

## Elevation & Depth

Storefront campaigns and product cards are flat. Depth comes from photography, large tinted planes, borders and packshots using multiply blending, not floating card shadows. Functional overlays are elevated: comparison toolbar (`0 3px 18px #00000014`), brand dropdown (`0 12px 24px #17171a12`), native dialog (`0 24px 75px #11182740`) and toast (`0 8px 35px #11182730`). Gloss's still-life tile uses a dark lower gradient for white editorial text; Skin's photo caption uses a translucent white strip.

## Shapes

Electric and Gloss retail actions, stage planes and filters are square. Gloss add-to-basket controls are fine outlined rectangles. Skin introduces restrained corner softness: control (4px), product stage and category tile (6px). Shared favorites and dialog-close controls are circular. Comparison track (8px), selected highlight (7px), saved-choice button and toast (6px) form a separate utility language.

## Components

### Buttons and filters

Primary actions are ink-filled with white text, padding (14px 28px) and minimum height (50px); Electric hero action is cobalt, with deeper cobalt hover. Other primary actions hover to their world's accent. Skin hero action has (4px) corners. Text actions use a fine underline. Category filters wrap, use line-colored borders, and switch to ink/white with `aria-pressed` when selected.

Gloss product add controls use a muted berry outline and turn deep berry/white on hover. Electric add controls are solid; Skin add controls use deep teal and (4px) corners. Product quantities are capped at (20); the add button is disabled at that limit. Disabled opacity is (.5).

### Search and navigation

Search is a labeled native search field with icon and submit action; neutral-gray fill in Electric, blush in Gloss and cool white-green with a line border and (4px) corners in Skin. Focus-within changes the search border. Other interactive elements use a cobalt (2px) outline with offset (5px). Navigation preserves catalog/categories, brand disclosure and a concept-specific editorial entry; mobile replaces the catalog button with a menu and reveals hidden categories on expansion.

Skin's «По составу» entry returns to its home view, then scrolls instantly to the ingredient archive after the next animation frame. The archive's scroll margin is (120px), keeping its title clear of the sticky comparison toolbar. Its ingredient rows open the corresponding toner, serum or cream category; they are not an unrelated brand search.

### Product card, preview and basket

Locally served product images use contain fitting; campaign photographs use cover fitting with intentional portrait crops. Electric stages use per-product tints; Gloss normalizes to pale pink and Skin to pale water. Heart toggles use `aria-pressed`, add actions change plus to check/quantity, and native dialogs provide product preview or a right-side basket. Escape, close button and outside-backdrop clicks dismiss overlays.

Six products and KZT prices are illustrative, not live inventory. Favorites, quantities and chosen concept persist only in this browser. Search, categories, price sorting, favorite views, quantity changes and removals are interactive; account/location controls are explanatory dialogs. There is no account service, order submission or payment. The main-site links remain external handoffs, not integrations.

### KokonutUI Smooth Tab

The comparison control is a real adaptation of KokonutUI Smooth Tab by Dorian Baffier (MIT), not a static imitation. It is controlled by the selected concept, measures selected-button width/offset with ResizeObserver, and moves a white highlight using a spring (stiffness 400, damping 32). Left/Right wrap between concepts; Home/End select edges and move focus; roving tabIndex and tab/tabpanel relationships are explicit. Reduced motion sets highlight duration to zero, with global transitions/animations disabled. The sidecar preview is static HTML/CSS; runtime keyboard and spring behavior lives in the React component.

### Imagery

The beauty portrait is an incumbent KOKO asset; other editorial photography is stock, with product packshots served locally. Do not label this set as newly generated artwork. The local ComfyUI endpoint refused connection, so no new generation succeeded. Asset provenance and specific source URLs belong with the image manifest, not invented marketing claims.

## Do's and Don'ts

### Do:

- Do keep each world's palette, type and composition together.
- Do retain visible demo-assortment, demo-price and no-payment disclosure.
- Do preserve local, labeled packshots with contain fitting and readable product metadata.
- Do retain keyboard focus and zero-duration reduced-motion behavior.

### Don't:

- Don't treat the comparison toolbar's dark skin as the storefront brand.
- Don't claim live stock, discounts, reviews, medical outcomes, accounts or payment integration.
- Don't imply new ComfyUI generation: its local connection was refused.
- Don't replace the incumbent KOKO store without a separate decision.

## Campaign and profile extension · 2026-10-05

The promotion section follows the first product shelf: large two-part Beauty Week poster, two photographic product edits, then a profile invitation. Electric uses cobalt/lime; Gloss uses berry/blush and Prata; Skin uses dark teal/mint and Golos. Preserve the visible 12px disclaimer that −15%/BEAUTY15 is only a non-operating campaign example and basket totals remain unchanged. Copy-code feedback must retain that warning and handle clipboard refusal. Product edits open actual demo detail/category surfaces. Campaigns stack on phones instead of shrinking into unreadable cards.

The profile is a separate `view=profile` front-end preview. It uses the existing KokonutUI SmoothTab, now with a configurable label, ARIA ID prefix and optional swatches. Profile tabs are overview, favorites and preview-care preferences. Tablet/mobile identity becomes a compact horizontal greeting; the content stays below it. Profile icon remains visible on phones, with 42×44px header controls. Show the real local basket/favorites, truthful empty order history and no invented loyalty balance. Preview preferences contain only validated enum values, live on this device, and report storage errors without clearing the current selection. No actual account, sign-in, personal-data form or server persistence is implied.

