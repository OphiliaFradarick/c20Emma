var fixedRect, movingRect ;

function setup(){
  createCanvas(1400, 800);

  fixedRect = createSprite(300,250, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(300,250, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

}

function draw(){
  background(255);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x <  fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2  ){
          movingRect.shapeColor = "purple";
          fixedRect.shapeColor = "purple";
  }

  else{

    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

  }

  drawSprites();

}