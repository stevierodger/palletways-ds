# PolySans Trial font files

The Palletways design system uses **PolySans Trial** from Figma with three cuts:

| Cut | CSS `font-weight` | Used for |
|-----|-------------------|----------|
| **Median** | 600–700 | Headings (H1–H6), buttons, tracker |
| **Neutral** | 400 | Body text, inputs |
| **Slim** | 300 | Tags, captions, small UI labels |

## 1. Add your files here

Copy your licensed font files into this folder (`public/fonts/`). The site loads them from `/fonts/…` at runtime.

### Required files (minimum)

Convert to **woff2** (preferred) or use the OTF/TTF you already have:

| File name | Cut | Notes |
|-----------|-----|-------|
| `PolySansTrial-Median.woff2` | Median | Headings; also used for weight 700 |
| `PolySansTrial-Neutral.woff2` | Neutral | Body copy |
| `PolySansTrial-Slim.woff2` | Slim | Tags and captions |

Optional fallbacks (same base names, different extension):

- `PolySansTrial-Median.woff` / `.otf`
- `PolySansTrial-Neutral.woff` / `.otf`
- `PolySansTrial-Slim.woff` / `.otf`

### If your files use different names

Rename them to match the table above, **or** edit the `url(...)` paths in `src/styles/fonts.css` to match your filenames.

Common source names from the foundry:

- `PolySansTrial-Median.otf`
- `PolySansTrial-Neutral.otf`
- `PolySansTrial-Slim.otf`

## 2. Convert OTF/TTF to woff2 (recommended)

woff2 is smaller and loads faster. If you only have OTF/TTF, either:

**Option A — use OTF directly**  
Place the `.otf` files with the names above. `@font-face` in `src/styles/fonts.css` already lists `.otf` as a fallback format.

**Option B — convert to woff2**

Using [fonttools](https://fonttools.readthedocs.io/) (Python):

```bash
pip install fonttools brotli
pyftsubset PolySansTrial-Median.otf --output-file=PolySansTrial-Median.woff2 --flavor=woff2
pyftsubset PolySansTrial-Neutral.otf --output-file=PolySansTrial-Neutral.woff2 --flavor=woff2
pyftsubset PolySansTrial-Slim.otf --output-file=PolySansTrial-Slim.woff2 --flavor=woff2
```

Or use a GUI tool such as [Transfonter](https://transfonter.org/) or [CloudConvert](https://cloudconvert.com/otf-to-woff2).

## 3. Verify fonts loaded

1. Run `npm run dev` and open [http://localhost:5173/#/typography](http://localhost:5173/#/typography).
2. Open DevTools → **Network** → filter by **Font**. You should see `200` responses for your woff2/woff/otf files (not 404).
3. On the Typography page, heading and body samples should look noticeably different from Geist Sans (PolySans has a wider, more geometric feel).
4. In DevTools → **Elements**, select a heading and check **Computed → Rendered fonts**. It should show **PolySans Trial** (Median), not Geist Sans.

If files are missing, the site still works — **Geist Sans** is the development fallback and no build step fails.

## 4. Licensing

Ensure your organisation holds a valid license for PolySans / PolySans Trial before deploying font files to production. Do not commit font files to a public repository unless your license allows it.

`@font-face` declarations live in `src/styles/fonts.css`. Token variables are in `src/styles/tokens.css`.
