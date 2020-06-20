let x = 0;
let transx = 320//sets the first test object in the middle
let transy = 320//sets the first test object in the middle
let fillx = 0
var button
var button1

function setup() {
  createCanvas(320, 320);//size of the test field
  noLoop();
  frameRate(20);
  rectMode(CENTER);
  background(0);//moving this into the loop makes each test
  //disappear each time effecively resetting the field, but also
  //causing the automapping to disappear... not sure which way to go here
  fill(255)
  //ellipse(width/2, height/2, 5,5)
  createP("")
  button = createButton('Click here to start and at the moment you see each moving spot')
  button.mousePressed(spawnNew)
  button.mouseReleased(beginAgain)
  button.size(320,50)
  //button1 = createButton('click here to draw a red dot')
  //button1.mousePressed(redDot)
}


function draw()
{

fill(255)//for the grid overlay
stroke(255)//for the grid overlay
strokeWeight(0.5)//for the grid overlay
ellipse(width/2, height/2, 5, 5)//for the grid overlay
//line(width/2, 0, width/2, height)//for the grid overlay
//line(0, height/2, width, height/2)//for the grid overlay
for(x=0;x<=width;x=x+20){//spacing of lines e.g. x=x+20
  for (y=0;y<=height;y=y+20){//for the grid overlay
  line(x, 0, x, height)//for the grid overlay
  line(0, y, width, y)//for the grid overlay
}}

  noStroke()
  fill(0+fillx)//black and white target here can
  //change over time

  //fill(0+fillx, 0+fillx, 255-fillx)//color of the target is here
  //and changes with time
  let step = frameCount % 20;
  let angle = map(step, 0, 20, 0, TWO_PI);
  let cos_a = cos(angle);
  let sin_a = sin(angle);
  //ellipse(width/2, height/2, 5, 5)//centers the fixation target
  translate(transx, transy);//the x,y location of the rectangle
  // Equivalent to rotate(angle);
  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
  rect(0, 0, 20, 20);//the size of the rectangle is here
  //adding +fillx to the starting size makes the target grow!!!
  fillx = fillx+5//sets the steepness of the color change
}

//function mouseReleased(){
  //beginAgain
//}

function beginAgain(){
  loop();
  transx = floor(random(1,10))*31//sets the x spacing of targets
  transy = floor(random(1,10))*31//sets the y spacing of targets
  //transx = random(0,width)// this causes too many targets
  //transy = random(0,height)//this causes too many targets
  fillx = 0

}
//function mousePressed() {
  //spawnNew
//}

function spawnNew(){
  //noLoop();
  if (fillx > 80) {//sets the sensitivity of the test
  console.log("SCOTOMA!"+ transx ,transy, fillx);
  createP ("Scotoma at x=" + transx + ",y=" + transy + ",density=" + fillx/255*100 + "%");
} else {
  console.log ("ok")}//remember to turn on the console log!
}

//function redDot(){
  //function draw(){
    //ellipse(160, 160, 50, 50)
  //}
//}
