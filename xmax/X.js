
function draw_x_tree () 
{
	var canvas = document.getElementById("X");
	var context = canvas.getContext("2d");
	/* here will draw the dynamic background after */


	var grad = context.createLinearGradient(0,0, 0,300);
	grad.addColorStop(0.4,"#1B0B1E");
	grad.addColorStop(1, "#121212");
	context.fillStyle = grad;
	context.fillRect(0, 0, 350,300);


	//draw some stars randomly
	context.shadowBlur = 3;
	context.shadowColor = "#FDF63F";
	for (var i=0; i<23; i++) {
		if (Math.random()>0.5) {
			context.fillStyle = "#FDF63F";
		}
		else {
			context.fillStyle = "#A5FD3F";
		}
		context.beginPath();
		context.arc(
				Math.floor(Math.random()*350), 
				Math.floor(Math.random()*300),
				Math.floor(Math.random()*10+3),
				0,
				Math.PI*2);
		context.fill();
	}
	context.shadowBlur = 0;

	context.lineCap = "round";
	context.lineWidth = 2;

	context.strokeStyle = "#303030";

	//snow
	grad = context.createLinearGradient(0,250, 350, 300);
	grad.addColorStop(0.4, "#3C5B39");
	grad.addColorStop(1, "#393C5B");
	context.fillStyle = grad;

   
	context.beginPath();
	context.moveTo(0, 250);
	context.quadraticCurveTo(170,170,350,260);
	context.lineTo( 350, 400);
	context.lineTo(0,400);
	context.lineTo( 0,250);
	context.fill();
	context.stroke();


	//root of the tree
	grad = context.createLinearGradient(165,200, 165, 230);
	grad.addColorStop(0.5, "#FD8721");
	grad.addColorStop(1, "#FD973F");
	context.fillStyle = grad;


	context.beginPath();
	context.moveTo(165, 200);
	context.lineTo( 160, 230);
	context.lineTo(190, 230);
	context.lineTo( 185, 200);
	context.lineTo( 165, 200);
	context.fill();
	context.stroke();



	grad = context.createLinearGradient(175,50, 175, 250);
	grad.addColorStop(0.3, "#46FD3F");
	grad.addColorStop(1, "#3FFD68");
	context.fillStyle = grad;

	context.shadowColor = "#D7E5D6";
	context.shadowBlur  = 2;



	//the body of the tree
	context.beginPath();
	var x_t, y_t;
	x_t = 175;
	y_t = 50;
	context.moveTo(x_t, y_t);
	for (var i=0; i<6; i++) {
		context.quadraticCurveTo(x_t+10, y_t+14 ,x_t+25, y_t+20);
		if (i!=5) {
			context.quadraticCurveTo( x_t+20, y_t+35,x_t+15, y_t+24);
		}
		x_t += 15;
		y_t += 24;
	}
	//275, 190
	x_t = 85;
	y_t = 194;

	context.quadraticCurveTo( 175, 220,x_t, y_t);
	context.lineTo( x_t-9, y_t-4);
	x_t-=9;
	y_t-=4;

	for (var i=0; i<5; i++) {
		context.quadraticCurveTo(x_t+20, y_t-10, x_t+25, y_t-20);
		context.quadraticCurveTo( x_t+22,y_t-15,x_t+15, y_t-24);
		x_t += 15;
		y_t -= 24;
	}
	context.quadraticCurveTo( 180, 55,175, 50);
	context.fill();
	context.stroke();

	context.shadowBlur = 0;
	
}



