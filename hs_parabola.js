var mode = 0;

var y = 600;
var yv;
var ya = 1;

var x = 100;
var xv;

var angle = 0;
var vel = 30;

function setup() {

  createCanvas(1280, 720);
  fill(255);
  background(230);
  strokeWeight(5);
  line(0, 600, 1280, 600);
  strokeWeight(2);

  fill(255);
  noStroke();
  rect(10, 10, 450, 120);
  fill(0);
  textSize(100);
  text("angle: "+ angle, 10, 100);
  xv = cos(radians(angle)) * vel;
  yv = -sin(radians(angle)) * vel;
  stroke(0, 0, 255, 100);
}
 //<>//
function draw() { //<>//
  if(mode == 0) {
    if((y+yv) > 620) {
      fill(255);
      noStroke();
      rect(10, 10, 450, 120);
      fill(0);
      textSize(100);
      text("angle: "+ angle, 10, 100);
      if(angle < 90) {
        angle++;  //<>//
      }

      xv = cos(radians(angle)) * vel;
      yv = -sin(radians(angle)) * vel;

      y = 600;
      x = 100;
    }
    stroke(0, 0, 255, 100);
    if(angle == 45) {
      stroke(255, 0, 0, 255);
    }
    if(angle >90) {
      noStroke();
    }
    line(x, y, x+xv, y+yv);
    strokeWeight(6);
    fill(230);
    stroke(230);
    rect(0, 605, 1280, 720);

    strokeWeight(2);
    stroke(0, 0, 255, 100);
    x+=xv;
    y+= yv+= ya;
  }
  else if(mode == 1) {

  }
}

function keyPressed() {
  if(key == '1') {
    background(230);
    strokeWeight(5);
    stroke(0);

    line(0, 600, 1280, 600);
    strokeWeight(2);

    angle = 0;
    y = 600;
    x = 100;
    xv = cos(radians(angle)) * vel;
    yv = -sin(radians(angle)) * vel;

    mode= 0;
  }
  else if(key == '2') {
    mode= 1;
    background(230);
  }
}
