module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addCollection("weeklyNerd", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/weekly-nerd/*.md").reverse()
    })


    return {
        dir: {
            input: "src",
            output: "_site"
            
        }
    };
};