var car, wall;
var speed, weight;
var collide=1;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("black");  
  drawSprites();

car.velocityX=speed;
car.collide(wall);

  if(car.x>1400&& collide==1){

  if(0.5*weight*speed*speed/22500<100){
    car.shapeColor=("green");
  }
  if(0.5*weight*speed*speed/22500>180){
    car.shapeColor=("red");
  }
  if(0.5*weight*speed*speed/22500>100&&0.5*weight*speed*speed/22500<180){
    car.shapeColor=("yellow");
  }
speed=0;
collide=0;
car.x=1400;
}
}