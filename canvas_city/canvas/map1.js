var canvas = document.getElementById("map1");
var context = canvas.getContext("2d");

context.fillStyle = "#388700";
context.fillRect(0,0,500,300);

context.fillStyle = "#561D00";


context.fillRect(10,0,10,50);
context.fillRect(35,0,10,180);
context.fillRect(55,0,10,50);
context.fillRect(90,0,10,180);
context.fillRect(110,0,10,150);
/* Belmond */
context.fillRect(130,0,10,15);
context.fillRect(130,15,20,10);
context.fillRect(140,25,10,205);
/* thomas */
context.fillRect(0,50,150,10);
context.fillRect(150,40,10,20);
context.fillRect(160,40,20,10);
context.fillRect(180,30,10,20);
context.fillRect(190,30,190,10);
/* john */
context.fillRect(0,140,20,10);
context.fillRect(10,130,100,10);

/* boylston */
context.fillRect(200, 0, 10, 120);

/* east olive */
context.fillRect(180,120, 200, 10);
context.fillRect(160,120, 20,20);
context.fillRect(133, 130,40,10);
context.fillRect(133, 135, 10,10);
context.fillRect(120, 140,  20,20);
context.fillRect(100, 160,  20,20);
context.fillRect(80, 180,  20,20);
context.fillRect(70, 200,  20,20);
context.fillRect(60, 220,  20,30);
context.fillRect(50, 240,  10,20);
context.fillRect(44, 250,  10,30);

/* harvard */
context.fillRect(240, 0,  10,40);
context.fillRect(230, 20,  10,300);
context.fillRect(270, 30,  10,200);
context.fillRect(230, 60,  40,10);
context.fillRect(180, 226,  180,10);

/* broadway */
context.fillRect(300, 0,  10,300);
/* Building */
context.fillStyle = "#676767";
context.fillRect(280,10, 20,20);
context.fillStyle = "#561D00";

/* l */
context.fillRect(0,230,170,10);
context.fillRect(25,180,10,100);
context.fillRect(100,180,10,100);
context.fillRect(25,180,80,10);
context.fillRect(25,280,145,10);
context.fillRect(120,140,10,150);
context.fillRect(170,120,10,170);
context.fillRect(350, 0,  10,300);

/* sea side */
context.fillRect(380, 30,  10,300);
context.fillRect(390, 80,  40,10);
context.fillRect(390, 50,  40,10);
context.fillRect(390, 100,  40,10);
context.fillRect(390, 180,  40,10);
context.fillRect(430, 80,  10, 30);
context.fillRect(440, 80,  40, 5);
context.fillRect(440, 90,  40, 5);
context.fillRect(440, 100,  40, 5);
context.fillRect(474, 70,  10, 100);


/* sea */
context.fillStyle = "#00FFFF";
context.fillRect(420,200, 80,40);
context.fillRect(490, 0,  10,250);
context.fillRect(495, 245,10,250);
context.fillRect(480, 20,  40,10);
context.fillRect(470, 0,  60,20);
context.fillRect(460, 0,  10,10);

/* constru */
context.fillStyle = "#475200" // verdun green
context.fillRect(420,260, 50,10);
context.fillRect(420,260, 10,30);
context.fillRect(440, 240,  40, 5);
context.fillRect(390, 250,  80, 5);

//#676767 dim gray

/* powered by */
context.moveTo(0,200);
context.shadowBlur = 5;
context.shadowColor = "#121212";


context.fillStyle = "#B2B2B0";
context.font = "8px sans-serif";
context.textAlign="left";
context.fillText("POWERED BY", 4,284);
context.font = "14px ReservoirGrunge";
context.fillStyle = "#0A5FBC";
context.fillText("B", 4, 297);
context.fillStyle = "#FF2D0A";
context.fillText("o", 18, 297);
context.fillStyle = "#DCA502";
context.fillText("t", 32, 297);
context.fillStyle = "#0157E8";
context.fillText("n", 40, 297);
context.fillStyle = "#028304";
context.fillText("e", 53, 297);
context.fillStyle = "#E21600";
context.fillText("t", 67, 297);


context.beginPath();
context.lineWidth = 3;
context.fillStyle = "#FE6B5F";
context.moveTo(250,125);
context.arc(250,100, 10, 0.6,Math.PI-1.0,true);
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = 1.5;
context.moveTo(250,125);
context.lineTo(243,109);
context.stroke();

context.fillStyle = "#000000";
context.beginPath();
context.moveTo(250,100);
context.arc(250,100, 3, 0, Math.PI*2);
context.fill();



/* Zoom */

context.beginPath();
context.moveTo(35,30);
context.fillStyle = "#FFFFFF";
context.arc(35,30, 25, 0, Math.PI*2);
context.fill();

context.shadowBlur = 0;
context.shadowColor = "#121212";

context.beginPath();
context.strokeStyle = "#99B9E2";
context.lineWidth = 4;
context.moveTo(200,15);
context.rotate(0.90);
context.translate(32,-22);
context.strokeRect(0,0,26,26);
context.translate(-32,22);
context.rotate(-0.90);


// arrow one
context.beginPath();
context.fillStyle = "#FFFFFF";
context.lineWidth = 5;
context.moveTo(200,15);
context.rotate(0.90);
context.translate(38,-26);
context.fillRect(0,0,14,34);
context.translate(-38,26);
context.rotate(-0.90);

// arrow two
context.beginPath();
context.fillStyle = "#FFFFFF";
context.lineWidth = 5;
context.moveTo(200,15);
context.rotate(-0.72);
context.translate(-0,26);
context.fillRect(0,0,14,35);
context.translate(38, -26);
context.rotate(0.90);


