# My Kailua

The website for My Kailua, news and stories from the windward side of Oahu.

## How it works

1. **GitHub** (this repository) holds the master copy of the site.
2. **Netlify** watches this repository and republishes the site about a minute after every change to `main`.
3. **You edit through an AI agent of your choice** connected to this repository. Agents should read `AGENTS.md` first.
4. **Google Drive** (the shared "My Kailua" folder) is where raw photos and video are dropped.
5. **beehiiv** sends the Windward Weekly. **Shopify** handles shop checkout.

## Common edits

- New story: add a file to `src/content/stories/`
- New Biz Partner: add a file to `src/content/businesses/`
- New product: add a file to `src/content/products/`
- Menu, links, site name: `src/config/site.ts`
- Colors and fonts: `src/styles/global.css`

## Running it on a computer (optional)

```
npm install
npm run dev
```

Then open http://localhost:4321.
