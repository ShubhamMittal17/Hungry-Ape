//Global Variables
var finalcount;
var count;
var ObstaclesGroup;
var Bananas;
var gamestate;
var ground;
var monkey;
var invisibleGround;
var running;
var bananaimg;
var obs;
var obstacle;
var backimg;
var back;
var bananagroup;
var run;
var rd;
function preload(){
  running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaimg=loadImage("Banana.png");
  obs=loadImage("stone.png");
  backimg=loadImage("jungle.jpg");
}


function setup() {
  createCanvas(500,500);
  bananagroup=createGroup();
  ObstaclesGroup=createGroup();
  count=0;
  finalcount=0;
  gamestate="play";
  invisibleGround = createSprite(200,475,400,20);
invisibleGround.visible = false;

  back=createSprite(250,250,500,500);
  back.addImage(backimg);
  monkey = createSprite(75,295,20,50);
monkey.addAnimation("run",running);
monkey.scale = 0.17;
}
function draw(){
 background(255); 
  if(gamestate==="play"){
    //count = Math.round(World.frameCount/4);
    
  back.velocityX = -7
    if (back.x < 0){
      back.x = back.width/2;
    }
  
  if(keyDown("space") && monkey.collide(invisibleGround)){
      monkey.velocityY = -17 ;
  }
    if(monkey.scale>0.19&&keyDown("space") && monkey.collide(invisibleGround) ){
      monkey.velocityY=-19;
    }
  monkey.velocityY = monkey.velocityY + 0.9;
  monkey.collide(invisibleGround);
  spawnObstacles();
  spawnbanana();
    stroke("white");
    textSize(20);
    fill("white");
    textFont("Franklin Gothic Medium");
     text("Score: "+ count, 280, 30);
if(monkey.isTouching(ObstaclesGroup)){
      
      ObstaclesGroup.destroyEach();
     bananagroup.destroyEach();
  monkey.scale=0.17;
   }
    if(monkey.isTouching(bananagroup)){
      bananagroup.destroyEach();
      count=count+2;
      monkey.scale=monkey.scale+0.005;
    }
  }
  drawSprites();
}
function spawnbanana(){
  if(World.frameCount % 60 === 0) {
    Bananas=createSprite(random(500,530),random(200,330),70,20);
    Bananas.addImage(bananaimg);
    Bananas.scale=0.06;
    Bananas.velocityX=-8
    bananagroup.add(Bananas);
  }
}
function spawnObstacles() {
 if(World.frameCount % 60 === 0) {
   // rd=randomNumber(1,2);
    obstacle = createSprite(random(500,530),450,10,40);
    obstacle.velocityX = -7;
    obstacle.addImage(obs);
    obstacle.setCollider("circle",0,0,150);
    obstacle.scale = 0.2;
    obstacle.lifetime = 100;
    ObstaclesGroup.add(obstacle);
  }
}