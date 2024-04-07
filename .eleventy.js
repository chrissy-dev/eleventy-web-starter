const { DateTime } = require("luxon");
const isProduction = process.env.ELEVENTY_ENV === "production";

module.exports = function (eleventyConfig) {
	// Folders to copy to build dir
	eleventyConfig.addPassthroughCopy("src/static");

    // Filter to parse dates
	eleventyConfig.addFilter("htmlDateString", function (dateObj) {
		return DateTime.fromJSDate(dateObj, {
			zone: "utc",
		}).toFormat("yyyy-LL-dd");
	});

    // Compress/Minify HTML output on production builds
	eleventyConfig.addTransform("compressHTMLOutput", (content, outputPath) => {
		if (outputPath.endsWith(".html") && isProduction) {
			return htmlmin.minify(content, {
				collapseWhitespace: true,
				removeComments: true,
				useShortDoctype: true,
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
