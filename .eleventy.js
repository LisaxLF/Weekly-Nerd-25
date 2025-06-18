import readableDate from "./src/filters/readableDate.js"

export default function(eleventyConfig) {
    eleventyConfig.addFilter("readableDate", readableDate)
    eleventyConfig.addPassthroughCopy("src/assets")
    eleventyConfig.addPassthroughCopy("src/styles")
    eleventyConfig.addCollection("weeklyNerd", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/weekly-nerd/*.md").sort((a, b) => {
            return new Date(a.data.date) - new Date(b.data.date)
        })
    })

    eleventyConfig.addCollection("progressReview", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/progress-reviews/*.md")
    }); 

    eleventyConfig.addCollection("reflections", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/reflections/*.md")
    }); 


    return {
        dir: {
            input: "src",
            output: "_site"
            
        }
    }
}