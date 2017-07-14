$(document).ready(function() {

  $("form").submit(function(event) {

    var theirNumber = $('input#number')
    var value = $("input#number").val();

    console.info("user number is: " + value);

    for (i = 1; i <= value; i++) {
      console.info(i);
      if (i % 15 == 0) {
        $("ul#output").append($("<li>").text("pingpong"));
        console.info(i + "pingping");
      } else if (i % 5 == 0) {
        $("ul#output").append($("<li>").text("pong"));
        console.info(i + "pong");
      } else if (i % 3 == 0) {
        $("ul#output").append($("<li>").text("ping"));
        console.info(i + "ping");
      } else {
        $("ul#output").append($("<li>").text(i))
      }

    }

    event.preventDefault();
  });



});
