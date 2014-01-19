var gun_interv;
var laser_width=20;

function draw_gun ()
{
	var canvas = document.getElementById("artillery");
	var context = canvas.getContext("2d");

	context.lineWidth = 2;
	context.strokeStyle = "#303030";
	context.fillStyle = "#303030";

	/* fancy shadow */
	context.shadowBlur = 3;
	context.shadowColor = "#212121";

	/* first-left part */
	context.beginPath();
	context.moveTo(15,90);
	context.arc(15,100, 10, Math.PI/2, 3*Math.PI/2,false);
	context.stroke();

	context.beginPath();
	context.moveTo(40,85);
	context.lineTo(20,85);
	context.quadraticCurveTo(13,88,15,90); 
	context.stroke();

	context.beginPath();
	context.moveTo(40,115);
	context.lineTo(20,115);
	context.quadraticCurveTo(13,113, 15, 110);
	context.stroke();

	context.beginPath();
	context.moveTo(40,85);
	context.quadraticCurveTo(18,100, 40, 115);
	context.stroke();

	context.beginPath();
	context.strokeRect(15, 95, 13, 10);

	/* closing path */
	context.beginPath();
	context.moveTo(40,115);
	context.lineTo(50,113);
	context.stroke();

	context.beginPath();
	context.moveTo(40,85);
	context.lineTo(50,87);
	context.stroke();

	/* arc */
	context.beginPath();
	context.arc(56, 100, 15, Math.PI/2, 3*Math.PI/2);
	context.stroke();

	/* zoomer */
	context.beginPath();
	context.moveTo(70, 75);
	context.lineTo(100, 75);
	context.stroke();
	context.beginPath();
	context.moveTo(70, 90);
	context.lineTo(100, 90);
	context.stroke();

	context.beginPath();
	context.moveTo(70, 90);
	context.quadraticCurveTo(68, 83,70,75);
	context.stroke();

	context.beginPath();
	context.moveTo(90, 90);
	context.quadraticCurveTo(88, 83,90,75);
	context.stroke();

	context.beginPath();
	context.moveTo(80, 90);
	context.quadraticCurveTo(78, 83,80,75);
	context.stroke();

	context.beginPath();
	context.moveTo(108, 83);
	context.arc(102,83, 7, 0, Math.PI*2);
	context.stroke();

	context.beginPath();
	context.moveTo(108, 83);
	context.arc(102,83, 4, 0, Math.PI*2);
	context.fill();



	/* down style */
	context.beginPath();
	context.moveTo(53,115);
	context.lineTo(53,107);
	context.lineTo(44, 107);
	context.stroke();

	context.beginPath();
	context.moveTo(54,85);
	context.lineTo(70, 85);
	context.stroke();

	context.beginPath();
	context.moveTo(64,85);
	context.lineTo(64,90);
	context.lineTo(44,90);
	context.stroke();

	/*extending bottom */
	context.beginPath();
	context.moveTo(55,115);
	context.lineTo(70, 125);
	context.lineTo(100,125);
	context.lineTo(105,120);
	context.stroke();

	/*bolder */
	context.beginPath();
	context.moveTo(105,120);
	context.lineWidth = 4;
	context.lineTo(130,120);
	context.stroke();
	context.lineWidth = 2;

	/* continue extension */
	context.beginPath();
	context.moveTo(130,120);
	context.lineTo(135,125);
	context.lineTo(190,125);
	context.quadraticCurveTo(200,102,180,100);
	context.lineTo(135,100);
	context.lineTo(134,104);
	context.lineTo(118,104);
	context.lineTo(108,110);
	context.lineTo(70, 110);
	context.lineTo(70, 98);
	context.lineTo(76, 91);
	context.lineTo(95,91);
	context.lineTo(100,94);
	context.lineTo(104,110);
	context.stroke();

	/* making box 3d */
	context.beginPath();
	context.moveTo(103, 90);
	context.lineTo( 105, 95);
	context.lineTo( 109, 110);
	context.stroke();

	/* linking to nuclear */
	context.beginPath();
	context.fillRect(118, 98,16,8);
	context.fillRect(128, 88,8,16);
	context.moveTo(129,88);
	context.lineTo(160,88);
	context.moveTo(110,84);
	context.lineTo(130,84);
	context.lineTo(130,90);
	context.lineTo(130,84);
	context.lineTo(133,80);
	context.lineTo(160,80);
	context.lineTo(160,100);
	context.lineTo(160,80);
	context.lineTo(170,70);
	context.stroke();

	/* start of nuclear */
	context.beginPath();
	context.moveTo(170,70);
	context.lineTo(175,70);
	context.lineTo(173,73);
	context.lineTo(178,73);
	context.lineTo(184, 67);
	context.lineTo(179, 66);
	context.lineTo(175,70);
	context.stroke();
	context.beginPath();
	context.moveTo(170+10,70);
	context.lineTo(175+10,70);
	context.lineTo(173+10,73);
	context.lineTo(178+10,73);
	context.lineTo(184+10, 67);
	context.lineTo(179+10, 66);
	context.lineTo(175+10,70);
	context.stroke();
	context.beginPath();
	context.moveTo(170+20,70);
	context.lineTo(175+20,70);
	context.lineTo(173+20,73);
	context.lineTo(178+20,73);
	context.lineTo(184+20, 67);
	context.lineTo(179+20, 66);
	context.lineTo(175+20,70);
	context.stroke();


	context.beginPath();
	context.moveTo(170,80);
	context.lineTo(175,80);
	context.lineTo(170,100);
	context.lineTo(165,100);
	context.lineTo(170,80);
	context.stroke();

	context.beginPath();
	context.moveTo(170+10,80);
	context.lineTo(175+10,80);
	context.lineTo(170+10,100);
	context.lineTo(165+10,100);
	context.lineTo(170+10,80);
	context.stroke();

	context.beginPath();
	context.moveTo(170+20,80);
	context.lineTo(175+20,80);
	context.lineTo(170+20,103);
	context.lineTo(165+20,101);
	context.lineTo(170+20,80);
	context.stroke();

	/* nuclear */

	context.beginPath();
	context.lineWidth = 4;
	context.moveTo(218,70);
	context.lineTo(210,75);
	context.lineTo(205,90);
	context.lineTo(205,100);
	context.lineTo(210,110);
	context.lineTo(215,114);
	context.stroke();
	context.lineWidth = 2;

	context.beginPath();
	context.moveTo(230,114);
	context.lineTo(240, 110);
	context.lineTo(245, 100);
	context.lineTo(245,80);
	context.lineTo(240,75);
	context.lineTo(230,70);
	context.lineTo(217,69);
	context.lineTo(202,69);
	context.stroke();

	context.beginPath();
	context.moveTo(240,75);
	context.lineTo(225,80);
	context.lineTo(225,100);
	context.lineTo(240,110);
	context.stroke();

	context.beginPath();
	context.moveTo(225,80);
	context.lineTo(213,75);
	context.stroke();

	context.beginPath();
	context.moveTo(225,100);
	context.lineTo(210,115);
	context.stroke();

	context.beginPath();
	context.moveTo(225,89);
	context.lineTo(204,89);
	context.stroke();

	context.beginPath();
	context.moveTo(225,94);
	context.lineTo(204,94);
	context.stroke();



	context.beginPath();
	context.lineWidth = 7;
	context.moveTo(238,80);
	context.lineTo( 238,99);
	context.lineTo(236,100);
	context.lineTo(231,97);
	context.lineTo(236,81);
	context.stroke();
	context.lineWidth =2;




	/* lines inside box */
	context.beginPath();
	context.fillRect(80,94, 10,2);
	context.fillRect(93,95, 4,2);
	context.fillRect(73,100, 10,2);
	context.fillRect(90,100, 6,2);
	context.fillRect(77,105, 6,2);
	context.fillRect(90,105, 10,2);
	context.stroke();


	/* line down */
	context.beginPath();
	context.moveTo(70,110);
	context.lineTo(70,124);
	context.stroke();

	/* little deco before ammo */
	context.beginPath();
	context.moveTo(120,104);
	context.lineTo(120,110);
	context.lineTo(128, 110);
	context.lineTo(128,104);
	context.stroke();


	/* ammo inside */
	context.beginPath();
	context.moveTo(180, 114);
	context.arc(180,114, 4, 0, Math.PI*2);
	context.fill();
	context.beginPath();
	context.moveTo(187, 114);
	context.arc(180,114, 7, 0, Math.PI*2);
	context.stroke();

	context.beginPath();
	context.moveTo(180, 121);
	context.lineTo(167,121);
	context.lineTo(163,117);
	context.lineTo(150, 117);
	context.lineTo(154,120);
	context.lineTo(140,120);
	context.quadraticCurveTo(130, 114, 140, 108);
	context.stroke();

	context.beginPath();
	context.moveTo(180, 107);
	context.lineTo(167,107);
	context.lineTo(163,110);
	context.lineTo(150,110);
	context.lineTo(154,108);
	context.lineTo(140, 108);
	context.stroke();

	/* bottom */
	context.beginPath();
	context.fillRect(180,125,10,28);
	context.fillRect(170,125,5,28);
	context.fillRect(155,125,10,28);
	context.fillRect(145,125,5,28);
	context.stroke();

	context.beginPath();
	context.moveTo(203,160);
	context.arc(195,160, 8, 0,Math.PI*2);
	context.stroke();
	context.beginPath();
	context.moveTo(203,160);
	context.arc(195,160, 4, 0,Math.PI*2);
	context.fill();

	context.beginPath();
	context.moveTo(198,168);
	context.lineTo(140,168);
	context.stroke();

	context.beginPath();
	context.moveTo(198,152);
	context.lineTo(140,152);
	context.stroke();

	/* lines inside bottom gun */
	context.beginPath();
	context.moveTo(140, 152);
	context.quadraticCurveTo( 130, 160, 140,168);
	context.stroke();

	context.beginPath();
	context.moveTo(150, 152);
	context.quadraticCurveTo( 140, 160, 150,168);
	context.stroke();

	context.beginPath();
	context.moveTo(155, 152);
	context.quadraticCurveTo( 145, 160, 155,168);
	context.stroke();




	/* right gun same as bottom x+56 y-38*/
	context.beginPath();
	context.moveTo(203+56,160-38);
	context.arc(195+56 ,160-38, 8, 0,Math.PI*2);
	context.stroke();
	context.beginPath();
	context.moveTo(203+56,160-38);
	context.arc(195+56,160-38, 4, 0,Math.PI*2);
	context.fill();

	context.beginPath();
	context.moveTo(198+56,168-38);
	context.lineTo(140+56,168-38);
	context.stroke();

	context.beginPath();
	context.moveTo(198+56,152-38);
	context.lineTo(140+56,152-38);
	context.stroke();

	context.beginPath();
	context.moveTo(140+56, 152-38);
	context.quadraticCurveTo( 130+56, 160-38, 140+56,168-38);
	context.stroke();

	context.beginPath();
	context.moveTo(150+56, 152-38);
	context.quadraticCurveTo( 140+56, 160-38, 150+56,168-38);
	context.stroke();

	context.beginPath();
	context.moveTo(155+56, 152-38);
	context.quadraticCurveTo( 145+56, 160-38, 155+56,168-38);
	context.stroke();
}

function start_laser_attack()
{
	gun_interv = window.setInterval(increase_laser, 20);
}

function draw_laser()
{
	var canvas          = document.getElementById("artillery");
	var context         = canvas.getContext("2d");

	context.lineWidth   = 2;
	context.shadowBlur = 8;

	/* first laser */
	context.shadowBlur = 14;
	context.shadowColor = "#970B36";
	context.strokeStyle = "#970B36";
	context.beginPath();
	context.moveTo(250,90);
	context.lineWidth = 50;
	context.lineTo(260+laser_width, 90);
	context.stroke();

	/* second laser */
	context.fillStyle = "#DC4575";
	context.strokeStyle = "#DC4575";
	context.shadowBlur = 6;
	context.shadowColor = "#DC4575";
	context.beginPath();
	context.moveTo(250, 90);
	context.arc(254, 90, 25, 0, Math.PI*2);
	context.fill();
	context.beginPath();
	context.moveTo(250,90);
	var randomization = Math.floor(Math.random() *23+1);
	context.lineWidth = 20+randomization;
	context.lineTo(260+laser_width,90);
	context.stroke();

	context.strokeStyle = "#C1DC45";
	context.fillStyle   = "#C1DC45";
	context.shadowColor = "#C1DC45";

	/* last inside laser */
	context.beginPath();
	context.moveTo(250,90);
	randomization = Math.floor(Math.random() *10 +1);
	context.lineWidth = 20+randomization;
	context.lineTo(250+laser_width,90);
	context.stroke();

	context.beginPath();
	context.moveTo(250, 90);
	context.arc(247, 90, 20, 0, Math.PI*2);
	context.fill();

}

function increase_laser() 
{
	laser_width+=20;
	clear_screen();
	draw_laser();
}

function clear_screen() 
{
	var canvas = document.getElementById("artillery");
	var context = canvas.getContext("2d");
	context.clearRect(0,0,700,400);
	draw_gun();
}

function reset_gun()
{
	var canvas = document.getElementById("artillery");
	var context = canvas.getContext("2d");
	clearInterval(gun_interv);
	clear_screen();
	laser_width = 20;
}


draw_gun();

