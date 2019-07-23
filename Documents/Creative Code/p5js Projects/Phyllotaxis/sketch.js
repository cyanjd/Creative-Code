var n = 0;
var c = 4;

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	background(0);
}

function draw() {
		var angle = n * 137.5;
		var hypotenuse = c * sqrt(n);
		var x = hypotenuse * cos(angle) + (windowWidth/2); //makes the origin in the middle
		var y = hypotenuse * sin(angle)  + (windowHeight/2);
		//fill(255);
	//	stroke(255);
		noStroke();
		fill(255);
		var size = n/100;
		if (size > 10){
			size = 10;
		}

		ellipse(x,y,size, size);
		n+= 10;
}
