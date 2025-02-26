/**
 * Eleventy configuration
 * @param {import("@11ty/eleventy").UserConfig} eleventyConfig
 * @returns {Object} - Eleventy configuration
 */
module.exports = function(eleventyConfig) {
  // Copy the CSS files directly to the output
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  
  // Add date filters
  eleventyConfig.addFilter("dateIso", date => {
    return date.toISOString().split('T')[0];
  });
  
  eleventyConfig.addFilter("dateReadable", date => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });
  
  // Add shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    // Default template engine for markdown files
    markdownTemplateEngine: "njk",
    
    // Directory structure
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
