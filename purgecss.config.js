module.exports = {
  content: ["dist/**/*.html", "dist/**/*.js"],
  css: ["src/_includes/stylesheets/app.css"],
  extractors: [{
    extractor: class TailwindCSS {
      static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
      }
    },
    extensions: ["html", "js"]
  }]
};