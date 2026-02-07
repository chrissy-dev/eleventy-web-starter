## Project Status

This repository is now archived and no longer actively maintained.

Originally started in 2018, it has received a final maintenance update
to ensure dependencies install cleanly and builds succeed on current
Node LTS. No further feature work or support is planned.

I had a great time building with Eleventy and still think highly of it.
I expect I will reach for it again in the future when it is the right
tool for the job. I simply do not use this starter as often anymore, and
it feels more honest to mark the project as archived and keep it
available here for historical reference.

Cheers to everyone who has used this starter over the years.

---

# Eleventy Web Starter

An opinionated starter template for building static websites using
Eleventy. It was designed to provide a fast, practical foundation with
sensible defaults for templating, styling, and performance.

## Features

-   Eleventy for static site generation\
-   Nunjucks templating with Markdown support\
-   SCSS and PostCSS for styling\
-   ESBuild for JavaScript bundling\
-   Image optimisation via Eleventy plugins\
-   Live reload during development\
-   Basic SEO and social metadata\
-   Ready for deployment to common static hosts

## Tech Stack

-   Static site generator: Eleventy\
-   Templates: Nunjucks, Liquid, Markdown\
-   Styling: SCSS, PostCSS\
-   JavaScript: ES modules bundled with ESBuild

## Getting Started

### Prerequisites

-   Node.js (current LTS recommended)\
-   npm or Yarn

### Installation

``` bash
git clone https://github.com/chrissy-dev/eleventy-web-starter.git
cd eleventy-web-starter
npm install
```

## Development

Start the local development server:

``` bash
npm run dev
```

This will:

-   build the site with Eleventy\
-   watch for file changes\
-   serve locally with live reload

## Production Build

Generate an optimised production build:

``` bash
npm run build
```

Output is written to the `dist` directory.

## Project Structure

    eleventy-web-starter/
    ├── src/
    │   ├── _data/
    │   ├── _includes/
    │   ├── _layouts/
    │   ├── _assets/
    ├── .eleventy.js
    ├── package.json
    ├── postcss.config.js
    └── README.md

## License

MIT licensed.
