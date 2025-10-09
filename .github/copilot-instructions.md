# Copilot Instructions for dweb2 (Astro Course Site)

## Project Overview
- This is an Astro-based course site for "Design for the Web 2". It organizes lessons, homework, projects, resources, and student links.
- Content is structured in `src/content` (with subfolders for classes, projects, resources) and rendered via Astro components in `src/components` and pages in `src/pages`.

## Key Architecture & Data Flow
- **Content Collections**: Defined in `src/content.config.ts` using Astro's `defineCollection` and `glob` loaders. Collections include lessons, slides, assignments, resources, and projects. Each collection loads markdown files from specific folders and exposes them via Astro's content API.
- **Navigation**: The `SideNav.astro` component dynamically builds navigation from content collections and the student list (`students.js`).
- **Pages**: Dynamic routes (e.g., `/classes/[classID]/lesson`, `/projects/[slug]`, `/resources/[slug]`) render content from collections. See `src/pages` for entry points.
- **Styling**: Uses `@acab/reset.css` and custom CSS. Fonts are loaded via `@fontsource-variable/dm-sans` and `@fontsource/space-mono`.

## Developer Workflows
- **Install dependencies**: `npm install`
- **Start dev server**: `npm run dev` (default port: 4321)
- **Build for production**: `npm run build` (output: `dist/`)
- **Preview build**: `npm run preview`
- **Astro CLI**: `npm run astro ...` (e.g., `npm run astro -- --help`)
- **TypeScript**: Strict config via `tsconfig.json` (extends `astro/tsconfigs/strict`).
- **Netlify Deploy**: Configured via `netlify.toml` (timezone set, no custom build command).

## Project-Specific Patterns & Conventions
- **Content Organization**: Markdown files for lessons, slides, and homework are grouped by class in `src/content/classes/[classID]/`. Projects and resources follow similar patterns.
- **ID Generation**: Collection IDs are derived from file paths (see `generateId` in `content.config.ts`).
- **Student Links**: Managed in `src/content/students.js` and rendered in navigation.
- **Dynamic Sorting**: Lessons are sorted by date in navigation (`SideNav.astro`).
- **Component Usage**: Assignments are rendered via the `Assignment.astro` component, passing assignment objects from the collection.

## Integration Points
- **remark/unified/unist-util-visit**: Used for markdown processing (see `package.json` dependencies).
- **reveal.js**: Used for slide rendering (see `package.json`).

## Examples
- To add a new lesson: Place a markdown file in `src/content/classes/[classID]/lesson.md` and update `content.config.ts` if schema changes.
- To add a student: Edit `src/content/students.js`.
- To add a new project/resource: Place markdown in the appropriate folder and ensure collection loader pattern matches.

## References
- Main config: `astro.config.mjs`, `tsconfig.json`, `netlify.toml`
- Content definitions: `src/content.config.ts`
- Navigation: `src/components/SideNav.astro`
- Entry pages: `src/pages/`
- Student list: `src/content/students.js`

---
_If any section is unclear or missing, please provide feedback for further refinement._
