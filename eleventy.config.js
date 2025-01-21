export default async function (eleventyConfig) {

    eleventyConfig.setInputDirectory("./src");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.setTemplateFormats("html,njk");
    eleventyConfig.setIncludesDirectory("./templates");

    return {
      //define what engines will be used for which files
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    };


  }
  