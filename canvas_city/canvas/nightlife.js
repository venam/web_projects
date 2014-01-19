function draw_night() {
	var canvas = document.getElementById("nightlife");
	var context = canvas.getContext("2d");

	/*background color */
	var radius = context.createRadialGradient(150,0,10,   150,10,220);
	radius.addColorStop(0, "#000000");
	radius.addColorStop(0.5, "#000018");
	radius.addColorStop(1, "#000000");
	context.fillStyle = radius;
	context.fillRect(0,0,300,300);

	/* fancy shadow */
	//context.shadowBlur = "1";
	//context.shadowColor = "#000018";


	/* fourth plan buildings */
	var x_pos = 25
	var y_pos = 40
	var height = 180;
	var distance = 0;
	var position = 1;
	for (var nb_build = 1; nb_build<=7; nb_build++) {
		context.beginPath();
		context.fillStyle = "#963200";
		for (var k=0; k<3;k++) {
			var randomization = Math.floor(Math.random() *29);
			context.fillRect(x_pos+position+randomization, y_pos+distance, 2,2);
		}


		context.beginPath();
		/* draw the building */
		for (var j=0; j< 25; j+=10) {
			for (var i=0; i< 150; i+=10) {
				var randomization = Math.random();
				if (randomization >0.4) {
					context.fillStyle = "#000026";
				}
				else {
					context.fillStyle = "#00324A";
				}
				if (Math.random() > 0.8) {
					context.fillRect(x_pos+1+j+position, y_pos+1+i+distance, 2,2);
				}
				else {
					context.fillRect(x_pos+1+j+position, y_pos+1+i+distance, 3,3);
				}
			}
		}
		/* choose if will grow or shrink */
		var randomization = Math.floor(Math.random()*12);
		var grow_or_shrink= Math.random();
		if (grow_or_shrink >=0.5 || distance <10) {
			height-=randomization;
			distance+=randomization;
		}
		else {
			height+=randomization;
			distance-=randomization;
		}
		/* choose next position */
		randomization = Math.floor(Math.random()*100);
		var grow_or_shrink= Math.random();
		if( position >180) {
			position-=randomization;
		}
		else {
			position+=randomization;
		}
	}


	/* third plan buildings */
	height = 180;
	distance = 0;
	position = 1;
	for (var nb_build = 1; nb_build<=6; nb_build++) {
		context.beginPath();
		context.fillStyle = "#000000";
		context.fillRect(25+position, 70+distance, 30, height);
		context.fillStyle = "#963200";
		for (var k=0; k<3;k++) {
			var randomization = Math.floor(Math.random() *29);
			context.fillRect(25+position+randomization, 70+distance, 2,2);
		}


		context.beginPath();
		/* draw the building */
		for (var j=0; j< 25; j+=10) {
			for (var i=0; i< 150; i+=10) {
				var randomization = Math.random();
				if (randomization >0.8) {
					context.fillStyle = "#000000";
				}
				else {
					context.fillStyle = "#00324A";
				}
				if (Math.random() > 0.8) {
					context.fillRect(26+j+position, 71+i+distance, 6,6);
				}
				else {
					context.fillRect(26+j+position, 71+i+distance, 4,4);
				}
			}
		}
		/* choose if will grow or shrink */
		var randomization = Math.floor(Math.random()*12);
		var grow_or_shrink= Math.random();
		if (grow_or_shrink >=0.5 || distance <10) {
			height-=randomization;
			distance+=randomization;
		}
		else {
			height+=randomization;
			distance-=randomization;
		}
		/* choose next position */
		randomization = Math.floor(Math.random()*100);
		var grow_or_shrink= Math.random();
		if( position >180) {
			position-=randomization;
		}
		else {
			position+=randomization;
		}
	}


	/* second plan buildings */
	height = 180;
	distance = 0;
	for (var nb_build = 1; nb_build<= 400; nb_build+=80) {
		context.beginPath();
		context.strokeStyle = "#004A64";
		context.lineWidth = 0.3;
		context.lineCap = "butt";
		context.fillStyle = "#001832";
		context.fillRect(20+nb_build, 22+distance, 40, height);
		context.strokeRect(19+nb_build,22+distance, 41, height+ 1);
		context.fillStyle = "#963200";
		for (var k=0; k<3;k++) {
			var randomization = Math.floor(Math.random() *40);
			context.fillRect(19+nb_build+randomization, 20+distance, 2,2);
		}

		context.beginPath();
		context.fillStyle = "#7D4A18";
		context.fillStyle = "#006264";
		for (var j=0; j< 40; j+=10) {
			for (var i=0; i< 300; i+=10) {
				var randomization = Math.random();
				if (randomization >0.8) {
					context.fillStyle = "#7D4A18";
				}
				else if (randomization >0.08) {
					context.fillStyle = "#006264";
				}
				else {
					context.fillStyle = "#001832";
				}
				if (Math.random() > 0.93) {
					context.fillRect(23+j+nb_build, 26+i+distance, 6,6);
				}
				else {
					context.fillRect(23+j+nb_build, 26+i+distance, 4,4);
				}
			}
		}
		var randomization = Math.floor(Math.random()*42);
		var grow_or_shrink= Math.random();
		if (grow_or_shrink >=0.5 || distance <10) {
			height-=randomization;
			distance+=randomization;
		}
		else {
			height+=randomization;
			distance-=randomization;
		}
	}

	/* first plan buildings */
	height = 50;
	distance = 0;
	position = 1;
	for (var nb_build = 1; nb_build<=10; nb_build++) {
		context.beginPath();
		context.fillStyle = "#000000";
		context.fillRect(10+position, 150+distance, 30, height);

		context.beginPath();
		/* draw the building */
		for (var j=0; j< 25; j+=10) {
			for (var i=0; i< 100; i+=10) {
				var randomization = Math.random();
				if (randomization >0.8) {
					context.fillStyle = "#969664";
				}
				else if (randomization >0.08) {
					context.fillStyle = "#7D4A18";
				}
				else {
					context.fillStyle = "#000000";
				}
				if (Math.random() > 0.93) {
					context.fillRect(13+j+position, 153+i+distance, 5,4);
				}
				else {
					context.fillRect(13+j+position, 153+i+distance, 3,3);
				}
			}
		}
		/* choose if will grow or shrink */
		var randomization = Math.floor(Math.random()*12);
		var grow_or_shrink= Math.random();
		if (grow_or_shrink >=0.5 || distance <10) {
			height-=randomization;
			distance+=randomization;
		}
		else {
			height+=randomization;
			distance-=randomization;
		}
		/* choose next position */
		randomization = Math.floor(Math.random()*100);
		var grow_or_shrink= Math.random();
		if( position >180) {
			position-=randomization;
		}
		else {
			position+=randomization;
		}
	}

	/* first plan blinding lights */
	for (var i=0; i< 5;i++) {
		context.shadowBlur = 10;
		context.shadowColor = "#7D4A18";
		context.beginPath();
		context.fillStyle = "#969664";
		var ran_x = Math.floor(Math.random()*300+3);
		var ran_y = Math.floor(Math.random()*34+3);
		context.arc(ran_x,200-ran_y,4,0,Math.PI*2);
		context.fill();
	}
	context.shadowBlur = 0;

}

draw_night();
