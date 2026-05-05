# Decision Log

A running log of key decisions made in this project. Add entries when a non-obvious choice is made so future sessions don't re-derive the same conclusions.

---

## Entry format

```
### [Area] Short title
**Date:** YYYY-MM-DD
**Decision:** What was decided.
**Why:** The reason or constraint that drove it.
**Alternatives considered:** What else was on the table (optional).
```

---

### [Stack] No third-party UI component library
**Date:** 2025-04-16
**Decision:** Build all UI components from scratch — no shadcn, Radix, MUI, etc.
**Why:** Full control over design tokens, visual identity, and Figma Code Connect parity. A library would impose its own token and structure assumptions.

---

### [Stack] Never use useMemo / useCallback
**Date:** 2025-04-16
**Decision:** Do not write `useMemo` or `useCallback` anywhere in the codebase.
**Why:** `reactCompiler: true` is enabled — the React Compiler handles memoisation automatically. Manual memoisation is redundant and adds noise.

---

### [Stack] All values via design tokens — never hardcode colours, spacing, or fonts
**Date:** 2025-04-16
**Decision:** Every colour, spacing step, and font value must reference a token from `src/tokens/`. No raw hex, px, or font-family strings in component files.
**Why:** Single source of truth for the design system; Figma tokens map directly to Tailwind via `@theme inline` in `globals.css`.

---

### [Stack] Token structure: three CSS files under src/tokens/
**Date:** 2025-04-16
**Decision:** Tokens live in `src/tokens/{colors,typography,spacing}.css`, imported in `globals.css`, and surfaced to Tailwind via `@theme inline`.
**Why:** Keeps token definitions co-located, makes Tailwind v4's CSS-first config work cleanly, and lets Figma Code Connect reference the same token names.

---

### [Stack] reactCompiler config at root level of NextConfig
**Date:** 2025-04-16
**Decision:** `reactCompiler: true` is set at the root of `next.config.*`, not under `experimental`.
**Why:** Next.js 16 API change — `experimental.reactCompiler` no longer exists. Placing it under `experimental` silently does nothing.

---

### [Stack] Google Fonts removed from layout.tsx
**Date:** 2025-04-16
**Decision:** No Google Fonts import in `layout.tsx`. Fonts will be wired up via `--font-display` / `--font-body` tokens once Figma typography is finalised.
**Why:** Avoid committing to a font before the Figma design is ready; hardcoding a font now would require a second pass to swap tokens.

---

### [Content] MDX case studies under src/content/case-studies/
**Date:** 2025-04-16
**Decision:** Case study content is written in MDX and lives at `src/content/case-studies/[slug].mdx`. The route is `src/app/case-studies/[slug]/page.tsx`.
**Why:** MDX allows rich content authoring while keeping case studies as files in the repo, avoiding a CMS dependency.

---

### [Figma] .figma.tsx files co-located with components; PLACEHOLDER_FIGMA_URL until nodes exist
**Date:** 2025-04-16
**Decision:** Every component gets a `ComponentName.figma.tsx` file alongside it. The `figmaUrl` field is set to `PLACEHOLDER_FIGMA_URL` until the corresponding Figma node is built.
**Why:** Scaffolds Code Connect links early so they can be filled in incrementally. A placeholder is greppable and won't silently break the connect config.

---

### [Workflow] Code-first, design-second
**Date:** 2025-04-16
**Decision:** Build components with correct structure and token references before applying final visual design. Visual polish comes once Figma components are ready.
**Why:** Avoids having to redo structural work after design is finalised. Tokens ensure the visual layer can be applied in one pass.

---

### [CI] Accessibility check on every push to main
**Date:** 2025-04-16
**Decision:** `.github/workflows/accessibility.yml` runs axe-core against the built site on every push to `main`.
**Why:** Catch regressions automatically; accessibility is a non-negotiable requirement for a public portfolio.

---

### [Components] Always generate .tsx + .stories.tsx together
**Date:** 2025-04-16
**Decision:** Every new UI component must have both `ComponentName.tsx` and `ComponentName.stories.tsx` created at the same time.
**Why:** Ensures Storybook coverage stays complete and avoids the story becoming an afterthought. Stories use `tags: ['autodocs']` and cover all meaningful prop variants.

---

### [Storybook] Use args pattern; render functions only when interactivity requires it
**Date:** 2025-04-16
**Decision:** Stories default to the `args` pattern. A render function is only used when the story needs internal state or interaction that `args` can't express.
**Why:** `args` keeps stories concise, composable, and compatible with autodocs controls.
