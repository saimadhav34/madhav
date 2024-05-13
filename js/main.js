
$(document).ready(function() {

  'use strict';
var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Alex Smith.", "Designer.", "Developer.", "Freelancer.", "Photographer"],
      typeSpeed: 100,
      loop: true,
    });
  });
}

