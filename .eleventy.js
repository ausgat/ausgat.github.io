module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("fonts/*");
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addWatchTarget("style.css");
  eleventyConfig.addWatchTarget("style-dark.css");
  eleventyConfig.addWatchTarget("mobile.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addWatchTarget("script.js");
  eleventyConfig.addPassthroughCopy("me.jpeg");
};
