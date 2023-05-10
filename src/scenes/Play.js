class Play extends Phaser.Scene{ //creating js class 'menu' that extends phaser's predef scene object
    constructor() // The constructor (a special method for creating and initializing an object) uses
    {             // the "super" keyword to call the constructor of the super class
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('character', './assets/cat.PNG');

        // add more tile sprites here and replace, etc etc
        this.load.image('platform','./assets/board.PNG');
        // load spritesheet
        //i should probably learn how spritesheets actually work
        //this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
      }
      
    create(){
        // place tile sprite
        this.bgtile = this.add.tileSprite(0, 0, 640, 480, 'bgtile').setOrigin(0, 0);

        // add runner
        //this.character = new Character(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'character').setOrigin(0.5, 0);
        this.character = this.physics.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height/2, 'character');
        
        this.ground = this.physics.add.staticSprite(this.sys.game.config.width / 2, this.sys.game.config.height * .95, 'platform');

        this.ground.displayWidth = this.sys.game.config.width * 1.1;
        //this.ground.setImmovable();
        //
        //
        //
        this.power = 0;
        //set collider
        //
        //
        this.physics.add.collider(this.character, this.ground);

        // add tiles
        //this.platform = new Platform(this, game.config.width + borderUISize*6, borderUISize*4, 'platform', 0, 30).setOrigin(0, 0);

        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // GAME OVER flag
        this.gameOver = false; 
        

     }

///// start jump functions /////

  startJump() {
    //console.log("need to beat " + this.sys.game.config.height * .95);
    //console.log(this.character.y);

     this.character.setVelocityY(-200);

  }


     update() {
        // check key input r for restart
        
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
          this.scene.restart();
        }

        this.bgtile.tilePositionX += 2; // making background scroll

        if(!this.gameOver){
          // update tiles appearing?
          if (Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.startJump();
          }
  
        }
      }
  
      
    
}