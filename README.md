<h1><a href="https://eleventywebstarter.netlify.app"><strong>Eleventy Web Starter</strong></a></h1>

<em>Eleventy · Tailwind CSS · HTML · CSS · Javascript</em>

<a href="https://app.netlify.com/sites/eleventywebstarter/deploys"><img src="https://api.netlify.com/api/v1/badges/27819fce-1c2b-4f30-ab30-5c0769f9734e/deploy-status"></a>

## Contents 	

- [Project overview](#project-overview)
- [Getting started](#getting-started)
	- [Install dependencies](#install-dependencies)
	- [Working locally](#working-locally)
	- [Creating a production build](#creating-a-production-build)
- [Deployment](#deployment)
- [Credits](#credits)

---

## Project Overview 

- The project uses [Eleventy](https://11ty.dev) as a static site generator
- Default templating is [Nunjucks](https://mozilla.github.io/nunjucks/) (can be changed)
- PostCSS set up to handle:
	- TailwindCSS
	- CSS Imports
	- Autoprefixer 
- PurgeCSS to remove unused CSS (set up for TailwindCSS by default) in production
- HTML minified in production
- CSS inlined and minified in production
- [esbuild](https://esbuild.github.io/) used to bundle and minify scripts
- Document `<head>` crafted using [htmlhead.dev](https://htmlhead.dev)

---

## Getting Started

### Install dependencies

```
npm install
```

### Working locally
Starts watch tasks to compile when changes detected

```
npm start
```

### Creating a production build
Minify HTML, minify JS, inline and minify CSS.

``` 
npm run build
```

---

## Deployment 

You can host the production output on any web server or service you like and upload it via any method, it'll work. 

If you don't have an existing place to host your site you should have a look at [Netlify](https://www.netlify.com), I can't recommend it enough. To get started you can hit the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chrissy-dev/eleventy-web-starter)

---

#### Credits 

- [Eleventy](https://11ty.dev)
- [TailwindCSS](https://tailwindcss.com/)
- [PostCSS](https://github.com/postcss)
	- Autoprefixer
	- PostCSS Import
- [esbuild](https://esbuild.github.io/)
- [Luxon](https://moment.github.io/luxon/)
- [NPM Run All](https://www.npmjs.com/package/npm-run-all)
- [HTML Minifier](https://www.npmjs.com/package/html-minifier)