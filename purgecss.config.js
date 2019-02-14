module.exports = {
  content: ["src/**/*.html"],
  css: ["src/_includes/stylesheets/app.css"],
  // You can remove the extractors section if not using TailwindCSS
  extractors: [
    {
      extractor: class TailwindExtractor {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
        }
      },
      extensions: ["html"]
    }
  ]
};
