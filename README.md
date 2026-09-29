# MAS Publishing Co. Official Website

Website for **MAS Publishing Co.** (`https://maspublishing.co`), an independent literary publisher based in California publishing novels by **Michael Silberman**.

## Featured Titles
1. **Catasterism** by Michael Silberman
   - Print ISBN: `979-8-9978965-1-5`
   - Format: Hardcover, Paperback, Ebook
2. **I Didn't Do Anything to Lose Except Try My Hardest: A Novel of Gambling, Family, and Memory** by Michael Silberman
   - Print ISBN: `979-8-9978965-0-8`
   - Format: Paperback, Ebook

---

## Website Structure
* `index.html` — Homepage featuring publisher overview, full catalog, author spotlight, and rights/press inquiries.
* `catasterism.html` — Dedicated title page with synopsis, metadata, and Chapter One excerpt.
* `iddatletmh.html` — Dedicated title page with synopsis, metadata, and "The Form" opening excerpt.
* `style.css` — Custom responsive, typography-forward design matching the MAS Publishing aesthetic.
* `assets/` — Book covers, high-resolution branding, and artwork.
* `CNAME` — Custom domain pointer for `maspublishing.co`.
* `.nojekyll` — Bypasses Jekyll processing for GitHub Pages deployment.

---

## Deployment & DNS Configuration (Spaceship.com)

1. **GitHub Pages Custom Domain:**
   - In GitHub repository settings: **Settings > Pages > Custom domain**, set to `maspublishing.co`.
   - Enable **Enforce HTTPS**.

2. **Spaceship DNS Records:**
   - **Type A** | Host: `@` | Value: `185.199.108.153`
   - **Type A** | Host: `@` | Value: `185.199.109.153`
   - **Type A** | Host: `@` | Value: `185.199.110.153`
   - **Type A** | Host: `@` | Value: `185.199.111.153`
   - **Type CNAME** | Host: `www` | Value: `<username>.github.io.`
