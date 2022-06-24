// Index.js
let markdownIt = require("markdown-it");
let options = {html : true};
let mdfigcaption = require('markdown-it-image-figures');
let figoptions = {figcaption : true};

const mdLib = markdownIt(options).use(mdfigcaption, figoptions);

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = (config) => {
  config.setLibrary("md", mdLib);
  config.addPlugin(syntaxHighlight);
  config.addPassthroughCopy('src/assets');
  config.addPassthroughCopy('src/gallery/images');
  config.addNunjucksGlobal("year", new Date().getFullYear());
  config.addPairedNunjucksShortcode(
      "test", function(content) { return `{{ test("${content}") }}`; });
  config.addPairedShortcode("purple", function(content) {
    return `
<div class="section-top purple-gradient"></div>
<div class=" webdev-area purple-gradient" style="text-align: center">

${content}

</div>
<div class="section-bottom purple-gradient"></div>
`;
  });

  config.addPairedNunjucksShortcode("div", function(content, div) {
    return `<div class="${div.class}">

${content}

</div>
`;
  })

  return {
    dir : {
      input : 'src',
      data : '../_data',
      output : 'dist',
    },

    markdownTemplateEngine : 'njk',
    dataTemplateEngine : 'njk',
    htmlTemplateEngine : 'njk',
  };
};
