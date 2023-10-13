function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(51);
	stroke('orange');
  fill('orange');
	strokeWeight(1);
  rectMode(CENTER);

	const space = 25;
  for (var x = 0; x <= width; x += space) {
    for (var y = 0; y <= height; y += space) {
      const r = random(3, 6)

      if (r < 0) {
        line(x, y, x, y + space);
      } else if (r < 1) {
        line(x, y+space, x + space, y + space);
      } else if (r < 2) {
        line(x+space, y+space, x + space, y);
      } else if (r < 3) {
        line(x+space, y, x, y);
      } else if (r < 4) {
        line(x, y, x + space, y + space);
      } else {
        line(x + space, y, x, y + space);
      }
    }
  }
}
