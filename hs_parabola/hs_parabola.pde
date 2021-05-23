float y = 600;
float yv;
float ya = 1;

float x = 100;
float xv;

int angle = 30;
float vel = 30;
void setup() {
  
  size(1280, 720);
  fill(255);
  background(230);
  strokeWeight(5);
  line(0, 600, 1280, 600);
  strokeWeight(2);
}

void draw() {
  if(y+yv > 650) {
    if(angle < 60) { //<>//
      angle++;  //<>// //<>//
    }
    fill(255);
    noStroke();
    rect(10, 10, 450, 120);
    fill(0);
    textSize(100);
    text("angle: "+ angle, 10, 100);
    xv = cos(radians(angle)) * vel;
    yv = -sin(radians(angle)) * vel;
    stroke(0, 0, 255, 100);
    if(angle == 45) {
      stroke(255, 0, 0, 255); 
    }
    y = 600;
    x = 100;
  }
  line(x, y, x+xv, y+yv);
  x+=xv;
  y+= yv+= ya;
  
}
