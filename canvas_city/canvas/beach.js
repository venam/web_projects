var canvas = document.getElementById("beach");
var context = canvas.getContext("2d");

/* full blown color */
context.fillStyle = "#221478";
context.fillRect(0,0,400,300);

/* the sky */
context.beginPath();
context.shadowBlur = 5;
context.shadowColor = "#C6EBFB";
var grad_sky = context.createLinearGradient(0,0,0,140);
grad_sky.addColorStop(0,"#22BAF8");
grad_sky.addColorStop(0.95, "#C6EBFB");
context.rect(0,0,400,140);
context.fillStyle = grad_sky;
context.fill();

/* the sand */
context.beginPath();
context.shadowBlur = 5;
context.shadowColor = "#E4CB66";
var grad_sand = context.createLinearGradient(0,300,0,240);
grad_sand.addColorStop(0,"#785F26");
grad_sand.addColorStop(0.80, "#E4CB66");
context.rect(0,240,400,300);
context.fillStyle = grad_sand;
context.fill();

/*waves */
function draw_wave () {
	//
	context.lineWidth = 2;
	context.beginPath();
	context.moveTo(50,200);
	context.quadraticCurveTo(90,200,100,230);
	context.lineTo(310,230);
	context.quadraticCurveTo(320,200,350,200);
	context.stroke();

	context.lineWidth = 0.5;
	context.beginPath();
	context.moveTo( 90,200);
	context.lineTo( 320,200);
	context.stroke();
	//splashes
	context.beginPath();
	context.moveTo( 110,226);
	context.lineTo( 300,226);
	context.stroke();
	context.beginPath();
	context.moveTo( 100,223);
	context.lineTo( 310,223);
	context.stroke();

	//curves right
	context.beginPath();
	context.moveTo( 55,205);
	context.quadraticCurveTo( 45, 220,60,230);
	context.stroke();
	context.beginPath();
	context.moveTo( 60,205);
	context.quadraticCurveTo( 50, 220,65,230);
	context.stroke();
	//curves left
	context.beginPath();
	context.moveTo( 350,205);
	context.quadraticCurveTo( 350, 220, 340,230);
	context.stroke();
	context.beginPath();
	context.moveTo( 345,205);
	context.quadraticCurveTo( 345, 220, 335,230);
	context.stroke();
	//
}

context.shadowBlur = 5;
context.shadowColor = "#FFFFFF";
context.strokeStyle = "#FFFFFF";
context.globalAlpha = 0.3;
draw_wave();
context.scale(0.75,0.75);
context.translate(80,29);
draw_wave();


/* palm */
context.globalAlpha = 1;
context.shadowBlur = 0;
context.fillStyle = "";
context.translate(-80,-29);
context.scale(1/0.75, 1/0.75);

function draw_palm() {

	//leaves
	context.fillStyle = "#55C12D";
	context.strokeStyle = "#55C12D";
	context.shadowBlur = 3;
	context.shadowColor = "#55C12D";
	context.beginPath();
	context.moveTo(45,224);
	context.lineTo(30,250);
	context.lineTo(35,220);
	context.lineTo(20,220);
	context.lineTo(33,210);
	context.lineTo(20,190);
	context.lineTo(40,190);
	context.lineTo(45,200);
	context.lineTo(50,190);
	context.lineTo(55,200);
	context.lineTo(70,195);
	context.lineTo(60,210);
	context.lineTo(80,220);
	context.lineTo(45,224);
	context.fill();


	//base
	context.strokeStyle = "#B67618";
	context.fillStyle = "#B67618";
	context.shadowBlur = 2;
	context.shadowColor = "#B67618";
	context.lineWidth = 3;
	context.beginPath();
	context.moveTo(45,220);
	context.lineTo(50,220);
	context.quadraticCurveTo(65,270,40, 290);
	context.lineTo(25,290);
	context.quadraticCurveTo(55,270,45,220);
	context.fill();
	context.stroke();
	
	//cocunut
	context.beginPath();
	context.strokeStyle = "#8C2315";
	context.fillStyle = "#8C2315";
	context.shadowBlur = 2;
	context.shadowColor = "#8C2315";
	context.moveTo(42,220);
	context.arc(42,220, 5, 0, Math.PI *2);
	context.fill();
	context.moveTo(55,224);
	context.arc(55,224, 5, 0, Math.PI *2);
	context.fill();
	context.shadowBlur = 0;
}

context.translate( -12,0);
draw_palm();
context.translate( 12,0);


// translate context to center of canvas
context.translate( canvas.width +12, 0);
// flip context horizontally
context.scale(-1, 1);
draw_palm();


