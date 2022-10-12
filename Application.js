var color, height, width:
$("·sizePicker").submit(function (event) {
  event.preventDefault();
  height = $("inputHeight").val();
  width = $("inputWeight").val();
  makeGrid(height, width);
})
function
