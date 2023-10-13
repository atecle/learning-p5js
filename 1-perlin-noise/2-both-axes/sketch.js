var xoff = 0;
var incr = 0.01;

function setup() {
    createCanvas(500, 500);
}
  
function draw() {
    background(51)

    var x = map(noise(xoff), 0, 1, 0, width);
    var y = map(noise(xoff), 0, 1, 0, height);
    ellipse(x, y, 30, 30);    

    xoff += incr;
}
