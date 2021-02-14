var fixedRect,movingRect;
var edges;
function setup() {
  createCanvas(windowWidth,windowHeight);
  edges=createEdgeSprites();
  fixedRect= createSprite(width/2,height/2, 50, 80);
  movingRect= createSprite(width/2, 50, 80, 30);
  movingRect.velocityY=3;
}

function draw() {
  background(0,0,0);  
  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
/*  movingRect.velocityX=0;
  movingRect.velocityY=0;*/
 // movingRect.bounceOff(fixedRect);
 movingRect.velocityX=-(movingRect.velocityX);
 movingRect.velocityY=-(movingRect.velocityY);
 
}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";
}
movingRect.bounceOff(edges[2]);
  drawSprites();
}
