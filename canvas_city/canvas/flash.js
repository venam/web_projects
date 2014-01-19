var canvas = document.getElementById("flash");
var context = canvas.getContext("2d");

context.strokeStyle = "#303030";
context.fillStyle = "#CD282C";

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


/* the logo */
context.beginPath();
context.shadowBlur = 0;

context.lineWidth = 12;
context.strokeStyle = "#4F1514";
context.moveTo(124,60);
context.bezierCurveTo(100,61,105,99,80,100);
context.stroke();

context.lineWidth = 8;
context.strokeStyle = "#AF6468";
context.moveTo(124,60);
context.bezierCurveTo(100,61,105,99,80,100);
context.stroke();

context.lineWidth = 6;
context.strokeStyle = "#FFFFFF";
context.moveTo(124,60);
context.bezierCurveTo(100,61,105,99,80,100);
context.stroke();

context.beginPath();
context.lineWidth = 2;
context.strokeStyle = "#4F1514";
context.moveTo(124,55);
context.lineTo(124,66);
context.stroke();

context.beginPath();
context.lineWidth = 2;
context.strokeStyle = "#4F1514";
context.moveTo(80, 95);
context.lineTo(80,106);
context.stroke();


context.beginPath();
context.fillStyle = "#FFFFFF";
context.shadowBlur = 0;
context.lineWidth = 2;
context.rect(105,75, 13,8);
context.fill();

context.fillRect(113, 82, 5,7);

context.beginPath();
context.moveTo(110,75);
context.lineTo(119, 75);
context.lineTo(119, 88);
context.lineTo(113, 88);
context.lineTo(113, 83);
context.lineTo(105, 83);
context.stroke();

context.fillRect(85,75,15,5);
context.fillRect(85,70, 5,10);

context.beginPath();
context.moveTo(100,75);
context.lineTo(90,75);
context.lineTo(90,70);
context.lineTo(85,70);
context.lineTo(85,80);
context.lineTo( 97,80);
context.stroke();





