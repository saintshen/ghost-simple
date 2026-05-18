# Simple Ghost Theme - Project Context

This project is a Ghost CMS theme designed for simplicity and performance. It uses a modern development workflow with Rollup and PostCSS.

## Project Overview

- **Main Technologies:** Ghost CMS, Handlebars (.hbs), Rollup, PostCSS, JavaScript (ESM).
- **Key Features:**
  - Ghost custom fonts support.
  - Live reload during development.
  - Modern JavaScript with ESM and Babel transpilation.
  - PostCSS for next-gen CSS features.
  - Built-in cookie notice with deferred analytics.
  - Ghost GitHub Deploy Action integration.

## Local Development Environment

The theme is developed using a local Ghost instance managed by Docker Compose in the sibling directory: `/home/ming/Work/HSLabs/ghost-local`.

- **Setup:** The `ghost-simple` directory is mounted as a volume in the Ghost container at `/var/lib/ghost/content/themes/simple`.
- **URL:** The local dev instance is typically available at `http://192.168.86.7:2368` (or as configured in `ghost-local/docker-compose.yml`).
- **Commands (Run from `ghost-local`):**
  - Start Ghost: `docker compose up -d`
  - Stop Ghost: `docker compose down`
  - Sync files: While the volume mount handles most things, `DOGFOOD-CHECKLIST.md` suggests using `docker cp` if container mounting issues occur.

## Project Structure

- `assets/js/simple.js`: Main entry point for JavaScript.
- `assets/css/index.css`: Main entry point for styles.
- `assets/built/`: Contains compiled and minified assets (`simple.js`, `simple.css`).
- `partials/`: Reusable Handlebars partials (e.g., `cookie-notice.hbs`, `lightbox.hbs`).
- `members/`: Handlebars templates for Ghost members features (signin, signup, account).
- `*.hbs`: Core theme templates (`default.hbs`, `index.hbs`, `post.hbs`, etc.).

## Building and Running

### Theme Development
Runs Rollup in watch mode with live reload.
```bash
npm run dev
```

### Production Build
Compiles and minifies assets for production.
```bash
npm run build
```

### Deployment Preparation
Builds assets and creates a zip archive for uploading to Ghost.
```bash
npm run zip
```

### Testing
Validates the theme against Ghost compatibility standards using `gscan`.
```bash
npm run test
```

## Development Conventions

- **Styling Workflow:** Follow the `DOGFOOD-CHECKLIST.md` for verifying styling changes. This includes recording baselines, implementing changes in `assets/css/`, building, and verifying with computed styles and screenshots.
- **CSS:** Use PostCSS for styling. Source files are in `assets/css/`. The build process extracts them to `assets/built/simple.css`.
- **JavaScript:** Write modular ESM in `assets/js/`. Rollup bundles these into `assets/built/simple.js` (IIFE format).
- **Templates:** Use Handlebars for templating. Custom page templates can be created using the `page-{slug}.hbs` naming convention.
- **Persistence:** Avoid direct DOM style manipulations (e.g., `display='none'`) for state changes; prefer toggling CSS classes.
- **Verification:** Always perform a hard refresh (Ctrl+Shift+R) after builds to bypass browser cache. Use version markers in templates as "probes" when troubleshooting deployment/caching issues.
