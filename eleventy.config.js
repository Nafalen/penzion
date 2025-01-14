export default async function (eleventyConfig) {

    eleventyConfig.setInputDirectory("./src");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.setTemplateFormats("html,njk")

  }
  