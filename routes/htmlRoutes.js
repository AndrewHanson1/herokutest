var path = require("path");
const router = require("express").Router();

module.exports = function(app) {
  // Load index page
  router.get("/", function(req, res) {
    res.render("index");
  });
  // app.get("/", function(req, res, next) {
  //   res.render("index", { layout: false });
  // });

  // Render Other Pages
  // the actual "db" content ntb edited/updated
  router.get("/results", function(req, res) {
    res.render("results");
  });
  router.get("/history", function(req, res) {
    res.render("history");
  });
  router.get("/about", function(req, res) {
    res.render("about");
  });
  router.get("/other-resources", function(req, res) {
    res.render("other-resources");
  });
  router.get("/signin", function(req, res) {
    res.render("signin");
  });
  router.get("/signup", function(req, res) {
    res.render("results");
  });
  router.get("*", function(req, res) {
    res.render("index");
  });
}
