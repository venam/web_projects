
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



function wave_dance_start() 
{

	if (step == 0 ) {
		right_hand_first_part_rotate -=0.2;
		left_hand_first_part_rotate  +=0.2;
		if ( right_hand_first_part_rotate <-1.2) {
			step =1;
		}
	}

	if (step == 1) {
		head_rotate += 0.2;
		shoulder_angle += 0.1;
		left_foot_second_part_rotate +=0.1;
		left_hand_second_part_rotate +=0.1;
		
		left_hand_first_part_rotate -=0.1;

		if(head_rotate > 0.7) {
			step = 2;
		}
	}

	if (step == 2 ) {
		head_rotate -= 0.2;
		shoulder_angle -= 0.1;
		left_foot_second_part_rotate -=0.1;
		left_hand_second_part_rotate -=0.2;
		
		right_hand_first_part_rotate +=0.1;
		left_hand_second_part_rotate +=0.1;

		right_hand_second_part_rotate -=0.1;
		right_foot_second_part_rotate +=0.1;
		right_foot_first_part_rotate -=0.01;

		if( head_rotate <=0) {
			step = 3;
		}
	}

	if (step == 3) {
		head_rotate =0;
		shoulder_angle = 0;
		left_foot_second_part_rotate =0;
		left_hand_second_part_rotate =0;

		right_hand_first_part_rotate -=0.1

		right_hand_second_part_rotate +=0.1;
		right_foot_second_part_rotate -=0.1;
		right_foot_first_part_rotate +=0.01;
		if (right_hand_second_part_rotate >0) {
			step = 4;
		}
	}

	if (step == 4) {
		right_hand_second_part_rotate =0;
		right_foot_first_part_rotate =0.0;
		right_hand_first_part_rotate  = -1.4;
		left_hand_first_part_rotate   = 1.4

		right_foot_second_part_rotate =0;
		step = 1;
	}


	draw_robot();
}

