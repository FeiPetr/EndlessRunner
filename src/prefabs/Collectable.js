class Collectable extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture,frame,pointValue)
    {
        super(scene,x,y,texture,frame);
        scene.add.existing(this); //add to existing scene
        this.points = pointValue;
        //this.clock = this.time.delayedCall(60000000, this.onClockEvent, null, this);
        
    }
    update(){
        //move collectable left
        
        this.random = Phaser.Math.FloatBetween(0, 1);
        //wrap around from left edge to right edge
        if(this.x <= 0 - this.width)
        {
            this.x = game.config.width+this.random*15;
            this.y = (game.config.height-100)*this.random;
        }
    }
    //position reset
    reset()
    {
        this.x = game.config.width;
    }
}