var wishes;
var where = 0;
function start()
{
	setInterval(draw_x_tree, 440);
	setInterval( move_mufflar, 34);
	wishes = [
	document.getElementById("one"),
	document.getElementById("two"),
	document.getElementById("three"),
	document.getElementById("four"),
	document.getElementById("five"),
	document.getElementById("six"),
	document.getElementById("seven")
		];
	document.getElementById("previous").addEventListener("click", displayPrevious, false);
	document.getElementById("next").addEventListener("click", displayNext, false);
}

function displayNext()
{
	console.log(where);
	if (where<wishes.length) {
		wishes[where].style.display = "block";
		if (where>0) {
			wishes[where-1].style.display = "none";	
		}
		where++;
	}
}


function displayPrevious()
{
	console.log(where);
	if (where>0) {
		where--
		wishes[where].style.display = "block";
		if (where<wishes.length-1) {
			wishes[where+1].style.display = "none";	
		}
	}
}


var up_down = true;
function move_mufflar()
{
	if (up_down) {
		mufflar_rotation-= 0.04;
	}
	else {
		mufflar_rotation+=0.04;
	}
	if (mufflar_rotation>0) {
		up_down = true;
	}
	else if (mufflar_rotation<-0.8 ) {
		up_down = false;
	}
	draw_snowman();
}


window.addEventListener("load", start,false);

