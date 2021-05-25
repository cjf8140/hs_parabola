var mode = 0;

var y = 600;
var yv;
var ya = 1;

var x = 100;
var xv;

var angle = 0;
var vel = 30;

var launch = 0;
var launched = 0;

var la = 0;

function setup() {

  createCanvas(3280, 720);
  fill(255);
  background(230);
  strokeWeight(5);
  line(0, 600, width, 600);
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
    if((y+yv) > 650) {
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
    rect(0, 605, width, 720);

    strokeWeight(2);
    stroke(0, 0, 255, 100);
    x+=xv;
    y+= yv+= ya;
  }
  else if(mode == 1) {
    if(keyIsDown(UP_ARROW)) {
      angle += 1;
    }
    else if(keyIsDown(DOWN_ARROW)) {
      angle -= 1;
    }
    else if(keyIsDown(LEFT_ARROW)) {
      vel -=1;
    }
    else if(keyIsDown(RIGHT_ARROW)) {
      vel +=1;
    }
    if(la != angle) {
      background(230);
      strokeWeight(5);
      stroke(0);
      line(0, 600, width, 600);
    }
    la = angle;

    stroke(255, 0, 255, 100);
    line(100, 600, 100 + cos(radians(angle)) * 50, 600 -sin(radians(angle)) * 50)
    if(launch == 1) {
      if(launched == 0) {
        background(230);
        strokeWeight(5);
        stroke(0);
        line(0, 600, width, 600);
        y = 600;
        x = 100;
        xv = cos(radians(angle)) * vel;
        yv = -sin(radians(angle)) * vel;
        launched = 1;
      }
      strokeWeight(2);
      stroke(0, 0, 255, 100);
      line(x, y, x+xv, y+yv);
      x+=xv;
      y+= yv+= ya;
      if((y+yv) > 650) {
        launch = 0;
        launched = 0;
      }
      line(x, y, x+xv, y+yv);
      strokeWeight(6);
      fill(230);
      stroke(230);
      rect(0, 605, width, 720);
    }
  }
  fill(255);
  noStroke();
  rect(10, 10, 850, 170);
  fill(0);
  textSize(100);
  text("angle: "+ angle, 10, 100);
  text("vel: "+ vel, 500, 100);
}

function keyPressed() {
  if(key == '1') {
    background(230);
    strokeWeight(5);
    stroke(0);
    line(0, 600, width, 600);
    strokeWeight(2);

    vel = 30;
    angle = 0;
    y = 600;
    x = 100;
    xv = cos(radians(angle)) * vel;
    yv = -sin(radians(angle)) * vel;

    mode= 0;
  }
  if(key == '2') {
    angle = 0;
    vel = 30;
    y = 600;
    x = 100;
    background(230);
    stroke(0);
    strokeWeight(5);
    line(0, 600, width, 600);
    strokeWeight(2);

    mode= 1;
  }
  if(mode == 1) {

    if(keyCode == ENTER) {
      launch = 1;
    }
    if(keyCode == BACKSPACE) {
      y = 600;
      x = 100;
      background(230);
      stroke(0);
      strokeWeight(5);
      line(0, 600, width, 600);
      strokeWeight(2);
      launch = 0;
      launched = 0;
    }
    if(angle < 0) {
      angle = 0;
    }
    if(angle > 180) {
      angle = 180;
    }
  }
}
