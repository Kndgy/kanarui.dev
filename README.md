# kanarui.dev

Rafli Ghani’s portfolio, built with Next.js and React. The interface adapts the palette, grid texture, selection markers, title treatment, and panels from [my NieR:Automata Design System](https://github.com/Kndgy/NieR-Automata-Design-System) into accessible native HTML and CSS.

## Development

```sh
npm ci
npm run dev
```

Production: `npm run build`, then `npm start`.

## Content

- `data/data.js`: three personal projects, Coral Island studio work, nine Minecraft contributions, experience, and skills.
- `portfolio/list.md`: original personal project list. The two Crafting Blueprint screenshots are copied into `public/portfolio` for serving.
- `public/bedrock`: trailer thumbnails from the supplied reference portfolio.
- `/resume`: printable résumé; use **Print / Save PDF** for a local copy.
- Existing `/pages/[id]` project routes and `/posts/[slug]` journal routes remain available. Project IDs 1–3 correspond to the personal projects; `/pages/4` contains Coral Island studio work and the supplied MobyGames credits link.

Minecraft contributions, trailer links, education, and experience are based on [the supplied résumé site](https://kan-temp-portoflio.netlify.app/). “Present” dates reflect that source. The JSX preview is a conceptual workflow illustration, not an in-browser converter. The design-system preview is rendered with CSS; only Crafting Blueprint uses supplied project screenshots.

The layout supports mobile, keyboard focus, reduced motion, and printing. Manrope and IBM Plex Mono are self-hosted with their licenses in `public/fonts`; no external font service or design-system runtime is required.
