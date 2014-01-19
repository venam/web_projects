var canvas = document.getElementById("museum");
var context = canvas.getContext("2d");



/* bluies */
context.fillStyle = "#92D4F6";
context.fillRect(0,0, 500,250);

context.shadowBlur = 2;
context.shadowColor = "#303030";

/* blackies */
context.fillStyle = "#606060";
context.fillRect( 0,250,500,300);

/* greenies */
context.fillStyle = "#75DC45";
context.strokeStyle = "#212121";

context.beginPath();
context.moveTo(0, 250);
context.lineTo(100, 300);
context.lineTo(500, 300);
context.lineTo(440, 260);
context.lineTo(0,250);
context.fill();
context.stroke();



/* back building */
grad = context.createLinearGradient(55,10,196,250);
grad.addColorStop(0,"#F1F7F7");
grad.addColorStop(0.45, "#F1F7F7");
grad.addColorStop(0.45, "#D4EBDB");
context.fillStyle = grad;

context.strokeStyle = "#212121";
context.lineWidth = 2;

context.beginPath();
context.moveTo(50,10);
context.lineTo(200,35);
context.lineTo(196,250);
context.lineTo(40,250);
context.lineTo(50,10);
context.fill();
context.stroke();

grad = context.createLinearGradient(50,10,240,90);
grad.addColorStop(0,"#F1F7F7");
grad.addColorStop(0.1, "#F1F7F7");
grad.addColorStop(0.1, "#D4EBDB");
context.fillStyle = grad;

context.beginPath();
context.moveTo(50,10);
context.lineTo(10,20);
context.lineTo(2,250);
context.lineTo(40,250);
context.lineTo(50,10);
context.fill();
context.stroke();


function row_of_win() {
	context.translate(-110,-30);
	draw_window();
	context.translate(36,0);
	draw_window();
	context.translate(36,0);
	draw_window();
	context.translate(36,0);
	draw_window();
	context.translate(-36*3,0);
	context.translate(110, 30);
}

context.scale(1.0,0.9);
context.rotate(Math.PI/30);
row_of_win();
context.translate(1,30);
row_of_win();
context.translate(1,30);
row_of_win();

context.translate(-2, -60);
context.rotate( - Math.PI/30);
context.scale(1, 1/0.9);



/* observator 1 -- 2nd plan */
context.fillStyle = "#B6E4FD";
context.beginPath();
context.scale( 1, 0.5);
context.arc(120,280, 63, 0, Math.PI*2);
context.fill();
context.stroke();
context.scale(1, 1/0.5);


context.fillStyle = "#303030";
context.beginPath();
context.rect(50,155, 138,40);
context.fill();
context.stroke();

context.fillStyle = "#D4EBDB";
context.beginPath();
context.moveTo(50,163);
context.quadraticCurveTo(180,150,190,163);
context.quadraticCurveTo(195,150,190,140);
context.quadraticCurveTo(160,120,50,142);
context.quadraticCurveTo(40,150,50,163);
context.fill();
context.stroke();


/* observer 2 --2nd plan */
context.fillStyle = "#B6E4FD";
context.beginPath();
context.scale( 1, 0.7);
context.arc(280,120, 50, 0, Math.PI*2);
context.fill();
context.stroke();
context.scale(1, 1/0.7);

context.fillStyle = "#D4EBDB";

context.beginPath();
context.moveTo(180,80);
context.quadraticCurveTo(280,50,380,80);
context.lineTo(330,200);
context.lineTo(180+50,200);
context.lineTo(180,80);
context.fill();
context.stroke();
//lines inside 
context.fillStyle = "#303030";
context.beginPath();
context.moveTo(190,105);
context.quadraticCurveTo(280,90,370,105);
context.lineTo(366,114);
context.quadraticCurveTo(280,100,194,114);
context.lineTo(190,105);
context.fill();
context.stroke();

context.beginPath();
context.moveTo(205,135);
context.quadraticCurveTo(280,90+30,358,105+30);
context.lineTo(352,114+30);
context.quadraticCurveTo(280,100+30,208,114+30);
context.lineTo(205,135);
context.fill();
context.stroke();

/* front building */
context.fillStyle = "#81ADA4";
context.beginPath();
context.moveTo(30,220);
context.lineTo(30,255);
context.lineTo(70,270);
context.lineTo(70,218);
context.lineTo(30,220);
context.fill();
context.stroke();

context.beginPath();
context.moveTo(70,218);
context.lineTo(450,218);
context.lineTo(453,270);
context.lineTo(70,270);
context.lineTo(70,218);
context.fill();
context.stroke();

grad = context.createLinearGradient(30,220,453,400);
grad.addColorStop(0,"#F1F7F7");
grad.addColorStop(0.2, "#F1F7F7");
grad.addColorStop(0.2, "#D4EBDB");
context.fillStyle = grad;


context.beginPath();
context.moveTo(450,218);
context.lineTo(453, 190);
context.lineTo(130, 170);
context.lineTo(128, 160);
context.lineTo(80, 160);
context.lineTo(30,180);
context.lineTo(30,220);
context.lineTo(70,218);
context.lineTo(450,218);
context.fill();
context.stroke();
/* window of the front build */

context.translate(-230,120);
context.scale(1.5,1);
draw_window();
context.scale(1/1.5,1);
context.translate(230, -120);


