function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(51);
	stroke('orange');
  fill('orange');
	strokeWeight(1);
  rectMode(CENTER);

	const space = 50;
  for (var x = 0; x <= width; x += space) {
    for (var y = 0; y <= height; y += space) {
      line(x, y, x + space, y);
      line(x, y, x, y + space);
      square(x,y, 10);
      ellipse(x + space/2,y + space/2, 10);
    }
  }
}
