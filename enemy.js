class Enemy{
    constructor(){
       
       this.ufo = loadImage("ufo.png");
       this.ufoGroup = new Group();;
    }

     spawnEnemy(){
        if(frameCount%100 === 0){
           // var x = Math.round(random(50, 750));
            var body = createSprite(400,50,20, 30);
         body.velocityY = 4;
         body.addImage(this.ufo);
         body.scale = 0.5;
          body.lifetime = 125;
          this.ufoGroup.add(body);
        }
        }
}