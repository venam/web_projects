
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

var ball_rotation = 0.0;
*/


function ballon_dance_start()
{
	var canvas = document.getElementById("robot");
	var context = canvas.getContext("2d");

	if (step==0) {
		head_rotate+= 0.2;
		shoulder_angle += 0.1;
		left_hand_first_part_rotate+=0.2;
		right_hand_first_part_rotate-=0.4;
		right_hand_second_part_rotate +=0.05;
		left_foot_first_part_rotate +=0.2;
		left_foot_second_part_rotate+=0.3;
		
		right_foot_first_part_rotate -=0.05;
		right_foot_second_part_rotate +=0.05;
		ball_rotation-=0.3;
		if ( head_rotate > 0.6) {
			step =1;
		}
	}

	if (step==1) {
		ball_rotation-=0.2;
		if(ball_rotation<-1.3) {
			step =2;
		}
	}

	if (step==2) {
		head_rotate -=0.2;
		shoulder_angle -=0.1;
		left_hand_first_part_rotate-=0.2;
		left_hand_second_part_rotate +=0.1;
		right_hand_first_part_rotate +=0.3;
		right_hand_second_part_rotate -=0.05;

		left_foot_second_part_rotate -=0.4;
		left_foot_first_part_rotate  -=0.2;
		ball_rotation+=0.2;

		right_foot_first_part_rotate +=0.05;
		right_foot_second_part_rotate -=0.05;
		if (head_rotate <=0) {
			step = 3;
		}
	}

	if (step ==3) {
		shoulder_angle = 0;
		head_rotate = 0;
		left_hand_first_part_rotate = 0;
		left_hand_second_part_rotate = 0;
		left_foot_second_part_rotate = 0;
		left_foot_first_part_rotate  =0;
		right_hand_first_part_rotate = 0;
		right_foot_second_part_rotate = 0;
		right_foot_first_part_rotate =0;
		right_hand_second_part_rotate =0.0;
		ball_rotation +=0.2;
		if( ball_rotation >=0) {
			step = 4;
		}
	}

	if (step ==4) {
		ball_rotation = 0;
		step = 0;
	}


	draw_robot();

	context.translate(350,350);
		context.rotate(ball_rotation);
			context.beginPath();
			context.lineWidth = 2;
			context.strokeStyle = "#000000";
			context.fillStyle = "#212121";
			context.globalAlpha = 1;
			context.moveTo(0,-280);
			context.arc( -13,-280, 13,0, Math.PI*2);
			context.fill();
			context.stroke();
		context.rotate(-ball_rotation);
	context.translate(-350,-350);

}


