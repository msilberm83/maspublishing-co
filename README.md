# MAS Publishing Co.

Story-focused public website at https://maspublishing.co/. All six titles are forthcoming and unreleased. No retail purchase links or announced release dates.

Uses the supplied, unchanged logo.png, manuscript-grounded setting illustrations, and short excerpts from the authoritative masters. Original generated PNGs, source citations, prompts, and the previous site backup live in the sibling MAS Publishing Site Art directory, outside the public web root. Existing cover assets remain preserved.

Static HTML/CSS; no build dependencies, external fonts, trackers, or nonfunctional signup form. GitHub Pages serves the root of main. Preview with python3 -m http.server 8765.

IMPORTANT: after manuscript revisions, refresh excerpts through ../MAS Publishing Site Art/build_site.py and verify EXCERPT_SOURCES.json against current masters before deployment.
