var xoff1 = 0;
var xoff2 = 10000
var incr = 0.01;

function setup() {
    createCanvas(500, 500);
}
  
function draw() {
    background(51)

    var x = map(noise(xoff1), 0, 1, 0, width);
    var y = map(noise(xoff2), 0, 1, 0, height);
    ellipse(x, y, 30, 30);    

    xoff1 += incr;
    xoff2 += incr;
}
