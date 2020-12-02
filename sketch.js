
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,obstacles
var score
var ground
var survivalTime=0;

function preload(){
  

  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(10,345,400,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  ground.shapeColor=("red");
  
  console.log(ground.x);

  
  invisibleGround = createSprite(10,345,400,10);
  invisibleGround.visible = false;
  
  obstaclesGroup = new Group();
  bananaGroup = new Group();
  
  
}


function draw() {
  
  background("white");
  
 if(ground.x<0)
 {
   ground.x=ground.width/2;
   
 }
  
 
  if(keyDown("space"))
    {
      monkey.velocityY=-10
    }
  
   monkey.velocityY=monkey.velocityY+1
  
  
  monkey.collide(invisibleGround);
  
 
  

  obstacless();
  bonanans();

  drawSprites();
  

  
}

function obstacless()
{
   if (World.frameCount%300===0) {
  obstacles=createSprite(200,320 ,10,10);
  obstacles.addImage("obstacles",obstaceImage);
  obstacles.scale=0.1;
       obstacles.x=Math.round(random(120,200));
     obstacles.velocityX=-6 ;
     obstacles.lifetime=300;
   }
}

function bonanans()

{
  if(World.frameCount%80===0)
    {
      banana=createSprite(200,300,10,10)
      banana.addImage( bananaImage);
      banana.scale=0.1;
      banana.x=Math.round(random(120,200));
      banana.velocityX=-6;
      banana.lifetime=300;
    }
}

