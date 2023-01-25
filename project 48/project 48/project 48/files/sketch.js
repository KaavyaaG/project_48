var bg, bgImg
var player
var grass, water, apple, wall, rock, carrot, sdrink, pizza, burger
var grassImg, waterImg, appleImg, carrotImg, sdrinkImg, pizzaImg, burgerImg
var appleGroup, grassGroup, waterGroup, carrotGroup, pizzaGroup, sdrinkGroup, burgerGroup
var score=0
var gameState="eat"
var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img ;

function preload(){

  bgImg= loadImage("files/greenbg.jpg");
  grassImg= loadImage("files/grass.png")
  waterImg= loadImage("files/water.png")
  appleImg=loadImage("flies/apple.png")
  sdrinkImg=loadImage("files/softdrink.png")
  pizzaImg=loadImage("files/pizza.png")
  burgerImg=loadImage("files/burger.png")
  heart1Img=loadImage("files/heart_1.png")
  heart2Img=loadImage("files/heart_2.png")
  heart3Img=loadImage("files/heart_3.png")

}

function setup() {
 
createCanvas(windowWidth, windowHeight);
  
  //wall= createSprite()
  bg=createSprite(displayWidth, displayHeight)
  bg.addImage(bgImg)
  player= createSprite(displayWidth-100, displayHeight-230, 70, 70)
  player.setCollider("circle",0,0,100,100)

  heart1 = createSprite(displayWidth-150,40,20,20)
  heart1.visible = false
   heart1.addImage("heart1",heart1Img)
   heart1.scale = 0.4

   heart2 = createSprite(displayWidth-100,40,20,20)
   heart2.visible = false
   heart2.addImage("heart2",heart2Img)
   heart2.scale = 0.4

   heart3 = createSprite(displayWidth-150,40,20,20)
   heart3.addImage("heart3",heart3Img)
   heart3.scale = 0.4

}

appleGroup = new Group();
carrotGroup = new Group();
grassGroup= new Group();
waterGroup= new Group();
pizzaGroup= new Group();
sdrinkGroup= new Group()
burgerGroup= new Group();

function draw() {
  background(bg); 
  if (gameState==="eat"){
  
  if(score===70){
    heart1.visible=true
    heart2.visible=false
    heart3.visible=false
  }
  if(score===140){
    heart1.visible=true
    heart2.visible=true
    heart3.visible=false
  }
  if(score===210){
    heart1.visible=true
    heart2.visible=true
    heart3.visible=true
  }
  if(score<0){
    gameState==="lost"
  }
  if(score===210){
    gameState==="won"
  }
}
  //to move the player
  if(keyDown("UP_ARROW")){
    player.y=player.y+10
  }
  if(keyDown("DOWN_ARROW")){
    player.y=player.y-10
  }
  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+10
  }
  if(keyDown("LEFT_ARROW")){
    player.x=player.x-10
  }

//to increase or decrease the score 
if(player.isTouching(appleGroup) || player.isTouching(waterGroup) || player.isTouching(grassGroup) || player.isTouching(carrotGroup)){
  score=score+5
}
if(player.isTouching(pizzaGroup) || player.isTouching(sdrinkGroup) || player.isTouching(burgerGroup)){
  score=score-7
}

if(score===35){
  text("Good going! Keep it up!")
}

  appleF()
  carrotF()
  waterF()
  pizzaF()
  grassF()
  burgerF()
  sdrinkF()

  drawSprites();
}
 if(gameState==="lost"){
  textSize(100)
  fill ("red")
  text('YOU LOST!', 400, 400)
  appleGroup.destroyEach()
  grassGroup.destroyEach()
  waterGroup.destroyEach()
  carrotGroup.destroyEach()
  pizzaGroup.destroyEach()
  sdrinkGroup.destroyEach()
  burgerGroup.destroyEach()
 }
 if(gameState==="won"){
  textSize(100)
  fill("green")
  text('YOU WON!', 400,400)
  appleGroup.destroyEach()
  grassGroup.destroyEach()
  waterGroup.destroyEach()
  carrotGroup.destroyEach()
  pizzaGroup.destroyEach()
  sdrinkGroup.destroyEach()
  burgerGroup.destroyEach()
 }
function appleF(){
  if(frameCount%50===0){
    apple= creatSprite(random(100,100),random(100,100),50,50)
    apple.addImage(appleImg)
    apple.setCollider("circle",0,0,100,100)
    appleGroup.add(apple)
  }
}

function grassF(){
  if(frameCount%100===0){
    grass= creatSprite(random(50,50),random(50,50),50,50)
    grass.addImage(grassImg)
    grass.setCollider("circle",0,0,100,100)
    grassGroup.add(grass)
  }
}

function waterF(){
  if(frameCount%150===0){
    water= creatSprite(random(150,150),random(150,150),50,50)
    water.addImage(waterImg)
    water.setCollider("circle",0,0,100,100)
    waterGroup.add(water)
  }
}

function carrotF(){
  if(frameCount%200===0){
    carrot= creatSprite(random(200,200),random(200,200),50,50)
    carrot.addImage(carrotImg)
    carrot.setCollider("circle",0,0,100,100)
    carrotGroup.add(carrot)
  }
}

function pizzaF(){
  if(frameCount%50===0){
    pizza= creatSprite(random(50,50),random(50,50),50,50)
    pizza.addImage(pizzaImg)
    pizza.setCollider("circle",0,0,100,100)
    pizzaGroup.add(pizza)
  }
}

function sdrinkF(){
  if(frameCount%100===0){
    sdrink= creatSprite(random(100,100),random(100,100),50,50)
    sdrink.addImage(sdrinkImg)
    sdrink.setCollider("circle",0,0,100,100)
    sdrinkGroup.add(sdrink)
  }
}

function burgerF(){
  if(frameCount%150===0){
    burger= creatSprite(random(150,150),random(150,150),50,50)
    burger.addImage(burgerImg)
    burger.setCollider("circle",0,0,100,100)
    burgerGroup.add(burgerImg)
  }
}