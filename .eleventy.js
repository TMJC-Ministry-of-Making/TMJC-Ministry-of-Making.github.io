module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_site/style.css");
        eleventyConfig.addPassthroughCopy("_site/projects/sarstyle.css");
                eleventyConfig.addPassthroughCopy("_site/projects/assets");
                        eleventyConfig.addPassthroughCopy("_site/events/sarstyle.css");
        eleventyConfig.addPassthroughCopy("_site/home-assets");
    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit)); //https://github.com/11ty/eleventy/issues/1368
    return {
        dir: {
            input: "_site",
            output: "public"
        }
    }
}
