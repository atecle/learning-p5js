var increment = 0.01;

// The noise function's 3rd argument, a global variable that increments once per cycle
var zoff = 0.0;

// We will increment zoff differently than xoff and yoff
var zincrement = 0.02;

function setup() {
  createCanvas(500, 500);
  frameRate(30);
  pixelDensity(1);
}

function draw() {

  loadPixels();

  var xoff = 0.0;

  for (var x = 0; x < width; x++) {
    xoff += increment;
    var yoff = 0.0; 

    for (var y = 0; y < height; y++) {
      yoff += increment;
      var index = (x + y * width) * 4;

      var r = noise(xoff, yoff, zoff) * 255;

      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
    }
  }

  updatePixels();

  zoff += zincrement; 
}
