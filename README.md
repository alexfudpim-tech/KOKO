# KOKO
KOKOTEST

## KOKO Design Lab

Three original cosmetics-store concepts: electric, gloss, skin. Mobile / desktop / auto UI selector, catalog, search, filters, product details, favorites, cart and demo profile.

Built preview is in the repository root (index.html, assets/, images/). Full editable application and design documentation are in source/.

### Publish website

Open Settings → Pages → Build and deployment → Source → GitHub Actions. Then open Actions → Publish KOKO preview → Run workflow (or re-run the latest job after enabling Pages).

Expected website URL after a successful deployment: https://alexfudpim-tech.github.io/KOKO/

Alternatively select Deploy from a branch, main, / (root) for the already built preview.

### Local development

In source/: npm ci, npm run dev. Build and verification: npm run build and npm run check.

Profile, promotions and checkout are demonstration UI. No live payment gateway, customer authorization or 1C integration is connected. Do not enter real payment information.

Previous manually uploaded root files are preserved for recovery; the preview uses the corrected assets/ and images/ structure.
