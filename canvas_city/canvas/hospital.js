var canvas = document.getElementById("hospital");
var context = canvas.getContext("2d");

var grad ;

context.globalAlpha = 1;
context.lineWidth = 3;
context.strokeStyle = "#000000";

context.shadowBlur = 4;
context.shadowColor = "#212121";

context.fillStyle = "#92D4F6";
context.fillRect(0,0,400,140);
context.fillStyle = "#75DC45";
context.fillRect(0,140,400,400);


/* left building */
grad = context.createLinearGradient(55,100,150,250);
grad.addColorStop(0,"#F1F7F7");
grad.addColorStop(0.5, "#F1F7F7");
grad.addColorStop(0.5, "#D4EBDB");

context.fillStyle = grad;

context.beginPath();
context.moveTo(157,100);
context.lineTo(170,200);
context.lineTo(70,200);
context.lineTo(55,100);
context.lineTo(157,100);
context.stroke();
context.fill();

/* hangard door */
context.fillStyle = "#F1F7F7";
context.beginPath();
context.rect(90,140,90,8);
context.rect(94,149,8,51);
context.stroke();
context.fill();

/* hangard windows */
context.lineWidth = 2;
context.scale(0.70,0.70);
context.translate(-75,83);
draw_first_row();
context.translate(0, 28);
draw_first_row();
context.translate(75, -28-83);
context.lineWidth = 3;
context.scale(1/0.70,1/0.70);



/* right building */
grad = context.createLinearGradient(150,30,300,250);
grad.addColorStop(0,"#F1F7F7");
grad.addColorStop(0.5, "#F1F7F7");
grad.addColorStop(0.5, "#D4EBDB");
context.fillStyle = grad;


context.beginPath();
context.moveTo(150,30);
context.lineTo(340,30);
context.lineTo(320,200);
context.lineTo(170,200);
context.lineTo(151,29);
context.stroke();
context.fill();

/* stairs */
context.fillStyle = "#95CDC2";
context.lineWidth = 2;

context.beginPath();
context.rect(210,193, 70, 7);
context.rect(213,186, 64, 7);
context.rect(216,179, 58, 7);
context.fill();
context.stroke();

/* door deco right */

context.fillStyle = "#F1F7F7";
context.beginPath();
context.rect(219, 130,10, 49);
context.rect(261, 130,10, 49);
context.rect(216, 118, 59, 12);
context.fill();
context.stroke();


/* door */
grad = context.createLinearGradient(231,131, 280, 150);
grad.addColorStop(0,"#F1F7F7");
grad.addColorStop(0.5, "#F1F7F7");
grad.addColorStop(0.5, "#92D4F6");

context.fillStyle = grad;

context.beginPath();
context.rect(246, 131, 15, 47);
context.stroke();
context.fill();

grad = context.createLinearGradient(215,131, 264, 150);
grad.addColorStop(0,"#F1F7F7");
grad.addColorStop(0.5, "#F1F7F7");
grad.addColorStop(0.5, "#92D4F6");

context.fillStyle = grad;

context.beginPath();
context.rect(230,131, 15,47);
context.stroke();
context.fill();

/* handles */
context.fillStyle = "#65696B";
context.beginPath();
context.arc(250,160, 2, 0, Math.PI*2);
context.arc(242,160, 2, 0, Math.PI*2);
context.stroke();
context.fill();


/* draw the window */
function draw_window()
{
	context.shadowBlur = 0;
	context.beginPath();
	context.fillStyle = "#4195C3";
	context.rect(175,65, 25,25);
	context.fill();
	context.stroke();
	context.beginPath();

	grad = context.createLinearGradient(178,68, 197, 87);
	grad.addColorStop(0,"#F1F7F7");
	grad.addColorStop(0.4, "#F1F7F7");
	grad.addColorStop(0.4, "#92D4F6");
	grad.addColorStop(0.6, "#92D4F6");
	grad.addColorStop(0.6, "#B6E4FD");
	grad.addColorStop(0.8, "#B6E4FD");
	grad.addColorStop(0.8, "#92D4F6");

	context.fillStyle = grad;
	context.rect(178,68, 19,19);
	context.fill();
	context.shadowBlur = 3;
	context.shadowColor = "#303030";
}


function draw_first_row() {
	context.scale(0.95,0.95);
	context.translate(12,0);
	draw_window();
	context.translate( 39,0);
	draw_window();
	context.translate( 39,0);
	draw_window();
	context.translate( 39,0);
	draw_window();
	context.translate(-39*3-12,0);
	context.scale(1/0.95, 1/0.95);
}

draw_first_row();
context.translate(0, 28);
draw_first_row();
context.translate(0, -28);

context.scale(0.95,0.95);
context.translate(12,0);
context.translate(0,28*2+5);
draw_window();
context.translate(-12,-28*2-5);
context.scale(1/0.95, 1/0.95);

context.scale(0.95,0.95);
context.translate(12,0);
context.translate(39*3,28*2+5);
draw_window();
context.translate(-12,-28*2-5);
context.scale(1/0.95, 1/0.95);

/* draw the hospital cross */
context.shadowBlur = 0;
context.fillStyle = "#E7252D";
context.fillRect(130,32, 12,25);
context.fillRect(123.5,38.5, 25,12);

context.translate(-110,0);

