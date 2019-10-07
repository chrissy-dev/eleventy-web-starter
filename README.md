<p align="center">
	<img src="/src/static/sample.png" alt="Getting off the ground" width="500" align="center" />
</p>

<p align="center"><a href="https://webstarter.chriscollins.me"><strong>Web Starter</strong></a></p>

<p align="center"><em>Eleventy · Tailwind CSS · HTML · CSS · Javascript</em></p>

## Features 

- This project uses Eleventy as a static site generator
- Default templating is [Nunjucks](https://mozilla.github.io/nunjucks/) (can be changed if you want)
- PostCSS set up to handle:
	- TailwindCSS
	- Autoprefixer 
- PurgeCSS to remove unused CSS (Set up for TailwindCSS by default) in production
- HTML minified in production
- CSS inlined and minified in production
- Webpack used to bundle scripts
- Scripts optimised for production
- `<head>` optimised, using [htmlhead.dev](https://www.htmlhead.dev)


## Usage

### Install dependencies

```
npm install
```

### Start development server
Starts watch tasks to compile when changes detected

```
npm start
```

### Create a production build 
Minify HTML, compress JS, inline and minify CSS.

``` 
npm run build
```

---

#### Credits

- Illustration by [Icons8](https://icons8.com/ouch/illustration/fogg-message-sent)


