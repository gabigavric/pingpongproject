function pingPong(number) {
  if (number % 15 == 0) {
    return ("pingpong");
  } else if (number % 5 == 0) {
    return ("pong");
  } else if (number % 3 == 0) {
    return ("ping");
  } else {
    return number;
  }
}


$(document).ready(function() {

  $("form").submit(function(event) {
    var value = $("input#number").val();
    for (i = 1; i <= value; i++) {
      $("ul#output").append($("<li>").text(pingPong(i)));
    };
    event.preventDefault();
  });
});
