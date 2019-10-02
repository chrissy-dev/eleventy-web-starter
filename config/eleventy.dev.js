module.exports = function(eleventyConfig) {
  // Folders to copy to build dir (See. 1.1)
  eleventyConfig.addPassthroughCopy("src/static");

  return {
    dir: {
      input: "src/",
      output: "dist",
      includes: "_includes"
    },
    templateFormats: ["html", "md", "liquid"],
    htmlTemplateEngine: "liquid",

    // 1.1 Enable elventy to pass dirs specified above
    passthroughFileCopy: true
  };
};
