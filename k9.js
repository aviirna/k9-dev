const Kiss = require("kiss-ssg");
const kiss = new Kiss();
kiss.page({
  view: "junior-course.hbs",
  title: "Junior School",
  model: "junior-course.json",
});
