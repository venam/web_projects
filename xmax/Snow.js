var mufflar_rotation = 0;
var snowflakes = [
[-500,0], 
	[-500,0], 
	[-500,0],
	[-500,0],
	[-500,0], 
	[-500,0], 
	[-500,0], 
	[-500,0], 
	[-500,0], 
	[-500,0], 
	[-500,0], 
	[-500,0], 
		[-500,0], 
	[-500,0], 
	[-500,0], 
	[-500,0], 
[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
	[-500,0],
	[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
[-500,0],
	[-500,0]];

function draw_snowman () {
	var canvas = document.getElementById("Snow");
	var context = canvas.getContext("2d");



	var grad = context.createLinearGradient(0,0, 0,300);
	grad.addColorStop(0.4,"#1B0B1E");
	grad.addColorStop(1, "#121212");
	context.fillStyle = grad;
	context.fillRect(0, 0, 350,300);

	context.shadowColor = "#D7E5D6";
	context.shadowBlur  = 3;
	context.fillStyle   = "#FFFFFF";
	context.strokeStyle = "#303030";
	context.lineWidth   = 2;

	/* snow on floor */
	context.beginPath();
	context.moveTo(0,240);
	context.bezierCurveTo( 100,280, 250,190, 350,250);
	context.lineTo( 350, 400);
	context.lineTo( 0, 400);
	context.lineTo(0, 240);
	context.fill();

	/* body */
	context.beginPath();
	context.moveTo(175,113);
	context.quadraticCurveTo( 100, 140,120,250);
	context.lineTo( 175+55, 250);
	context.quadraticCurveTo( 175+75, 140,175, 113);
	context.fill();



	/* mufflar */
	var grad = context.createLinearGradient(150,110, 200,110);
	grad.addColorStop(0.3, "#3FFD97");
	grad.addColorStop(1, "#3FFDF6");
	context.fillStyle = grad;


	context.translate(200,110);
		context.rotate( mufflar_rotation);

			context.beginPath();
			context.moveTo(0,0);
			context.lineTo(40, 40);
			context.lineTo(30,50);
			context.lineTo( -10,10);
			context.lineTo( 0,0);
			context.fill();
			context.stroke();

			context.beginPath();
			context.moveTo(40,40);
			context.lineTo(45, 45);
			context.stroke();

			context.beginPath();
			context.moveTo(37,43);
			context.lineTo( 37+5, 43+5);
			context.stroke();

			context.beginPath();
			context.moveTo(37-3,43+3);
			context.lineTo( 37+5-3, 43+5+3);
			context.stroke();


			context.beginPath();
			context.moveTo(37-6,43+6);
			context.lineTo( 37+5-6, 43+5+6);
			context.stroke();

		context.rotate( -mufflar_rotation);
	context.translate(-200, -110);



	context.beginPath();
	context.moveTo(150, 110);
	context.quadraticCurveTo( 175, 105, 200, 110);
	context.quadraticCurveTo( 210, 120, 200,130);
	context.quadraticCurveTo( 175, 140,150, 130);
	context.quadraticCurveTo( 140, 120, 150, 110);
	context.fill();
	context.stroke();


	context.shadowBlur  = 0;
	context.strokeStyle = "#886A30";
	context.lineWidth   = 10;
	context.lineCap = "butt";


	/* hand right */
	context.beginPath();
	context.moveTo(210, 160);
	context.lineTo( 260, 210);
	context.stroke();

	context.lineWidth = 5;
	context.beginPath();
	context.moveTo(260, 207);
	context.lineTo( 275, 205);
	context.stroke();

	context.beginPath();
	context.moveTo(256, 210);
	context.lineTo( 274, 220);
	context.stroke();

	context.beginPath();
	context.moveTo(253, 207);
	context.lineTo( 253, 230);
	context.stroke();



	/* hand left */
	context.lineWidth = 10;
	context.beginPath();
	context.moveTo(140, 160);
	context.lineTo( 90, 110 );
	context.stroke();

	context.lineWidth = 5;
	context.beginPath();
	context.moveTo( 90, 112);
	context.lineTo( 70, 116);
	context.stroke();

	context.beginPath();
	context.moveTo( 93, 110);
	context.lineTo( 90, 95);
	context.stroke();


	context.shadowColor = "#D7E5D6";
	context.shadowBlur  = 3;
	context.fillStyle   = "#FFFFFF";
	context.strokeStyle = "#303030";
	context.lineWidth   = 2;


	/* head */
	context.translate( 0, 10);
	//back of the head
	context.beginPath();
	context.arc(175,80, 35, 0, Math.PI*2);
	context.fill();
	//eyes
	context.fillStyle = "#212121";
	context.shadowBlur = 0;
	//left
	context.beginPath();
	context.arc(159,75, 15, 0, Math.PI*2);
	context.fill();
	context.fillStyle = "#FFFFFF";
	context.beginPath();
	context.arc(165,70, 5, 0, Math.PI*2);
	context.fill();
	//right
	context.fillStyle = "#212121";
	context.beginPath();
	context.arc(191,75, 15, 0, Math.PI*2);
	context.fill();
	context.fillStyle = "#FFFFFF";
	context.beginPath();
	context.arc(185,79, 5, 0, Math.PI*2);
	context.fill();
	//nose
	context.beginPath();
	context.fillStyle = "#FD973F";
	context.moveTo(165,90);
	context.lineTo(180,80);
	context.lineTo(195, 110);
	context.lineTo( 165,90);
	context.fill();
	context.stroke();
	//hat

	context.lineCap = "round";
	context.strokeStyle = "#121212";
	context.shadowColor = "#303030";
	context.shadowBlur = 2;

	context.lineWidth = 35;
	context.beginPath();
	context.moveTo( 200, 44);
	context.lineTo( 200, 40);
	context.stroke();

	context.beginPath();
	context.lineWidth = 20;
	context.moveTo(185,40);
	context.lineTo(210, 60);
	context.stroke();

	context.lineWidth = 2;
	context.shadowBlur = 0;

	context.translate(0, -10);

	draw_snowflakes();

}

function draw_snowflakes()
{
	var canvas = document.getElementById("Snow");
	var context = canvas.getContext("2d");
	context.fillStyle = "#FFFFFF";

	for (var i=0; i< snowflakes.length; i++) {
		//needs to be initialized
		if (snowflakes[i][0]==-500) {
			//random x
			snowflakes[i][0] = -Math.floor(Math.random()*370+1);
			//random y
			snowflakes[i][1] = Math.floor(Math.random()*300+1);
		}
		//reinitialized 
		else if (snowflakes[i][0]>355) { 
			snowflakes[i][0] = -500;
		}
		else {
			snowflakes[i][0]+=5;
		}
	}

	//after setting up draw all snow
	for (var i=0; i< snowflakes.length; i++) {
		context.translate(snowflakes[i][0], snowflakes[i][1]);
			context.beginPath();
			context.arc(0,0, 2,0, Math.PI*2);
			context.fill();
		context.translate(-snowflakes[i][0], -snowflakes[i][1]);
	}

}

draw_snowman();
