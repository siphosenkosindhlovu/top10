import "bootstrap";
import "./scss/main.scss";
import "./fontawesome/css/fontawesome-all.css";
//require("html-loader!./templates/index.html");

const responsiveSlides = require("responsive-slides");
$(document).ready(function() {
  $(".slider_progress").css({
    animationName: "progress",
    animationDuration: "4s"
  });
  $(".slider").responsiveSlides({
    auto: true, // Boolean: Animate automatically, true or false
    speed: 500, // Integer: Speed of the transition, in milliseconds
    timeout: 4000, // Integer: Time between slide transitions, in milliseconds
    pager: true, // Boolean: Show pager, true or false
    nav: false, // Boolean: Show navigation, true or false
    random: false, // Boolean: Randomize the order of the slides, true or false
    pause: false, // Boolean: Pause on hover, true or false
    pauseControls: true, // Boolean: Pause when hovering controls, true or false
    prevText: "Previous", // String: Text for the "previous" button
    nextText: "Next", // String: Text for the "next" button
    maxwidth: "", // Integer: Max-width of the slideshow, in pixels
    navContainer: "", // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: ".slider_tabs", // Selector: Declare custom pager navigation
    namespace: "slider", // String: Change the default namespace used
    before: function() {
      $(".slider_progress").css({
        animationName: "",
        animationDuration: "0"
      });
    }, // Function: Before callback
    after: function() {
      $(".slider_progress").css({
        animationName: "progress",
        animationDuration: "4s"
      });
    } // Function: After callback
  });
});
