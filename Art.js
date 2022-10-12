var color, height, width;


$("#sizePicker").submit(function (event) {
  event.preventDefault();
  height = $("inputHeight").val();
  width = $("inputWeight").val();
  makeGrid(height, width);
})

function makeGrid(x, y) {
  $("tr").remove();
  for(var a = 1 <= x; a++;) {
    $("pixelCanvas").append("<tr id=first" + a + "></tr>");
    for (var b = 1; b <=y; b++){
        $("#first" + a).append("<td></td>");
    }
  }
$("td").click(function colorin() {
    color = $("#colorPicker").val();
    if ($(this).attr("style")){
        $(this).removeAttr("style")
    } else {
        $(this).attr("style", background-color + color)
    }
  })
}
