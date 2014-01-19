var canvas = document.getElementById("garbage");
var context = canvas.getContext("2d");

context.strokeStyle = "#212121";
context.fillStyle   = "#212121";

/* the can */
context.lineWidth = 5;
context.lineCap = "butt";
context.beginPath();
context.moveTo(30,100);
context.lineTo(35,140);
context.lineTo(55,140);
context.lineTo(60,100);
context.stroke();

/* some papers */
context.fillRect(40,110, 7,7);

context.translate(48, 97);
context.rotate(Math.PI/4);
context.fillRect(0,0, 7,7);
context.rotate(-Math.PI/4);
context.translate(-48, -97);

context.translate(40, 85);
context.rotate(Math.PI/4);
context.fillRect(0,0,7,7);
context.rotate(-Math.PI/4);
context.translate(-40,-85);

context.lineCap = "round";
/* the body */
context.fillRect(90,60,30,45);
/* feet */
context.lineWidth = 8;
context.beginPath();
context.moveTo(94,100);
context.lineTo(94,140);
context.stroke();

context.beginPath();
context.moveTo(116,100);
context.lineTo(116,140);
context.stroke();

/* the shoulder */

context.lineWidth = 10;
context.beginPath();
context.moveTo(90,60);
context.lineTo(124,60);
context.stroke();

/* right hand --on the left */
context.lineWidth = 8;
context.beginPath();
context.moveTo(89,60);
context.lineTo(74,80);
context.lineTo(54,80);
context.stroke();

context.beginPath();
context.moveTo(125,60);
context.lineTo(125, 100);
context.stroke();

/* head */
context.beginPath();
context.arc(107,40, 10, 0, Math.PI*2);
context.fill();

context.lineCap = "butt";

