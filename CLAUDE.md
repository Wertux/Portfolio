@AGENTS.md

## Before You Start

Check the decision log before looking up memory or making any architectural, tooling, or workflow choice:

```
docs/decision-log.md
```

If a relevant decision exists, follow it. If you're about to make a non-obvious choice, log it there afterward.

## Component Development

When creating a new UI component, always generate both files:
- `ComponentName.tsx` — the component itself
- `ComponentName.stories.tsx` — Storybook stories covering all meaningful states and variants

Stories should:
- Use `tags: ['autodocs']` for automatic documentation
- Cover each significant prop variant (size, state, disabled, loading, error, etc.)
- Match variant naming to the Figma component structure where applicable
- Use `args` pattern (not render functions) unless interactivity requires it