const Kiss = require("kiss-ssg");
const kiss = new Kiss();
kiss.page({
  view: "index.hbs",
  title: "My Page Title",
  model: {
    name: "Courtenay Probert",
  },
});
