/**
  Your global data folder is controlled by the dir.data configuration option. 
  All *.json and module.exports values from *.js files in this directory will 
  be added into a global data object available to all templates.

  This file can be accessed using: {{ site.title }}
*/

var pkgJSON = require('../../package.json');

module.exports = {
  title: "Web Starter | Start building your website quicker",
  author: "Chris Collins",
  url: "https://webstarter.chriscollins.me", // Don't end with a slash /
  description: "An opinionated but minimal boilerplate for new projects built with Eleventy",
  meta_data: {
    theme_color: '#000', // used in Chrome, Firefox OS and Opera
    twitter: "@scottishstoater",
    default_social_image: "/static/images/featured_image.jpg"
  },
  ENV: process.env.ELEVENTY_ENV,
  version: pkgJSON.version
};