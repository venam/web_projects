var did_1=false, did_2=false, did_3=false, did_4=false;

function start () 
{
	document.getElementById("ran1").addEventListener(
			"click", 
			function () {
				if (did_1 ==false) {
					document.getElementById("ran1").innerHTML = Math.floor(1+ Math.random() * 6);
					did_1 = true;
				}
				checkResults();
			}, 
			true);
	document.getElementById("ran2").addEventListener(
			"click", 
			function () {
				if (!did_2) {
					document.getElementById("ran2").innerHTML = Math.floor(1+ Math.random() * 6);
					did_2 = true;
				}
				checkResults();
			}, 
			true);
	document.getElementById("ran3").addEventListener(
			"click", 
			function () {
				if (!did_3) {
					document.getElementById("ran3").innerHTML = Math.floor(1+ Math.random() * 6);
					did_3 = true;
				}
				checkResults();
			}, 
			true);
	document.getElementById("ran4").addEventListener(
			"click", 
			function (){
				if (!did_4) {
					document.getElementById("ran4").innerHTML = Math.floor(1+ Math.random() * 6);
					did_4 = true;
				}
				checkResults();
			}, 
			true);
	document.getElementById("roll").addEventListener("click", rollDice, false);
	document.getElementById("reset").addEventListener("click", resetDice, false);
	document.getElementById("inorder").addEventListener("click", inOrderDice, false);
}

function rollDice ()
{
	if (did_1 == false && did_2 == false && did_3 == false && did_4 ==false) {
		document.getElementById("ran1").innerHTML = Math.floor( 1+ Math.random()* 6);
		document.getElementById("ran2").innerHTML = Math.floor( 1+ Math.random()* 6);
		document.getElementById("ran3").innerHTML = Math.floor( 1+ Math.random()* 6);
		document.getElementById("ran4").innerHTML = Math.floor( 1+ Math.random()* 6);
		did_1 = did_2 = did_3 = did_4 = true;
		checkResults();
	}
}

function checkResults ()
{
	if ( did_1 ==true && did_2 ==true && did_3 ==true &&did_4 == true){
		var ar = new Array();
		var result = "[LOOSE]";
		ar[0] = document.getElementById("ran1").innerHTML;
		ar[1] = document.getElementById("ran2").innerHTML;
		ar[2] = document.getElementById("ran3").innerHTML;
		ar[3] = document.getElementById("ran4").innerHTML;

		ar.sort();
		if (ar.length == 4 && (
				(ar[0] == 1 && ar[1] == 2 && ar[2] == 3 && ar[3] == 4) ||
				(ar[0] == 2 && ar[1] == 3 && ar[2] == 4 && ar[3] == 5) ||
				(ar[0] == 3 && ar[1] == 4 && ar[2] == 5 && ar[3] == 6))) {
				result = "[WIN]";
				}
			document.getElementById("win_loose").textContent = result;
	}
	else {
		document.getElementById("win_loose").textContent = "[UNKNOWN]";
	}
}

function resetDice ()
{
	document.getElementById("ran1").innerHTML = "#";
	document.getElementById("ran2").innerHTML = "#";
	document.getElementById("ran3").innerHTML = "#";
	document.getElementById("ran4").innerHTML = "#";
	did_1 = did_2 = did_3 = did_4 = false;
	checkResults();
}

function inOrderDice ()
{
	document.getElementById("ran1").innerHTML = "1";
	document.getElementById("ran2").innerHTML = "2";
	document.getElementById("ran3").innerHTML = "3";
	document.getElementById("ran4").innerHTML = "4";
	did_1 = did_2 = did_3 = did_4 = true;
	checkResults();
}


window.addEventListener("load", start, false);
