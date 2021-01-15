var player;
var enemy, score =0;
var friend, life, bullet;


function preload(){
 friend =loadImage ("satellite.png");

}
function setup() {
  createCanvas(800, 500);

// object of player
player = new Player();
 life = 3;

 enemy = new Enemy();
}

function draw() {
  background(0);  
  bullet = new Bullet();
  if(keyWentDown("space")){
bullet.releaseBullet();

  }
  if(enemy.ufoGroup.isTouching(bullet.body)  ){
    enemy.ufoGroup.destroy();  
   score =  score +50   ;
   console.log("executionm");
  }
  enemy.spawnEnemy();
  spawnSatellite();
  for(var i =0; i<enemy.ufoGroup.length;i++){
    //group.isTouching(sprite)
    if(enemy.ufoGroup.get(i).isTouching(player.body)){
      life = life-1;
      enemy.ufoGroup.get(i).destroy();
    }
   
     
    
   
  }

  drawSprites();
  textSize(30);
  fill("white")
  text("Lives: "+ life, 50,50);
  text("Score: "+ score, 50,100);
}



function spawnSatellite(){
  if(frameCount%120 === 0){
    var x = Math.round(random(50, 750));
    var satellite = createSprite(x, 50, 20, 30);
satellite.velocityY = 2;
satellite.addImage(friend);
satellite.scale = 0.5;
satellite.lifetime = 250

  }
}