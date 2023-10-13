# learning-p5js

Some notes and experiments to help me learn p5js.

## 1. Perlin Noise

Coding along [this video series](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM) 

> "noise()" in p5js is a function that returns the Perlin noise value for a coordinate with at least 1 and up to 3 values (x/y/z).
>
> Perlin noise is a technique for generating seemingly random, but more "realistic" or "coherent" noise patterns than what you would find in the "random()" function.
>
> Perlin noise is often used in computer graphics to procedurally generate terrains or textures. 

Animating a dot over the x-axis along a graph of perlin noise values for a set of increasing numbers.

![](/1-perlin-noise/1-x-axis/1-x-axis.gif)

Animating a dot over the x-axis and y-axis along a graph of perlin noise values for a set of increasing numbers.

![](/1-perlin-noise/2-both-axes/2-both-axes.gif)

Animating a dot over the x-axis and y-axis along a graph of perlin noise values for a set of increasing numbers. The initial value for x starts at 0 and y starts at 10000

![](/1-perlin-noise/3-both-axes-offset/3-both-axes-offset.gif)


Creating a one-dimensional terrain generator. 

This works by looping through the width of the frame, and for each coordinate, plotting the point (x, noise(xoff) * height) - where xoff starts at 0 and is incremented by 0.01 with each iteration. 

The horizontal movement effect is created because with each frame per second (it's like an outer loop), we're incrementing the start value for xoff by 0.01 as well. This increment moves the graph along the Perlin noise space.

![](/1-perlin-noise/4-simple-terrain-generator/4-simple-terrain-generator.gif)



Creating static by plotting a random grayscale value for every pixel.

![](/1-perlin-noise/5-static/5-static.gif)


Instead of using a random grayscale value for each pixel, where every pixel has no relation to the other, we're calculating the perlin noise value for each pixel for an x, y and z offset. Providing a z offset to noise() and incrementing it with each frame update creates the undulating effect.

![](/1-perlin-noise/6-animated-texture/6-animated-texture.gif)


The same experiment as last, but we're swapping the classic perlin noise function with the open simplex noise function, making the animation faster, and removing the blur.

![](/1-perlin-noise/7-open-simplex-noise/7-open-simplex-noise.gif)

## 2. Generating Patterns

Coding along [this video series](https://www.youtube.com/watch?v=ig0q6vfpD38)

All of the following sketches are based on a nested for-loop along the width/height, and increment by a certain space. We can use this draw a grid, and place elements somewhere in each drawn box - maybe in the center or along the intersections. Here I'm using this technique to draw a simple pattern with a circle in the center of each grid cell and a square on the intersection.

![](/2-generating-patterns/1-grid-experiment/grid-experiment.png)

The following two patterns are made by drawing a line in one of 6 directions - the 4 sides of a square, and 2 diagonal lines. 

We use `random` to generate the direction of the line and adjusting the bounds of the possible random value can produce different patterns.

![](/2-generating-patterns/2-lines/1-lines.png)
![](/2-generating-patterns/2-lines/2-lines.png)

Using perlin noise to make an animation

![](/2-generating-patterns/3-lines-perlin-noise/3-lines-perlin-noise.gif)