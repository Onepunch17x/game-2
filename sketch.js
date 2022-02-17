var angle, angleImg;
var Sky, SkyImg;
var arrows, arrowImg, arrowGroup;
var gamestate= "play";
var gameOver,GameImg;

function preload(){
angleImg=loadImage("angel.png")
SkyImg=loadImage("blueSkies.webp")
arrowImg=loadImage("arrow.png")
GameImg=loadImage("game.png")
}
function setup() 
{
  createCanvas(500,600);
  
  Sky=createSprite(250,100);
  Sky.addImage(SkyImg);
  Sky.velocityY=1


  angle= createSprite(250,500);
  angle.addImage(angleImg);
  angle.scale=0.07

  arrowGroup= createGroup()
  
  gameOver=createSprite(250,300)
  gameOver.addImage(GameImg)
  gameOver.scale=2
  gameOver.visible=false
}

function draw() 
{
background("white");





if(gamestate=="play"){
  Arrow()
  if(arrowGroup.isTouching(angle)){
    gamestate="end"
  }

  if(keyDown("RIGHT_ARROW")){
    angle.x+=2
    }
    
    if(keyDown("LEFT_ARROW")){
      angle.x-=2
    }
    
    if(Sky.y>300){
      Sky.y=Sky.y/2
    }
}
else if(gamestate=="end"){
  arrowGroup.destroyEach();
  angle.destroy();
  arrowGroup.velocityY=0;
  
  Sky.velocityY=0
  
  textSize(20)
  fill("black")
  text("YOU LOOSE!",250,300)
  gameOver.visible=true
}



  



drawSprites();
}

function Arrow(){
  if(frameCount%60==0){
    arrows=createSprite(Math.round(random(100,500)),0);
    arrows.velocityY=1
    arrows.addImage(arrowImg)
    arrows.scale=0.07
    arrowGroup.add(arrows)
  }
}

