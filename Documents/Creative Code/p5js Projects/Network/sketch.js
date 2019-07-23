var nodes = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < 50; i++){
		nodes[i] = new Node();
	}
}

function draw() {
	background("black");
	for (var i = 0; i < nodes.length; i++){
		nodes[i].update();
		nodes[i].show();
		nodes[i].bound();
	}
	for (var j = 0; j < nodes.length; j++){
		//Node myNode = nodes[j];
		for (var k = j + 1; k < nodes.length; k++){
				//Node thatNode = nodes[k];
				if (dist(nodes[j].pos.x, nodes[j].pos.y, nodes[k].pos.x, nodes[k].pos.y) < 150) {
					stroke("white");
					line(nodes[j].pos.x, nodes[j].pos.y, nodes[k].pos.x, nodes[k].pos.y);
				}
		}
	}
}
