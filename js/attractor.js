class Attractor {

  constructor(x, y, m, G) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
    this.G = G;
  }

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let strength = this.G * (this.mass * mover.mass) / distanceSq;
    force.setMag(strength);
    mover.applyForce(force);
  }


  show() {
    noStroke();
    if (this.G > 0) {
      fill(100, 255, 0);
    } else {
      fill(255, 0, 100);
    }
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}