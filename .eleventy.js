module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("fonts/*");
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addWatchTarget("_includes/style.css");
  eleventyConfig.addWatchTarget("_includes/style-light.css");
  eleventyConfig.addWatchTarget("_includes/mobile.css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addWatchTarget("js");
  eleventyConfig.addPassthroughCopy("styles")
  eleventyConfig.addWatchTarget("styles");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addWatchTarget("images");
};
