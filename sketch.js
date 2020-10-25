var obstaclegroup,foodGroup,score,Ground,backGround,player,boulder,Food

var bananaImage,obstacleImage,backImage,Monkey_running

var score;

function preload(){
backImage = loadImage ("jungle.jpg");
  
  Monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
;
  
bananaImage = loadImage ("banana.png");
obstacleImage = loadImage ("stone.png")
}

function setup() {
  createCanvas(600, 200);
  
backGround = createSprite(0,0,400,400);
  backGround.addImage (backImage);
  backGround.velocityX = -4;
  backGround.x = backGround.width/2;
  
  Ground = createSprite(300,190,600,10);
  Ground.visible= false;
  
  score = 0;
  
 player = createSprite (50,160,10,10);
  player.addAnimation ("Running",Monkey_running);
  player.scale = 0.1;
  
  
  
   foodGroup = new Group();
  obstaclesGroup = new Group();
}

function draw() {
  background(180);
  
  
  if(backGround.x < 400){
   backGround.x = backGround.width /2;
  }
  
   if(keyDown("space")) {
    player.velocityY = -10;
  }
 player.velocityY = player.velocityY + 0.8
  
  if (foodGroup.isTouching(player)){
    foodGroup.destroyEach();
    score = score + 2
  }
  switch(score){
    case 10: player.scale = 0.12;
      break;
    case 20: player.scale = 0.14;
      break;
    case 30: player.scale=0.16;
      break
    case 40: player.scale = 0.18;
      break;
    default:break;
  }
  
  if (obstaclesGroup.isTouching(player)){
    player.scale=0.1;
  }
  
  food();
  Boulder();
     
drawSprites();
stroke("White");
textSize(20);
fill("white")
text("Score: "+ score, 500,50);
  
   player.collide(Ground);
}

function food(){
  if (frameCount% 100 === 0){
 var Food = createSprite (600,100,10,10);
    Food.addImage (bananaImage);
    Food.scale = 0.05;
    Food.velocityX = -4;
    Food.lifetime = 200;
    
    foodGroup.add(Food);
 }
}

function Boulder (){
  if (frameCount % 90 === 0){
    var boulder = createSprite (600,165,10,40);
    boulder.addImage (obstacleImage);
    boulder.scale = 0.1  
    boulder.velocityX = -4;
     boulder.lifetime = 300;
    
    obstaclesGroup.add(boulder)
  }
}