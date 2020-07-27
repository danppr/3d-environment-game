/* global loop, push, pointLight, rectMode, pop, camera, noLoop, frameRate, noFill, angleMode, round, windowWidth, windowHeight, keyCode, keyIsDown, keyIsPressed, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, collideRectCircle, collideRectRect, collideCircleCircle, random, mouseIsPressed, clear, textSize, createCanvas, strokeWeight, rect, background, colorMode, HSB, noStroke, backgroundColor, color, fill, ellipse, text, stroke, line, width, height, mouseX, mouseY, WEBGL, rotateX, rotateY, box, frameCount, model*/

let backgroundColor, angle, easyCam, hi, i, j, x, y, z;

function setup() {
  createCanvas(600, 600, WEBGL);
  colorMode(HSB, 360, 100, 100);
  angle = 0;
} 

function draw() {
  noStroke();
  background(5);
  push();
  fill(100);
  textFont(font);
  textSize(20);
  console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
  text(`${mouseX} ${mouseY}`, 200, -260, 0);
  pop();

  rectMode(CENTER);
  rotateX(-PI/6+radians(-4.8));
  rotateY(PI/4+radians(0.51));
  ortho(-300, width, -300, height);
  scale(4);
  pointLight(64, 20, 100, 10, 200, 200);
  pointLight(64, 80, 40, 550, 422, 100);

  push();
  ambientLight(60, 20, 40);
  ambientMaterial(65, 100, 100);
  model(p1);
  pop();

  push();
  pointLight(64, 20, 100, 530, 147, 10);
  translate(7.1, -67.6, 68.2);
  rotateZ(radians(angle));
  ambientLight(60, 20, 40);
  ambientMaterial(55, 100, 100);
  model(p2);
  pop();
}

function preload() {
  p1 = loadModel("partnn1.stl");
  p2 = loadModel("partnn2.stl");
  font=loadFont("OpenSans-Regular.ttf")
}

function keyPressed() {
  
  if(key == 'o'){
    angle += 5;
  }
  if(key=="p"){
  angle -= 5;
}
if(key == 'q'){
  angle=90;
}
if(key == 'r'){
  angle = 0;
}

}

