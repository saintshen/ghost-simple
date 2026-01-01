# Simple Theme

A Ghost themes.


## Why Simple Ghost theme?

Make life simple.

&nbsp;

## Simple theme features
- 🎨 Ghost custom fonts

🔁&nbsp;Livereload by default. See changes instantly in the browser whenever you save a file.

🔎&nbsp;Optimized for VS Code. Find the files you're looking for more easily.

🗃️&nbsp;Write modern JavaScript. Use ESM out of the box to write more manageable Javascript.

🗜️&nbsp;Assets optimized automatically. JavaScript and CSS are minified and transpiled by default.

👟&nbsp;Fast compile times, powered by [Rollup](https://rollupjs.org).

🦋&nbsp;Write next-gen CSS for today's browsers with [PostCSS](https://postcss.org/). Add the CSS tools you love via [`rollup.config.js`](rollup.config.js).

🚢&nbsp;Ghost's [GH Deploy Action](.github/workflows/deploy-theme.yml) included by default. [Learn more how to deploy your theme automatically](https://github.com/TryGhost/action-deploy-theme)

➕&nbsp;Extensible by design. Rollup's configuration structure makes it easy to add [any number of plugins easily](https://github.com/rollup/plugins). 

&nbsp;

## Theme structure

The main files are:

- [`default.hbs`](default.hbs) - The main template file
- [`index.hbs`](index.hbs) - Used for the home page
- [`post.hbs`](post.hbs) - Used for individual posts
- [`page.hbs`](page.hbs) - Used for individual pages
- [`tag.hbs`](tag.hbs) - Used for tag archives
- [`author.hbs`](author.hbs) - Used for author archives

One neat trick is that you can also create custom one-off templates just by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for the `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-jamie.hbs` - Custom template for `/author/jamie/` archive

&nbsp;

## Development guide

The Starter theme provides a first-class development experience out of the box. 

&nbsp;

### Setup

To see realtime changes during development, symlink the Starter theme folder to the `content/themes` folder in your local Ghost install. 

```bash
ln -s /path/to/starter /ghost/content/themes/starter
```

Restart Ghost and select the Starter theme from **Settings**.

From the theme's root directory, install the dependencies:

```bash
npm install
```

If Node isn't installed, follow the [official Node installation guide](https://nodejs.org/).

&nbsp;

### Start development mode

From the Starter theme folder, start development mode:

```bash
npm run dev
```

Changes you make to your styles, scripts, and Handlebars files will show up automatically in the browser. CSS and Javascript will be compiled and output to the `built` folder.

Press `ctrl + c` in the terminal to exit development mode.

&nbsp;

### Build, zip, and test your theme

Compile your CSS and JavaScript assets for production with the following command:

```bash
npm run build
```

Create a zip archive:

```bash
npm run zip
```

Use `gscan` to test your theme for compatibility with Ghost:

```bash
npm run test
```

&nbsp;



## Cookie notice

This theme includes a basic cookie notice partial (`partials/cookie-notice.hbs`), styles (`assets/css/components/cookie.css`), and script (`assets/js/cookie-notice.js`). Analytics loading is deferred and only executes after the user accepts cookies — update the ID or provider inside the `window.loadDeferredAnalytics` function in `default.hbs` (replace `UA-XXXXX-Y`). The consent is stored in the `cookie_consent` cookie (values: `accepted` / `declined`). Extend the UI and logging as needed for legal compliance.

## Copyright & License

Copyright (c) 2013-2025 Ghost Foundation - Released under the [MIT license](LICENSE).
