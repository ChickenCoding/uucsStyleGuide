/**
 *  @description: Visual regression testing, used on styleguide
 *  to check diff in the compponents.
 */
var fs = require("fs");
var path = fs.absolute(
  fs.workingDirectory + "/node_modules/phantomcss/phantomcss.js"
);
var phantomcss = require(path);

var url = "http://localhost:89/styleguide";

casper.test.begin("Styleguide visual test", function(test) {
  var
    breakpoints = [
      {
        "name": "smartphone-portrait",
        "viewport": {width: 320, height: 480}
      },
      {
        "name": "smartphone-landscape",
        "viewport": {width: 480, height: 320}
      },
      {
        "name": "tablet-portrait",
        "viewport": {width: 768, height: 1024}
      },
      {
        "name": "tablet-landscape",
        "viewport": {width: 1024, height: 768}
      },
      {
        "name": "desktop-standard",
        "viewport": {width: 1280, height: 1024}
      }
    ]
  ;
  phantomcss.init({
    rebase: casper.cli.get("rebase"),
    libraryRoot: "./node_modules/phantomcss",
    failedComparisonsRoot: "test/regression/failure",
    screenshotRoot: "test/regression/screenshots",
  });

  casper.on("remote.message", function(message) {
    this.echo(message);
  });
  casper.on("error", function(error) {
    this.die(error)
  });
  casper.on("resource.error", function(error) {
    casper.log("Resource load error");
    casper.log(error);
  });

  casper.start(url)

  phantomcss.turnOffAnimations();

  casper.each(breakpoints, function(casper, breakpoint) {
    casper.wait(1000, function() {
      casper.viewport(
        breakpoint.viewport.width,
        breakpoint.viewport.height
      );
      casper.thenOpen(url, function() {
        casper.then(function() {
          this.click("#colors-anchor--public");
        })
        casper.then(function() {
          phantomcss.screenshot(
            "#colors-anchor--public",
            "screenshot-public-colors." + breakpoint.name
          );
        })
      });
      casper.then(function() {
        phantomcss.compareAll();
      });
    });
  });

  casper.run(function() {
    console.log("Runned");
    casper.test.done();
  });
});
