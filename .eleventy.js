module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("fonts/*");
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addWatchTarget("_includes/style.css");
  eleventyConfig.addWatchTarget("_includes/style-dark.css");
  eleventyConfig.addWatchTarget("_includes/mobile.css");
  eleventyConfig.addPassthroughCopy("js/script.js");
  eleventyConfig.addWatchTarget("js/script.js");
  eleventyConfig.addPassthroughCopy("images/me.jpeg");
};
