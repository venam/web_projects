
var head_move                     = 0.0;
var head_rotate                   = 0.0;

var shoulder_angle                = 0.0;

var left_hand_first_part_rotate   = 0.0;
var left_hand_second_part_rotate  = 0.0;

var right_hand_first_part_rotate  = 0.0;
var right_hand_second_part_rotate = 0.0;

var left_foot_first_part_rotate   = 0.0;
var left_foot_second_part_rotate  = 0.0;

var right_foot_first_part_rotate  = 0.0;
var right_foot_second_part_rotate = 0.0;

var whole_body_translation        = 0.0;

function draw_robot ()
{
	
	var canvas = document.getElementById("robot");
	var context = canvas.getContext("2d");


	var grad = context.createLinearGradient(150,0,150,300);
	grad.addColorStop(0, "#d6e3c6");
	grad.addColorStop(0.5, "#9187af");
	grad.addColorStop(1, "#d6e3c6");

	//background
	//context.fillStyle = grad;
	context.globalAlpha = 1;
	context.fillStyle = "#FFFFFF";
	context.fillRect(0,0,300,400);

	context.globalAlpha = 0.6;

	//shadow
	context.shadowBlur  =3;
	context.shadowColor = "#212121";
	//some colors
	context.fillStyle  = "#212121";
	context.strokeStyle = "#212121";
	context.lineCap = "round";

	context.translate(whole_body_translation,0);

	//head
	context.translate(146,95);
		context.rotate(head_rotate);
			context.translate(0,head_move);

				context.beginPath();
				context.arc( 0,-50, 25, 0,Math.PI *2);
				context.fill();
	
			context.translate(0,-head_move);
		context.rotate(-head_rotate);
	context.translate(-146,-95);

	//shoulder
	context.translate(146,95);
		context.rotate(shoulder_angle);

			context.lineWidth = 20;
			context.beginPath();
			context.moveTo(-38,0);
			context.lineTo(38,0);
			context.stroke();
	
	//left hand first part
			context.translate(-42,0);
				context.rotate(left_hand_first_part_rotate);
					context.lineWidth = 15;
					context.beginPath();
					context.moveTo( 0,0);
					context.lineTo( 0,50);
					context.stroke();
	//left hand second part
					context.translate(0,50);
						context.rotate(left_hand_second_part_rotate);
							context.beginPath();
							context.moveTo(0,0);
							context.lineTo(0,40);
							context.stroke();
						context.rotate(-left_hand_second_part_rotate);
					context.translate(0,-50);
				context.rotate(-left_hand_first_part_rotate);
			context.translate(42,0);


	//right hand first part
			context.translate(42,0);
				context.rotate(right_hand_first_part_rotate);
					context.lineWidth = 15;
					context.beginPath();
					context.moveTo( 0,0);
					context.lineTo( 0,50);
					context.stroke();
	//right hand second part
					context.translate(0,50);
						context.rotate(right_hand_second_part_rotate);
							context.beginPath();
							context.moveTo(0,0);
							context.lineTo(0,40);
							context.stroke();
						context.rotate(-right_hand_second_part_rotate);
					context.translate(0,-50);
				context.rotate(-right_hand_first_part_rotate);
			context.translate(-42,0);

	//body
			context.lineWidth = 2;
			context.beginPath();
			context.moveTo(-32,0);
			context.lineTo(32,0);

		context.rotate(-shoulder_angle);

		context.lineTo(32,95);
		context.lineTo(-32,95);

		context.rotate(shoulder_angle);
			context.lineTo(-32,0);
		context.rotate(-shoulder_angle);
		context.fill();

	context.translate(-146,-95);
	

	//feet
	context.lineWidth = 15;
	//separator
	context.beginPath();
	context.moveTo(120,189);
	context.lineTo(172,189);
	context.stroke();


	//left foot first part
	context.translate(119,192);
		context.rotate(left_foot_first_part_rotate);
			context.beginPath();
			context.moveTo(0,0);
			context.lineTo(0,50);
			context.stroke();
			
			//left foot second part
			context.translate(0,50);
				context.rotate(left_foot_second_part_rotate);
					context.beginPath();
					context.moveTo(0,0);
					context.lineTo(0,50);
					context.stroke();
				context.rotate(-left_foot_second_part_rotate);
			context.translate(0,-50);

		context.rotate(-left_foot_first_part_rotate);
	context.translate(-119,-192);

	//right foot first part
	context.translate(173,192);
		context.rotate(right_foot_first_part_rotate);
			context.beginPath();
			context.moveTo(0,0);
			context.lineTo(0,50);
			context.stroke();
			
			//right foot second part
			context.translate(0,50);
				context.rotate(right_foot_second_part_rotate);
					context.beginPath();
					context.moveTo(0,0);
					context.lineTo(0,50);
					context.stroke();
				context.rotate(-right_foot_second_part_rotate);
			context.translate(0,-50);

		context.rotate(-right_foot_first_part_rotate);
	context.translate(-173,-192);


	context.translate(-whole_body_translation,0);


	draw_the_hat();
}

draw_robot();



