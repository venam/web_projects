
/*
step                          = 0;
head_move                     = 0.0;
head_rotate                   = 0.0;

shoulder_angle                = 0.0;

left_hand_first_part_rotate   = 0.0;
left_hand_second_part_rotate  = 0.0;

right_hand_first_part_rotate  = 0.0;
right_hand_second_part_rotate = 0.0;

left_foot_first_part_rotate   = 0.0;
left_foot_second_part_rotate  = 0.0;

right_foot_first_part_rotate  = 0.0;
right_foot_second_part_rotate = 0.0;

whole_body_translation        = 0.0;

var ball_rotation             = 0.0;
*/


var draw_hat = false;


function hat_dance_start() 
{

	if (step ==0 ) {
		right_hand_first_part_rotate +=0.34;
		left_hand_first_part_rotate -=0.34;

		right_hand_second_part_rotate +=0.4;
		left_hand_second_part_rotate -=0.4;

		head_move +=4;

		if (right_hand_first_part_rotate >1.4) {
			step = 1;
		}
	}

	else if (step ==1 ) {
		draw_hat = true;
		step = 2;
	}

	else if (step ==2) {
		right_hand_first_part_rotate -=0.34;
		left_hand_first_part_rotate +=0.34;

		right_hand_second_part_rotate -=0.4;
		left_hand_second_part_rotate +=0.4;

		head_move -=3;

		if (right_hand_second_part_rotate <=0) {
			step =3;
		}

	}

	else if (step ==3) {
		head_rotate +=0.1;
		shoulder_angle += 0.03;
		right_foot_second_part_rotate +=0.1;
		if (head_rotate >0.6) {
			step = 4;
		}
	}
	else if (step==4) {
		head_rotate -=0.1;
		shoulder_angle -=0.03;
		right_foot_second_part_rotate -=0.1;
		if (head_rotate<-0.6) {
			step =  3;
		}
	}




	draw_robot();
}

function draw_the_hat () 
{
	if (draw_hat == true) {

		var canvas = document.getElementById("robot");
		var context = canvas.getContext("2d");


		context.lineWidth = 4;
		context.globalAlpha = 1;
		context.translate(whole_body_translation,0);

			context.translate(146,95);
				context.rotate(head_rotate);
					context.translate(0,head_move);
						
						context.strokeStyle = "#d75f5f";
						context.fillStyle   = "#d75f5f";
						//context.shadowBlur = 0;

						context.beginPath();
						context.moveTo( 20, -70);
						context.lineTo( 0,-110);
						context.lineTo( -20,-70);
						context.lineTo( 20, -70);
						context.fill();

						context.strokeStyle = "#FFFFFF";
						context.fillStyle   = "#FFFFFF";
						context.lineWidth = 6;
						context.beginPath();
						context.moveTo(-20, -70);
						context.lineTo(20,-70);
						context.stroke();

						context.beginPath();
						context.moveTo(0, -110);
						context.arc(0, -110, 5, 0, Math.PI*2);
						context.fill();

					context.translate(0,-head_move);
				context.rotate(-head_rotate);
			context.translate(-146,-95);
		context.translate(-whole_body_translation,0);
	}
}
