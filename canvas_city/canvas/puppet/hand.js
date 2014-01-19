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

function hand_dance_start() 
{

	head_move+=1.5;
	if (head_move > 6) {
		head_move = 0;
	}

	if ( left_foot_second_part_rotate < -0.3) {
		left_foot_second_part_rotate  = 0.02;
		right_foot_first_part_rotate  =0.1

	}
	right_foot_first_part_rotate  += 0.02;
	left_foot_second_part_rotate  -= 0.1;

	if (step == 0) {
		left_hand_first_part_rotate -=0.2;
		left_hand_second_part_rotate -=0.5;

		right_hand_first_part_rotate +=0.1;
		right_hand_second_part_rotate +=0.63;

		shoulder_angle +=0.03;

		if(left_hand_first_part_rotate<-0.6) {
			step = 1;
		}
	}

	else if (step == 1) {
		right_hand_second_part_rotate +=0.3;
		left_hand_second_part_rotate  -=0.3;

		if (right_hand_second_part_rotate >2.4) {
			step =2;
		}
	}

	else if (step ==2 ) {
		right_hand_second_part_rotate -=0.4;
		left_hand_second_part_rotate  +=0.4;
		if  (right_hand_second_part_rotate <1.8) {
			if (left_hand_first_part_rotate <-0.6) {
				left_hand_first_part_rotate +=0.1;
			}
			else {
				left_hand_first_part_rotate -=0.1;
			}
			if (right_hand_first_part_rotate <0.3) {
				right_hand_first_part_rotate +=0.1;
			}
			else {
				right_hand_first_part_rotate -=0.1;
			}

			if (shoulder_angle >= -0.06) {
				shoulder_angle -=0.15; 
			}
			else {
				shoulder_angle +=0.15;
			}
			step =1;
		}
	}

	draw_robot();

}


