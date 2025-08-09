const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

    eleventyConfig.addPassthroughCopy("_site/style.css");
                        eleventyConfig.addPassthroughCopy("_site/sarstyle.css");
        eleventyConfig.addPassthroughCopy("_site/home-assets");
            eleventyConfig.addPassthroughCopy("_site/events/assets");
            eleventyConfig.addPassthroughCopy("_site/projects/assets");

eleventyConfig.addFilter("limit", (arr, limit) => {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, limit);
}); //https://github.com/11ty/eleventy/issues/1368
    return {
        dir: {
            input: "_site",
            output: "public"
        }
    }
}
