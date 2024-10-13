import p5 from "p5";

export class Boid {
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  maxForce: number;
  maxSpeed: number;
  size: { width: number; height: number };
  p: p5;
  margin: number;
  title: string;
  isSlowing: boolean;

  // Boid behavior parameters
  alignmentWeight: number = 1.0;
  cohesionWeight: number = 1.0;
  separationWeight: number = 1.5;
  perceptionRadius: number = 100;
  horizontalBias: number = 0.1;

  constructor(p: p5, margin: number, title: string) {
    this.p = p;
    this.margin = margin;
    this.position = this.p.createVector(
      p.random(p.width),
      p.random(margin, p.height - margin)
    );
    this.velocity = p5.Vector.random2D().mult(3);
    this.acceleration = this.p.createVector();
    this.maxForce = 0.2;
    this.maxSpeed = 4;
    this.size = { width: 150, height: 60 };
    this.title = title;
    this.isSlowing = false;
  }

  edges() {
    if (this.position.x + this.size.width + 2 / 2 < 0) {
      this.position.x = this.p.width + this.size.width / 2;
    }

    if (this.position.y < this.margin) {
      this.position.y = this.margin;
      this.velocity.y *= -1.5;
    } else if (this.position.y > this.p.height - this.margin) {
      this.position.y = this.p.height - this.margin;
      this.velocity.y *= -1.5;
    }
  }

  flock(boids: Boid[]) {
    const alignment = this.align(boids).mult(this.alignmentWeight);
    const cohesion = this.cohesion(boids).mult(this.cohesionWeight);
    const separation = this.separation(boids).mult(this.separationWeight);

    this.acceleration.add(alignment).add(cohesion).add(separation);
  }

  update(mouseX: number, mouseY: number) {
    const distToMouse = this.p.dist(
      this.position.x,
      this.position.y,
      mouseX,
      mouseY
    );
    const slowRadius = 300;

    if (distToMouse < slowRadius) {
      this.isSlowing = true;
      const slowFactor = this.p.map(distToMouse, 0, slowRadius, 0.1, 1);
      this.velocity.mult(slowFactor);
    } else {
      this.isSlowing = false;
    }

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.enforceHorizontalMovement();
  }

  show(p: p5, color: string) {
    p.push();
    p.translate(this.position.x, this.position.y);
    p.rotate(this.velocity.heading());
    p.fill(color);
    p.noStroke();
    p.ellipse(0, 0, this.size.width, this.size.height);
    p.triangle(
      -this.size.width / 2 + 5,
      0,
      -this.size.width / 2 - this.size.height / 2,
      -this.size.height / 2,
      -this.size.width / 2 - this.size.height / 2,
      this.size.height / 2
    );
    p.pop();
  }

  private align(boids: Boid[]) {
    return this.calculateSteeringForce(boids, (other) => other.velocity);
  }

  private cohesion(boids: Boid[]) {
    return this.calculateSteeringForce(boids, (other) => other.position);
  }

  private separation(boids: Boid[]) {
    return this.calculateSteeringForce(boids, (other) => {
      const diff = p5.Vector.sub(this.position, other.position);
      return diff.div(diff.magSq());
    });
  }

  private calculateSteeringForce(
    boids: Boid[],
    getVector: (boid: Boid) => p5.Vector
  ) {
    const steering = this.p.createVector();
    let total = 0;
    for (const other of boids) {
      const d = this.p.dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other !== this && d < this.perceptionRadius) {
        const vec = getVector(other);
        steering.add(vec);
        total++;
      }
    }
    if (total > 0) {
      steering
        .div(total)
        .setMag(this.maxSpeed)
        .sub(this.velocity)
        .limit(this.maxForce);
    }
    return steering;
  }

  private enforceHorizontalMovement() {
    const minHorizontalSpeed = 3;

    this.velocity.x =
      this.velocity.x * this.horizontalBias +
      this.velocity.x * (1 - this.horizontalBias);
    this.velocity.y =
      this.velocity.y * (1 - this.horizontalBias) +
      this.velocity.y * this.horizontalBias;

    if (Math.abs(this.velocity.x) < minHorizontalSpeed) {
      this.velocity.x =
        this.velocity.x < 0 ? -minHorizontalSpeed : minHorizontalSpeed;
    }

    // Ensure the fish are moving predominantly from right to left
    if (this.velocity.x > 0) {
      this.velocity.x *= -1;
    }
  }

  isHovered(mouseX: number, mouseY: number): boolean {
    return (
      this.p.dist(this.position.x, this.position.y, mouseX, mouseY) <
      Math.max(this.size.width, this.size.height) / 2
    );
  }
}
