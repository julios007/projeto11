var borda,borda2;
var corredor , corredoor;
var ground , chao;
var edges;
function preload(){
  corredoor = loadAnimation("Runner-1.png", "Runner-2.png");
  chao = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
 
  ground = createSprite(200, 200);
  
  ground.addImage( chao);
ground.velocityY = 4;
ground.scale = 1.2;
corredor = createSprite(180, 340, 30, 30);
  
  corredor.addAnimation("running",corredoor);
 corredor.scale = 0.08;
borda = createSprite(0,0,100,800);
borda2 = createSprite(410,0,100,800);
borda.visible = false;
borda2.visible = false;
}

function draw() {
  background(0);
ground.velocityY = 5;
corredor.x =World.mouseX;
edges = createEdgeSprites();
corredor.collide(edges[3]);
corredor.collide(borda);
corredor.collide(borda2);


if(ground.y > 400){
  ground.y = height/2;
}
 drawSprites();
}
