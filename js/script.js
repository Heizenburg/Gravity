// Daniel Shiffman
// The Nature of Code

let movers = [];
let attractors = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let m = random(50, 150);
    movers[i] = new Mover(x, y, m);
  }
  let a = new Attractor(300, 300, 100, 5);
  attractors.push(a);

  background(0);
}

function mousePressed() {
  let a = new Attractor(mouseX, mouseY, 100, 5);
  attractors.push(a);
}

function keyPressed() {
  let a = new Attractor(mouseX, mouseY, 100, -5);
  attractors.push(a);
}

function draw() {
  background(0);
  for (let mover of movers) {
    mover.update();
    mover.show();
    for (let attractor of attractors) {
      attractor.attract(mover);
    }
  }
  for (let attractor of attractors) {
    attractor.show();
  }
}