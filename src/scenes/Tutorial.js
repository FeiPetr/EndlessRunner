class Tutorial extends Phaser.Scene{ //creating js class 'menu' that extends phaser's predef scene object
    constructor() // The constructor (a special method for creating and initializing an object) uses
    {             // the "super" keyword to call the constructor of the super class
        super("tutorialScene");
    }

    preload() {
        // load images/tile sprites
        //this.load.image('character', './assets/cat.PNG');
        this.load.image('icecream','./assets/icecream.PNG');
        this.load.image('orange','./assets/orange.PNG');

        // add more tile sprites here and replace, etc etc
        this.load.image('platform','./assets/board.PNG');
        // load spritesheet
        this.load.spritesheet('character', './assets/cat_sprites.PNG', {frameWidth: 107, frameHeight: 80, startFrame: 0, endFrame: 1});
            }
      
    create(){
        // place tile sprite
        this.bgtile = this.add.tileSprite(0, 0, 640, 480, 'bgtile').setOrigin(0, 0);

        // add runner
        //this.character = new Character(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'character').setOrigin(0.5, 0);

        this.character = this.physics.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height/2, 'character');
        this.anims.create({
          key: 'cat',
          frames: this.anims.generateFrameNumbers('character', { start: 0, end: 1, first: 0}),
          frameRate: 3,
          repeat: -1
        });

        this.character.anims.play('cat');
        this.orange = new Collectable(this, -100, -100, 'orange', 0, 30).setOrigin(0, 0);
        this.ice_cream = new Collectable(this, -100, -100, 'icecream', 0, 30).setOrigin(0, 0);
        this.orange2 = new Collectable(this, -100, -100, 'orange', 0, 30).setOrigin(0, 0);
        this.ice_cream2 = new Collectable(this, -100, -100, 'icecream', 0, 30).setOrigin(0, 0);



        this.p1Score = 0;
        this.lifeScore = 9;
        let scoreConfig = {
          fontFamily: 'Courier',
          fontSize: '28px',
          //backgroundColor: '#F3B141',
          color: '#FFFFFF',
          align: 'center',
          padding: {
            top: 5,
            bottom: 5,
          },
          fixedWidth: 350
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2-30,"Score: "+ this.p1Score, scoreConfig);
        this.livesLeft = this.add.text(borderUISize + borderPadding+200, borderUISize + borderPadding*2-30,"Life: " + this.lifeScore, scoreConfig);
        this.tutText = this.add.text(borderUISize + borderPadding+200, borderUISize + borderPadding + 40,"Press Space to Jump!" + this.lifeScore, scoreConfig);

      // initialize orange and ice cream offscreen

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

        // adding clock, hopefully
        this.clock = this.time.delayedCall(600000000, this.onClockEvent, null, this); 
        


        // add tiles
        //this.platform = new Platform(this, game.config.width + borderUISize*6, borderUISize*4, 'platform', 0, 30).setOrigin(0, 0);

        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // GAME OVER flag
        this.endTut = false; 
        

     }

///// start jump functions /////

  startJump() {
    //console.log("need to beat " + this.sys.game.config.height * .95);
    //console.log(this.character.y);

     this.character.setVelocityY(-200);

  }


     update() {
        // check key input r for restart
        let scoreConfig = {
          fontFamily: 'Courier',
          fontSize: '28px',
          backgroundColor: '#F3B141',
          color: '#843605',
          align: 'center',
          padding: {
            top: 5,
            bottom: 5,
          },
          fixedWidth: 500
        }
        

          this.elapsed = parseInt(this.clock.getElapsedSeconds());
          //this.random = Phaser.Math.Between(1, 100);

          this.bgtile.tilePositionX += 2; // making background scroll   
          this.tutText.text = "Press Space to jump!";       


          this.scoreLeft.text = "S: " + String(this.p1Score);
          this.livesLeft.text = "♡ x " + String(this.lifeScore);
            // update tiles appearing?
            if (Phaser.Input.Keyboard.JustDown(keyUP)) {
              this.startJump();
              this.endTut = true;
            }
            if (this.endTut && this.elapsed >= 5)
            {
                this.scene.start("playScene"); 
            }
      
        
      }
  
    
}