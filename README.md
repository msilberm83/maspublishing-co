# MAS Publishing Co.

Static book website for **Catasterism** and **I Didn’t Do Anything to Lose Except Try My Hardest**, using the supplied covers and MAS Publishing Co. artwork.

## Preview

Run `python3 -m http.server 4173 --directory dist` from this folder, then open http://localhost:4173. You can also open `dist/index.html` directly. No install or build is required.

## Website files

- `dist/index.html` — book descriptions and reader dialogs containing short verbatim manuscript excerpts.
- `dist/styles.css` — responsive typography, layout, and reading view.
- `dist/script.js` — accessible native-dialog interaction.
- `dist/assets/` — supplied cover and publisher images.

The complete manuscripts are not included. Byline spelling follows each supplied cover: Michael Silberman for Catasterism and Mike Silberman for Try My Hardest.

## Publishing

The GitHub Pages workflow publishes only `dist/` when changes reach `main`. In the repository's Settings → Pages, select GitHub Actions as the source.

Intended custom domain: `maspublishing.co`. Connect it in Pages settings after domain ownership and DNS access are confirmed. A repository push alone does not connect this domain.

## Purchase links

The website clearly says “Purchase links coming soon” because confirmed retailer URLs have not been supplied. When those URLs are available, replace each availability message with a purchase link. Do not invent product IDs, prices, formats, or stock status.

## Rights

© 2026 MAS Publishing Co. / Michael Silberman. All rights reserved. No open-source license is granted for the book excerpts, artwork, or other site content.
