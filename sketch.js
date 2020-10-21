var fixedRect, moveRect;

function setup() {
  createCanvas(windowWidth,windowHeight);

  fixedRect = createSprite(width/2, height/2, 40, 80);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;

  moveRect = createSprite(20, 300, 80, 40);
  moveRect.shapeColor = "yellow";
  moveRect.debug = true;
}

function draw() {
  background(0);  

moveRect.x = mouseX;
moveRect.y = mouseY;

if(moveRect.x - fixedRect.x < moveRect.width/2 + fixedRect.width/2 && fixedRect.x - moveRect.x < fixedRect.width/2 + moveRect.width/2 && moveRect.y - fixedRect.y < moveRect.height/2 + fixedRect.height/2 && fixedRect.y - moveRect.y < fixedRect.height/2 + moveRect.height/2){
  fixedRect.shapeColor = "green";
  moveRect.shapeColor = "green";
}
else{
  fixedRect.shapeColor = "yellow";
  moveRect.shapeColor = "yellow";
}

  drawSprites();
}