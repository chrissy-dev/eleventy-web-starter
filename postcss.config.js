const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    ...(isProduction && { cssnano: {} }),
  },
};
