module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addCollection("weeklyNerd", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/weekly-nerd/*.md").sort((a, b) => {
            return new Date(b.data.date) - new Date(a.data.date);
        });
    });

    eleventyConfig.addCollection("progressReview", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/progress-reviews/*.md");
    });    


    return {
        dir: {
            input: "src",
            output: "_site"
            
        }
    };
};