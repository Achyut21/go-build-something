# Acing your first hackathon

The slide deck for a 45-minute talk, built as a website instead of a slide file. One slide fills the viewport, the keyboard drives it, and every slide has its own URL.

Next.js (App Router) + TypeScript + Tailwind, with three shadcn/ui primitives (dialog, button, progress). No database, no API routes, no auth. `next build` emits a fully static site.

## Run it

```bash
pnpm install
```

```bash
pnpm dev
```

Then open http://localhost:3000. Add `?s=17` to land on slide 17.

```bash
pnpm build
```

Static output lands in `out/`. `pnpm lint` runs ESLint.

## Edit the slides

Every word on screen lives in `content/slides.ts`, in one array, in deck order. Nothing else needs touching to change copy, reorder slides, or add one.

A slide's position in the array is its slide number, so reordering changes the `?s=` links you may have already shared.

### Layout types

Each entry has a `type` that picks its layout. The discriminated union in `content/slides.ts` is the source of truth; TypeScript will tell you which fields a type needs.

| `type` | What it renders | Fields |
| --- | --- | --- |
| `title` | Opening slide, headline on a bottom baseline | `title`, `credentials[]` |
| `stack` | Short lines set large, hairline-parted, recessed heading | `heading`, `items[{ text, sub? }]` |
| `agenda` | Numbered sequence, two columns past four items | `heading`, `items[]`, `intro?`, `note?` |
| `bullets` | Marked list; `frame` picks the composition | `heading`, `frame`, `items[]`, `intro?`, `note?` |
| `prose` | Paragraphs with an optional row of chips | `heading`, `paragraphs[]`, `tokensLabel?`, `tokens?` |
| `quote` | Full-bleed amber, one big line | `heading`, `quote`, `notes[]` |
| `table` | Three-column table, stacks into blocks on phones | `heading`, `columns[3]`, `rows[][3]`, `note?` |
| `duo` | Two numbered panels side by side | `heading`, `panels[{ title, body }]`, `intro?`, `note?` |
| `doDont` | Two marked columns | `heading`, `columns[{ label, mark, items[] }]` |
| `closing` | Full-bleed amber, closing line plus a prompt | `line`, `prompt` |

`bullets` takes `frame: "stacked"` (heading on top, list below) or `frame: "split"` (heading left, list right). Set it so neighbouring bullet slides don't look alike. A `stacked` slide with five or more items splits into two columns on wide screens.

### Emphasis

Wrap a phrase in `**double asterisks**` in any string and it renders emphasised — amber on the dark slides, solid ink on the two amber ones.

### The background

Behind the dark slides sit a fixed diagonal wash, two very soft light sources
that drift on 78s and 104s loops, and a faint grain texture. It is all in
`components/backdrop.tsx` and the `.wash` / `.lamp` / `.grain` rules at the
bottom of `app/globals.css`. The two amber slides paint over it, so it never
shows there.

The drift is transform-only, so it composites on the GPU and costs nothing on
the main thread. It does still give a video encoder something to chew on, so
if a screenshare ever looks soft, press `B` to flatten it for the rest of the
talk. To remove it for good, delete the `<Backdrop />` line from
`components/deck.tsx`; the deck falls back to flat ink.

The drift freezes under `prefers-reduced-motion`, but the wash and grain stay,
so the depth survives without the movement.

### Colours and type

The palette and the type scale are Tailwind theme tokens in `app/globals.css`, under `@theme`. Change a hex there and it moves everywhere. The two typefaces load in `app/layout.tsx`.

## Keyboard

| Key | Does |
| --- | --- |
| `→` `↓` `Space` `Page Down` | Next slide |
| `←` `↑` `Shift+Space` `Page Up` | Previous slide |
| `Home` `End` | First or last slide |
| `O` | Overview grid of all 29 slides, click one to jump |
| `F` | Fullscreen |
| `B` | Background glow on/off |
| `?` | Shortcut list |
| `Esc` | Close the overview or the shortcut list |

Presentation clickers send Page Up and Page Down, so those are wired alongside the arrows.

Without the keyboard: clicking or tapping the right half of the screen goes forward, the left half goes back, and a sideways swipe works on a phone.

The current slide is written to the URL as `?s=12`, so reloading mid-talk lands on the same slide and a link points at one slide. It uses `replaceState`, so the browser's back button leaves the deck rather than stepping back a slide.

## Deploy to Vercel

1. Push the repo to GitHub.
2. In Vercel, **Add New → Project**, then import the repo.
3. Leave every build setting alone. Vercel detects Next.js; the framework preset, `pnpm install`, and `pnpm build` are all correct as-is, and there are no environment variables to add.
4. Deploy. Pushes to the default branch redeploy; pushes to any other branch get a preview URL.

`output: "export"` in `next.config.ts` makes the build fully static, so nothing runs on a server at request time.
