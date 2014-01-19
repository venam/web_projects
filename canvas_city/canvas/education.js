var canvas = document.getElementById("education");
var context = canvas.getContext("2d");


/* fancy shadow */
context.shadowBlur = 3;
context.shadowColor = "#d6d6d6";

context.fillStyle = "#212121";
context.strokeStyle = "#212121";


/* the curves */
context.beginPath();
context.moveTo(155,48);
context.quadraticCurveTo(162,57,160,65);
context.quadraticCurveTo(130,65,100,85);
//  180,40--> 160,65
//  20, 40--> 40 ,65
context.quadraticCurveTo(50,60,40,65);
//  180,40-> 155,48
//  20,40 -> 45,48
context.quadraticCurveTo(40,57,45,48);
context.fill();

/* the losange shape */
context.beginPath();
context.moveTo(100,10);
context.lineTo(180,40);
context.lineTo(100,70);
context.lineTo(20,40);
context.lineTo(100,10);
context.fill();

/* the pompom */
context.fillStyle = "#d6d6d6";
context.strokeStyle = "#d6d6d6";
context.lineWidth = 2;

context.beginPath();
context.moveTo(100,35);
context.lineTo(60,54);
context.lineTo(60,64);
context.stroke();

context.beginPath();
context.moveTo(100,35);
context.arc(100,35, 4, 0,Math.PI*2);
context.fill();

/* the down part */
context.fillStyle = "#212121";
context.strokeStyle = "#212121";

context.beginPath();
context.moveTo(60,70);
context.quadraticCurveTo(70,100,68,110);
context.quadraticCurveTo(60,115,52,110);
context.quadraticCurveTo(50,100,60,70);
context.fill();

context.beginPath();
context.arc(60,70, 6.5, 0, Math.PI*2);
context.fill();

