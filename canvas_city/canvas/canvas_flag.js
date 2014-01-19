var canvas = document.getElementById("canvas_flag");
var context = canvas.getContext("2d");

context.strokeStyle = "#303030";
context.fillStyle = "#9BDC10";

/* fancy shadow */
context.shadowBlur = 3;
context.shadowColor = "#606060";

/* draw the flag itself */
context.lineWidth = 2;
context.beginPath();
context.moveTo(20,30);
context.quadraticCurveTo(50, 5,100,30);
context.quadraticCurveTo(130,55,180,20);
context.quadraticCurveTo(160,60,170,130);
context.quadraticCurveTo(130,155,100,130);
context.quadraticCurveTo( 70,115 ,20,135);
context.lineTo( 20,28);
context.fill();
context.stroke();

/* draw the logo on the flag */
context.beginPath();
context.strokeStyle = "#C2F84F";
context.fillStyle = "#C2F84F";
context.beginPath();
context.moveTo(96,110);
context.lineTo(96,47);
context.lineTo(120,47);
context.lineTo(116,105);
context.lineTo(96,110);
context.fill();

context.beginPath();
context.strokeStyle = "#FFFFFF";
context.lineWidth = 6;
context.moveTo(119-10,78-5);
context.lineTo(120-10,65-5);
context.lineTo(90-10,65-5);
context.lineTo(92-10,95-5);
context.lineTo(107-10,103-5);
context.lineTo(122-10,92-5);
context.stroke();


