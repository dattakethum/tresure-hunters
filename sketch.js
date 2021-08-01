
function preload(){
shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(0,0);
  sea.addImage(seaImage);
sea.velocityX=-4
  ship=createSprite(200,200);
  ship.addAnimation("ship",shipImage)
  ship.scale=0.1
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/2
  }
 drawSprites()
}