/**
 * Eleventy configuration
 * @param {import("@11ty/eleventy").UserConfig} eleventyConfig
 * @returns {Object} - Eleventy configuration
 */
module.exports = function(eleventyConfig) {
  // Copy the CSS file directly to the output
  eleventyConfig.addPassthroughCopy("styles.css");

  return {
    // Default output directory
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
