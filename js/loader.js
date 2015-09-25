/**
 *  @file: loader.js
 *  @description: Fallback for remote fetch into local fetch.
 *    If the library is not loaded through cdn, the load the loccal
 *    library.
 */
yepnope([
  /* Stylesheet libs */
  {
    load: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css",
    complete: function() {
      console.log("in");
      yepnope.injectCss("client/bower_components/bootstrap/dist/css/bootstrap.min.css");
    }
  }, {
    load: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css",
    complete: function() {
      yepnope.injectCss("client/bower_components/font-awesome/css/font-awesome.min.css");
    }
  }, {
    load: "https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.5/jquery.bxslider.min.css",
    complete: function() {
      yepnope.injectCss("client/bower_components/bxslider-4/dist/jquery.bxslider.min.css");
    }
  },
  /* Javascript libs */
  {
    load: "https://code.jquery.com/jquery-2.1.4.min.js",
    complete: function() {
      if (!(window.jQuery)) {
        yepnope("client/bower_components/jquery/dist/jquery.min.js")
      }
    }
  }, {
    load: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js",
    complete: function() {
      if (!(window.jQuery.fn.modal)) {
        document.write(
          "<script" +
            "src=\"client/bower_componentsdist/js/bootstrap.min.js\">" +
            "</script>"
        );
      }
    }
  }, {
    load: "https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.5/jquery.bxslider.min.js",
    complete: function() {
      if (!(window.jQuery.fn.bxSlider)) {
        document.write(
          "<script" +
            "src=\"client/bower_components/bxslider-4/dist/jquery.bxslider.min.js\">" +
            "</script>"
        );
      }
    }
  }, {
    load: "js/bxSlider.js"
  }, {
    load: "css/style.css"
  }
]);
