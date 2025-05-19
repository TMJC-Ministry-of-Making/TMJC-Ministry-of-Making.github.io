module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_site/style.css");
    return {
        dir: {
            input: "_site",
            output: "public"
        }
    }
}