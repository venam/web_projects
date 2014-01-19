var canvas = document.getElementById("mayor");
var context = canvas.getContext("2d");

/* fancy shadow */
context.shadowBlur = 4;
context.shadowColor = "#212121";

/* drawing a mustache */
context.lineWidth = 8;
context.lineCap = "round";
context.strokeStyle = "#121212";
context.beginPath();
context.moveTo(35,160);
context.quadraticCurveTo(60,155,70,150);
context.stroke();
context.beginPath();
context.moveTo(71,151);
context.quadraticCurveTo(76,155,106,160);
context.stroke();
/* round curves at start and end */
context.beginPath();
context.moveTo(32,160);
context.arc(30,150,10, Math.PI/2,0,false);
context.stroke();

context.beginPath();
context.moveTo(109,160);
context.arc(111,150, 10, Math.PI/2,Math.PI,true);;
context.stroke();

/* eyes */
context.beginPath();
context.moveTo(50,110);
context.arc(50,110, 3, 0, 2*Math.PI);
context.fill();

context.beginPath();
context.moveTo(86,110);
context.arc(86,110, 3, 0, 2*Math.PI);
context.fill();


/* glass */
context.lineWidth = 4;
context.beginPath();
context.moveTo(60,114);
context.arc(50,114, 10, 0, 2*Math.PI);
context.stroke();

/* hat */
context.fillStyle = "#121212";
context.beginPath();
context.fillRect(35,20,70, 60);
context.beginPath();
context.fillRect(30,70,80,25);




