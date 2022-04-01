class Arrow {
  constructor(x, y, width, height) {
    let options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    World.add(world, this.body);
  }

  shoot(archerAngle) {
    let newAngle = archerAngle.angle - 28;
    newAngle = newAngle *(3.14 / 180);
    let velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.1);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { 
      x: velocity.x, 
      y: velocity.y 
    });
  }

  display() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
