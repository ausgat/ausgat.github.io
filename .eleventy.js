module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("fonts/*");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addWatchTarget("style.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addWatchTarget("script.js");
  eleventyConfig.addPassthroughCopy("me.jpeg");
};
