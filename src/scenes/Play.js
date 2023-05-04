class Play extends Phaser.Scene{ //creating js class 'menu' that extends phaser's predef scene object
    constructor() // The constructor (a special method for creating and initializing an object) uses
    {             // the "super" keyword to call the constructor of the super class
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('character', './assets/rocket.png');

        // add more tile sprites here and replace, etc etc
        this.load.image('platform','./assets/tilesprite.jpg');
        // load spritesheet
        //i should probably learn how spritesheets actually work
        //this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
      }
      
    create(){
        // place tile sprite
        this.bgtile = this.add.tileSprite(0, 0, 640, 480, 'bgtile').setOrigin(0, 0);

// white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        // add runner
        //this.character = new Character(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'character').setOrigin(0.5, 0);
        this.character = this.physics.add.sprite(this.sys.game.config.width / 2, 0, 'character');
        

        let ground = this.physics.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height * .95, "platform");
        ground.displayWidth = this.sys.game.config.width * 1.1;
        ground.setImmovable();
        //
        //
        //
        //set collider
        //
        //
        this.physics.add.collider(this.ball, ground);

        // add tiles
        //this.platform = new Platform(this, game.config.width + borderUISize*6, borderUISize*4, 'platform', 0, 30).setOrigin(0, 0);

        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);


        // GAME OVER flag
        this.gameOver = false; 
        

     }
     update() {
        // check key input r for restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
          this.scene.restart();
        }

        //make background scroll
        //this.starfield.tilePositionX -= 4;


        if(!this.gameOver){
          // update tiles appearing?
        }
      }
  
      
    
}