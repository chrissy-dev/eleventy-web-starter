/**
  Your global data folder is controlled by the dir.data configuration option. 
  All *.json and module.exports values from *.js files in this directory will 
  be added into a global data object available to all templates.

  This file can be accessed using: {{ site.title }}
*/

var pkgJSON = require('../../package.json');

module.exports = {
  title: "Web Starter 🔥",
  author: "Chris Collins",
  url: "https://www.chriscollins.me", // Don't end with a slash /
  description: "Site description",
  social_meta: {
    twitter: "@scottishstoater",
    featured_image: "/assets/images/featured_image.jpg"
  },
  ENV: process.env.ELEVENTY_ENV,
  version: pkgJSON.version
};