# Instructions for AI agents working on the My Kailua website

This file is for any AI coding agent (Claude, Cursor, ChatGPT, or others) that Brian or Danny connects to this repository. Read it before making changes.

## What this site is

My Kailua is a local media site for Kailua and the windward side of Oahu: news, stories, the Windward Weekly newsletter, a shop for local goods, and Biz Partners (promoted local businesses).

- Framework: Astro (static site). Hosting: Netlify, which rebuilds automatically on every push to `main`.
- Newsletter: beehiiv (external). Shop checkout: Shopify (external). The site links or embeds them.

## How to make the most common changes

Content lives in plain text files. Adding a file adds an item; deleting a file removes it.

| To add | Create a file in | Copy the format from |
|---|---|---|
| A story or news post | `src/content/stories/` | `sample-story-one.md` (use category `News` for news) |
| A Biz Partner | `src/content/businesses/` | `sample-business-one.md` |
| A shop product | `src/content/products/` | `sample-product-one.md` |
| A Windward Weekly recap | `src/content/weekly/` | `sample-issue.md` |

- File names become web addresses. Use lowercase words joined by hyphens, for example `kailua-farmers-market.md`.
- The fields at the top of each file are checked by `src/content.config.ts`. If the build fails, a field is probably missing or misspelled.
- Set `draft: true` to hide an item without deleting it.
- Files named `sample-*` are placeholders. Replace or delete them as real content arrives.

Menu items, site name, social links, the beehiiv link and the Shopify link are all in `src/config/site.ts`.

## Photos and video

- The shared Google Drive folder "My Kailua" is the media library. Pull originals from there.
- Before adding a photo, resize it: 1400 px wide for cards and stories, 2400 px for full width heroes. Save as `.webp` (and `.jpg` for the main hero). Put it in `public/media/photos/` and reference it as `/media/photos/name.webp`.
- Never commit original camera files or anything over about 20 MB. GitHub rejects files over 100 MB.
- Background video lives in `public/media/video/`. Keep loops under 30 seconds and about 15 MB, silent, H.264 MP4, with a 720p version for phones.
- Every image needs real alt text describing what is in it.

## Design rules (Aloha Vintage Poster style)

- Colors and fonts are tokens in `src/styles/global.css`. Use the tokens, do not hard code new colors.
- Fonts: DM Serif Display for headings, Josefin Sans for everything else.
- Photos get the `vintage` class for the soft aged look.
- Cards use the `Postcard` component in `src/components/`.
- Keep small text in `--coral-text`, not `--coral`, so it stays readable.

## Copy style

- Write in a warm, local, plain voice.
- Do not use dashes of any kind in site copy (no em dashes, en dashes or hyphens as punctuation). End the sentence and start a new one instead.
- Never invent news, quotes, prices or facts. Use a bracketed placeholder like `[Business name]` when something is unknown.

## Before you push

1. Run `npm install` once, then `npm run build`. It must finish without errors.
2. For anything bigger than a text or photo change, work on a branch and open a pull request. Netlify gives every pull request its own preview link.
3. Small content updates can go straight to `main`.
4. Write a clear commit message saying what changed.

## Launch checklist (for later)

When the real domain is connected: update `site` in `astro.config.mjs`, remove the noindex block in `netlify.toml`, and change `public/robots.txt` to allow crawling.
