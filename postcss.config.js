const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    // Minify CSS output in production
    ...(isProduction && { cssnano: {} }),
  },
};
