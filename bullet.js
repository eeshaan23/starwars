class Bullet{
    constructor(){
        this.body = createSprite(400, 450, 5, 20);
        this.body.visible = false;
    }
    releaseBullet(){
        this.body = createSprite(400, 450, 5, 20);
       this.body.shapeColor = "yellow";
        this.body.velocityY = -10;
        this.body.visible = true;
    }
}