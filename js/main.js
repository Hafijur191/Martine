$(document).ready(function () {
  $(".hotel-item").show();
  $(".tricket-item").hide();
   $(".place-item").hide();
    
    $("#hotel span").addClass('line');

  // for hotel

  $("#hotel").click(function () {
    $(".hotel-item").show();
    $(".tricket-item").hide();
      $(".place-item").hide();
      
    $("#hotel span").addClass("line");
    $("#tricket span").removeClass("line");
    $("#place span").removeClass("line");

  });

  // for tricket

  $("#tricket").click(function () {
    $(".hotel-item").hide();
    $(".tricket-item").show();
      $(".place-item").hide();
      
      $("#hotel span").removeClass("line");
      $("#tricket span").addClass("line");
      $("#place span").removeClass("line");
  });

  // for place

  $("#place").click(function () {
    $(".hotel-item").hide();
    $(".tricket-item").hide();
      $(".place-item").show();
      
      $("#hotel span").removeClass("line");
      $("#tricket span").removeClass("line");
      $("#place span").addClass("line");
  });
});
