const htmlmin = require("html-minifier");
const isProduction = process.env.ELEVENTY_ENV === "production";
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Folders to copy to build dir, untouched
  eleventyConfig.addPassthroughCopy("src/static");
  eleventyConfig.addPassthroughCopy("src/media");

  /* ---------------------------------------------
    Filters

    A filter is a function which can be used 
    within the templating syntax to transform 
    data into a more presentable format.
    -------------------------------------------- */

  // htmlDateString: Return the date in the format e.g. 2022-12-25
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc",
    }).toFormat("yyyy-LL-dd");
  });

  // postDate: Return the date in a human readable format e.g. Nov 23, 2020
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // urlDate: Return the date to be used in post urls e.g. 2020/09/28
  eleventyConfig.addFilter("urlDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc",
    }).toFormat("yyyy/LL/dd");
  });

  /* ---------------------------------------------
    Collections
    
    A collection allows you to group content
    to loop through within 11ty.
    -------------------------------------------- */

  /* ---------------------------------------------
    Transforms

    These can modify a template's output.
    -------------------------------------------- */

  // Minify HTML in Production
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html") && isProduction) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // This allows Eleventy to watch for file changes usually ignored by git during local development.
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
    markdownTemplateEngine: "njk",

    // Enable eleventy to pass dirs specified above
    passthroughFileCopy: true,
  };
};
