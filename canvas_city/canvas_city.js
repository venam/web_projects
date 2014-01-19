//passing arrays because I didn't find a better way to pass boolean by reference
var about_on      = new Array(false);
var hwp_on        = new Array(false);
var news_on       = new Array(false);
var psae_on       = new Array(false);
var leasure_on    = new Array(false);
var inter;
var step          = 0;
var ball_rotation = 0.0;


function show_param_stats() {
	console.log("head_move: "+head_move);
	console.log("head_rotate: "+head_rotate);

	console.log("shoulder_angle: "+shoulder_angle);

	console.log("left_hand_first_part_rotate: "+left_hand_first_part_rotate);
	console.log("left_hand_second_part_rotate: "+left_hand_second_part_rotate);

	console.log("right_hand_first_part_rotate: "+right_hand_first_part_rotate);
	console.log("right_hand_second_part_rotate: "+right_hand_second_part_rotate);
	
	console.log("left_foot_second_part_rotate: "+left_foot_second_part_rotate);
	console.log("left_foot_first_part_rotate: "+left_foot_first_part_rotate);
	
	console.log("right_foot_first_part_rotate: "+right_foot_first_part_rotate);
	console.log("right_foot_second_part_rotate:"+right_foot_second_part_rotate);

	console.log("whole_body_translation: "+whole_body_translation);
}


function feet_dance()
{
	reset();
	inter = setInterval(feet_dance_start, 80);
}

function handie()
{
	reset();
	inter = setInterval(hand_dance_start, 80);
}

function wave()
{
	reset();
	inter = setInterval(wave_dance_start, 80);
}

function ballon()
{
	reset();
	inter = setInterval(ballon_dance_start, 120);
}


function hat()
{
	reset();
	draw_hat = false;
	inter = setInterval(hat_dance_start, 90);
}

function reset()
{
	clearInterval(inter);
	step = 0;
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
	ball_rotation                 = 0.0;
	draw_robot();
}


function reset_all()
{
	draw_hat = false;
	reset();
}


function fold_unfold( on, hidden_id, spoiler_id)
{
	if ( on[0] ) {
		fold(on, hidden_id, spoiler_id);
	}
	else {
		unfold(on, hidden_id, spoiler_id);
	}
}

function fold(on,hidden_id,spoiler_id) 
{
	document.getElementById(hidden_id).style.display = "none";
	var spoiler = document.getElementById(spoiler_id);
	spoiler.innerHTML = "+";
	spoiler.style.color = "#73af5f";
	on[0] = false;
}

function unfold(on,hidden_id,spoiler_id)
{
	document.getElementById(hidden_id).style.display = "block";
	var spoiler = document.getElementById(spoiler_id);
	spoiler.innerHTML = "-";
	spoiler.style.color = "#d75f5f";
	on[0] = true;
}

function start() 
{
	//here starts the huge mess
	var night = document.getElementById("nightlife");
	night.addEventListener("click", draw_night, false);

	var laser = document.getElementById("artillery");
	laser.addEventListener("mousedown", start_laser_attack, false);
	laser.addEventListener("mouseup", reset_gun, false);

	var about_spoiler = document.getElementById("about_spoiler");
	about_spoiler.addEventListener(
			"click", 
			function() {
				fold_unfold(about_on, "about_hidden","about_spoiler");
			}, false);
	document.getElementById("link_about").addEventListener(
			"click", function () {
				unfold(about_on, "about_hidden", "about_spoiler");
				document.location.href = "#about_spoiler";
			}, false);

	var hwp_spoiler = document.getElementById("hwp_spoiler");
	hwp_spoiler.addEventListener(
			"click", 
			function() {
				fold_unfold(hwp_on, "hwp_hidden",  "hwp_spoiler");
			}, false);
	document.getElementById("link_hwp").addEventListener(
			"click", function () {
				unfold(hwp_on,"hwp_hidden","hwp_spoiler");
				document.location.href = "#hwp_spoiler";
			}, false);



	var news_spoiler = document.getElementById("news_spoiler");
	news_spoiler.addEventListener(
			"click", 
			function(){  
				fold_unfold(news_on,"news_hidden","news_spoiler");
			}, false);
	document.getElementById("link_news").addEventListener(
			"click", function () {
				unfold(news_on,"news_hidden","news_spoiler");
				document.location.href = "#news_spoiler";
			}, false);



	var psae_spoiler = document.getElementById("psae_spoiler");
	psae_spoiler.addEventListener(
			"click", 
			function() {
				fold_unfold(psae_on,"psae_hidden","psae_spoiler");
			}, false);
	document.getElementById("link_psae").addEventListener(
			"click", function () {
				unfold(psae_on,"psae_hidden","psae_spoiler");
				document.location.href = "#psae_spoiler";
			}, false);



	var leasure_spoiler = document.getElementById("leasure_spoiler");
	leasure_spoiler.addEventListener(
			"click", 
			function() {
				fold_unfold(leasure_on,"leasure_hidden","leasure_spoiler");
			}, false);
	document.getElementById("link_leasure").addEventListener(
			"click", function () {
				unfold(leasure_on,"leasure_hidden","leasure_spoiler");
				document.location.href = "#leasure_spoiler";
			}, false);

	document.getElementById("feet").addEventListener("click", feet_dance, false);
	document.getElementById("hand_move").addEventListener("click", handie, false);
	document.getElementById("reset").addEventListener("click", reset_all, false);
	document.getElementById("wave").addEventListener("click", wave, false);
	document.getElementById("ballon").addEventListener("click", ballon, false);
	document.getElementById("hat").addEventListener("click", hat, false);


}


window.addEventListener("load", start, false);

