var a,b;

function setup() {
  createCanvas(800,400);
 
  a = createSprite(200,200,50,50);
  a.shapeColor = ("green");
  b = createSprite(400, 200, 50, 50);
  b.shapeColor = ("green");
}

function draw() {
  background(255,255,255);
  a.x = mouseX;
  a.y = mouseY;
  console.log(b.x-a.x);
  if (a.x - b.x < 49  &&  b.x - a.x < 49){
    a.shapeColor = "red";
    b.shapeColor = "red";
  }
  else {
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
  drawSprites();
}