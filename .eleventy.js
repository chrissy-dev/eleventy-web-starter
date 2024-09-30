const { DateTime } = require("luxon");
const isProduction = process.env.ELEVENTY_ENV === "production";
const htmlnano = require("htmlnano");
const htmlSave = require("htmlnano").presets.safe;

module.exports = function (eleventyConfig) {
	// Folders to copy to build dir
	eleventyConfig.addPassthroughCopy("src/static");

	// Filter to parse dates
	eleventyConfig.addFilter("htmlDateString", function (dateObj) {
		return DateTime.fromJSDate(dateObj, {
			zone: "utc",
		}).toFormat("yyyy-LL-dd");
	});

	// Example Collections
	// Filter source file names using a glob
	// eleventyConfig.addCollection("posts", function (collectionApi) {
	// 	return collectionApi.getFilteredByGlob("./src/_posts/**/*.md");
	// });

	// Compress/Minify HTML output on production builds
	eleventyConfig.addTransform("compressHTMLOutput", (content, outputPath) => {
		const options = {
			removeEmptyAttributes: false, // Disable the module "removeEmptyAttributes"
			collapseWhitespace: "conservative", // Pass options to the module "collapseWhitespace"
		};
		// posthtml, posthtml-render, and posthtml-parse options
		const postHtmlOptions = {
			lowerCaseTags: true, // https://github.com/posthtml/posthtml-parser#options
			quoteAllAttributes: false, // https://github.com/posthtml/posthtml-render#options
		};

		if (outputPath.endsWith(".html") && isProduction) {
			return htmlnano
				.process(content, options, htmlSave, postHtmlOptions)
				.then(function (result) {
					return result.html;
				})
				.catch(function (err) {
					console.error(err);
				});
		}

		return content;
	});

	// This allows Eleventy to watch for file changes during local development.
	eleventyConfig.setUseGitIgnore(false);
	return {
		dir: {
			input: "src/",
			output: "dist",
			includes: "_includes",
			layouts: "_layouts",
		},
		templateFormats: ["html", "md", "njk"],
		htmlTemplateEngine: "njk",
		passthroughFileCopy: true,
	};
};
