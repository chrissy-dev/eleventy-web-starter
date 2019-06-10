var devConfig = require("./config/eleventy.dev.js")
var prodConfig = require("./config/eleventy.prod.js")

// Load to correct .eleventy config file for the env
module.exports = process.env.ELEVENTY_ENV === 'production' ? prodConfig : devConfig;