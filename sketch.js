
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
 var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
fruitGroup = createGroup();
obstacleGroup = createGroup();  
}


function draw() {
  background(255);
  
  
     stroke("black");
  textSize(20);
  fill("black");
    text("Score:"+score,500,50);
         
         stroke("black");
         textSize(20);
         fill("black");
         survivaltime=Math.ceil(frameCount/frameRate());
         text("Survival Time:"+survivaltime,100,50);
  
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
        if(keyDown("space")&& monkey.y >= 170) {
        monkey.velocityY = -12;
        
    }
  
   monkey.velocityY = monkey.velocityY + 0.8
  
    monkey.collide(ground);
  
      food();
  obstacle();

  
drawSprites(); 
  
  
  
}

function food(){
  
   if(World.frameCount%80===0){
  banana=createSprite(400,200,20,20);
    banana.addImage(bananaImage);
     banana.scale=0.1;
    banana.y=Math.round(random(120,200));
   banana.velocityX=-4;
    banana.lifetime=50;
    
    fruitGroup.add(banana);
   }
     
  
  
  
}
function obstacle(){
   if(World.frameCount%300===0){
 var stone = createSprite(400,328,10,40);
    stone.addImage(obstacleImage);
     stone.scale=0.1;    
    
    stone.velocityX=-9;
    stone.setLifetime=50;
    obstacleGroup.add(stone);
   
}
  
  
}



