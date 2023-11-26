const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
const aboutSection = document.getElementById("about");
const headerButton = document.getElementById("header-button");

headerButton.addEventListener("click", (e) => {
  let headerHeight = header.offsetHeight;
  let navbarHeight = navbar.offsetHeight;
  window.scrollTo(0, headerHeight + navbarHeight);
});

//////////////////////////////////
let points = [];
let amount = 50;

let mouse;
function setup() {
  pixelDensity(1);
  frameRate(29);
  let c;
  c = createCanvas(window.innerWidth, window.innerHeight);

  let originParent = c.parent();
  c.parent("header-background");
  originParent.remove();
  window.addEventListener("resize", () => {
    c = createCanvas(window.innerWidth, window.innerHeight);
    let originParent = c.parent();
    c.parent("header-background");
    originParent.remove();
  });
  for (let i = 0; i < amount; i++) {
    points.push(new Point(random(width), random(height)));
  }
}

function draw() {
  background(27, 23, 37);
  points.forEach((point) => {
    point.run(points);
  });
}
///////////////////////////////////////////////////////////////

class Point {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.radius = 2.5;
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();
    this.maxSpeed = 0.5;
    this.maxForce = 0.05;
  }

  run(points) {
    this.update();
    this.borders();
    // this.render();
    this.checkForLines(points);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  // Draw boid as a circle
  render() {
    fill(127);
    stroke(200);
    ellipse(this.position.x, this.position.y, 5, 5);
  }

  // Wraparound
  borders() {
    if (this.position.x < this.radius) {
      this.velocity.x *= -1;
    } else if (this.position.x > width - this.radius) {
      this.velocity.x *= -1;
    }
    if (this.position.y < this.radius) {
      this.velocity.y *= -1;
    } else if (this.position.y > height - this.radius) {
      this.velocity.y *= -1;
    }
    if (this.position.x < 0) {
      this.position.x = 0 + this.radius;
    } else if (this.position.x > width) {
      this.position.x = width - this.radius;
    }
    if (this.position.y < 0) {
      this.position.y = 0 + this.radius;
    } else if (this.position.y > height) {
      this.position.y = height - this.radius;
    }
  }
  checkForLines(points) {
    for (let x = 0; x < points.length; x++) {
      this.distance = dist(
        this.position.x,
        this.position.y,
        points[x].position.x,
        points[x].position.y
      );

      if (this.distance > 0 && this.distance <= 255) {
        if (this.collision) {
          stroke(255, 0, 0, 255 - this.distance);
        } else {
          stroke(255 - this.distance, 255 - this.distance);
        }
        line(
          this.position.x,
          this.position.y,
          points[x].position.x,
          points[x].position.y
        );
      }
    }
  }
}

function mouseClicked() {}

/////////////////////////////////////////////////////////////////
