var color = "black";

// listening to colorPicker change and setting its value to variable color
$("#colorPicker").on("change", function(event){
	color = event.target.value;
})

// Create grid when user click submit
$("#sizePicker").submit(function(event){
	event.preventDefault();
	$("#pixel_canvas").html(makeGrid(event.target[0].value,event.target[1].value));
});

// Color background on click td
$("#pixel_canvas").on("click", "td", function(){
	$(this).css("background", color);
});

function makeGrid(rows, colums) {
	var rowBeginning = "<tr>";
	var rowEnding = "</tr>";
	var tableData = "<td></td>";
	var colum = "";
	var grid = "";
	for (var i = 0; i < colums; i++){
		colum += tableData;
	};
	for (var j = 0; j< rows; j++){
		grid = grid + rowBeginning + colum + rowEnding;
	};
	return grid;
};

$( document ).ready(function() {
    $("#pixel_canvas").html(makeGrid(10,15));
});