

var canvas  = document.getElementById("drawRectangle");
var context = canvas.getContext("2d");
context.fillStyle = "#212121";
context.lineWidth = 2;

var j=75;
var i=5;
context.strokeStyle = "#87afd7";
for ( var p=0; p<6; p++) {
	context.fillRect(i, 1, 25, j);
	context.strokeRect(i-1,0,26,j+1);
	j+=25;
	i+=35;
}

j=75;
i=390;
context.strokeStyle = "#73af5f";
for ( var p=0; p<6; p++) {
	context.fillRect(i, 1, 25, j);
	context.strokeRect(i-1, 0, 26,j+1);
	j+=25;
	i-=35;
}

