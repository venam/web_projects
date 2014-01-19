
function feet_dance_start()
{
	
	/*
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
	*/


	if ( step ==0 ) {
		right_foot_first_part_rotate  -= 0.1;
		right_foot_second_part_rotate  +=0.2;
		
		head_rotate +=0.2;

		if ( shoulder_angle <=0.05 ) {
			shoulder_angle +=0.025;
			right_hand_first_part_rotate += 0.1;
			right_hand_second_part_rotate -=0.25;
		}

		left_hand_first_part_rotate += 0.2;

		left_foot_first_part_rotate -= 0.12;
		left_foot_second_part_rotate += 0.08;
		if (right_foot_first_part_rotate <= -0.3){
			step = 1;
		}
	}

	else if (step == 1) {
		if (left_foot_first_part_rotate <0.4) {
			left_foot_second_part_rotate -= 0.02;
			left_foot_first_part_rotate  += 0.12;

			if ( shoulder_angle ==0.05) {
				left_hand_second_part_rotate -= 0.04;
				shoulder_angle = 0.06;
			}
		}
		else {
			step = 2;
		}
	}

	else if (step ==2 ) {
		right_foot_first_part_rotate +=0.1;
		right_foot_second_part_rotate -=0.2;
		if( right_foot_first_part_rotate >= 0.3) {
			step = 3;
		}
	}

	else if (step == 3) {
		whole_body_translation -= 4;
		

		if (shoulder_angle == 0.6) {
			right_hand_second_part_rotate +=0.03;
			left_hand_second_part_rotate +=0.03;
			shoulder_angle = 0.61;
		}

		left_foot_first_part_rotate -=0.035;
		right_foot_first_part_rotate +=0.02;
		right_foot_second_part_rotate +=0.1;
		if (right_foot_second_part_rotate >= 0.2) {
			step =4;
		}
	}

	else if(step == 4) {
		whole_body_translation -=8;
		if (shoulder_angle == 0.61 ) {
			left_hand_second_part_rotate +=0.03;
			right_hand_second_part_rotate +=0.2;
			shoulder_angle = 0.62;
		}
		left_foot_second_part_rotate += 0.025;
		left_foot_first_part_rotate -= 0.2;
		right_foot_first_part_rotate -=0.3;
		right_foot_second_part_rotate +=0.2;
		if ( whole_body_translation < -200) {
			step = 5;
		}
		if (right_foot_second_part_rotate >=0.6) {
			step = 1;
		}
	}

	draw_robot();
}


