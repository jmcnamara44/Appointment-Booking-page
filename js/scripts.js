$(document).ready(function() {
  $(".booking").submit(function(event){
    event.preventDefault();
    var userName = $("input#name").val();
    var purpose = $("input#purpose").val();
    var date = $("input#date").val();
    var startTime = $("input#startTime").val();
    var endTime = $("input#endTime").val();

    $(".name").text(userName);
    $(".purpose").text(purpose);
    $(".date").text(date);
    $(".startTime").text(startTime);
    $(".endTime").text(endTime);

    $(".popuptext").show();
  });
});
