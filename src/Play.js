class Play extends Phaser.Scene{ //creating js class 'menu' that extends phaser's predef scene object
    constructor() // The constructor (a special method for creating and initializing an object) uses
    {             // the "super" keyword to call the constructor of the super class
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('character', './assets/rocket.png');

        // add more tile sprites here and replace, etc etc
        this.load.image('platform','./assets/tilesprite.png');
        // load spritesheet
        //i should probably learn how spritesheets actually work
        this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
      }
      
    create(){
        //this.add.text(20,20,"TesttestTETSTTSTT");
        // place tile sprite
        this.bgtile = this.add.tileSprite(0, 0, 640, 480, 'bgtile').setOrigin(0, 0);

// green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
// white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        // add runner
        this.character = new Character(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'character').setOrigin(0.5, 0);
        //make character interactive?
        this.character.setInteractive();

        // add tiles
        this.platform = new Platform(this, game.config.width + borderUISize*6, borderUISize*4, 'platform', 0, 30).setOrigin(0, 0);

        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        /*
        // animation config
        this.anims.create({
          key: 'explode',
          frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
          frameRate: 30
        });*/


        // GAME OVER flag
        this.gameOver = false;


        // 60-second play clock
        //idk how to make it just count up. for now im just gonna add a super long time to it
        this.clock = this.time.delayedCall(60000000000000, () => {
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← to Menu', scoreConfig).setOrigin(0.5);
            //display high score
            this.add.text(game.config.width/2, game.config.height/2 + 128, 'High Score: ' + game.config.highScore, scoreConfig).setOrigin(0.5);
            this.gameOver = true;
        }, null, this);
        this.elapsed = parseInt(this.clock.getElapsedSeconds()); // get elapsed time
        this.timeLeft = this.add.text(borderUISize + borderPadding + 256, borderUISize + borderPadding*2, this.elapsed, scoreConfig);
 
        


     }
     update() {
        // check key input r for restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
          this.scene.restart();
        }

        this.elapsed = parseInt(this.clock.getRemainingSeconds()); // get elapsed time
        this.timeLeft.text = this.elapsed; // update elapsed time text

        this.starfield.tilePositionX -= 4;
        this.random_ship = Phaser.Math.Between(1, 2);
        if(!this.gameOver){
          // update tiles appearing?
        }
        // check collisions
        //collision 1
        if(this.checkCollision(this.p1Rocket, this.ship03)) {
          // adds time to the clock for successful hits
          this.clock.reset({
            delay: this.clock.getRemaining() + 3000                // ms
        })
            this.p1Rocket.reset();
          this.shipExplode(this.ship03);

          this.emitter = this.add.particles(this.ship03.x, this.ship03.y, 'sparks', {
            speed: 100,
            lifespan: 300,
            gravityY: 200
        });
          this.emitter.explode(16);          
        }
        //collision 2
        if (this.checkCollision(this.p1Rocket, this.ship02)) {
          this.clock.reset({
            delay: this.clock.getRemaining() + 3000                // ms
        })
          this.p1Rocket.reset();
          this.shipExplode(this.ship02);
          this.emitter = this.add.particles(this.ship02.x, this.ship02.y, 'sparks', {
            speed: 100,
            lifespan: 300,
            gravityY: 200
        });


          this.emitter.explode(16);
        }
        //collision 3
        if (this.checkCollision(this.p1Rocket, this.ship01)) {
          this.clock.reset({
            delay: this.clock.getRemaining() + 3000                // ms
        })
          this.p1Rocket.reset();
          this.shipExplode(this.ship01);
          
          this.emitter = this.add.particles(this.ship01.x, this.ship01.y, 'sparks', {
            speed: 100,
            lifespan: 300,
            gravityY: 200
        });


          this.emitter.explode(16);

        }
        // collision 4
        if(this.checkCollision(this.p1Rocket, this.ship04)) {
          // adds time to the clock for successful hits
          this.clock.reset({
            delay: this.clock.getRemaining() + 5000                // adds more time if evil
        })
            this.p1Rocket.reset();
          this.shipExplode(this.ship04);

          this.emitter = this.add.particles(this.ship04.x, this.ship04.y, 'sparks', {
            speed: 100,
            lifespan: 300,
            gravityY: 200
        });
    

          this.emitter.explode(16);
        }

      }
      checkCollision(rocket, ship) {
      if (rocket.x < ship.x + ship.width && 
          rocket.x + rocket.width > ship.x && 
          rocket.y < ship.y + ship.height &&
          rocket.height + rocket.y > ship. y) {
          return true;
        } else {
          return false;
        }
      }
      shipExplode(ship) {
        // temporarily hide ship
        ship.alpha = 0;
        // create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');             // play explode animation
        boom.on('animationcomplete', () => {    // callback after anim completes
          ship.reset();                         // reset ship position
          ship.alpha = 1;                       // make ship visible again
          boom.destroy();                       // remove explosion sprite
        });
          // score add and repaint
        this.p1Score += ship.points;
        this.scoreLeft.text = this.p1Score;

        // Saving high score
        this.random = Phaser.Math.Between(1, 4);
        if (this.p1Score > this.game.config.highScore)
        {
          game.config.highScore = this.p1Score;
        }
        if(this.random == 1)
        {
          this.sound.play('sfx_explosion1');
        }
        else if (this.random == 2)
        {
          this.sound.play('sfx_explosion2');
        }
        else if (this.random == 3)
        {
          this.sound.play('sfx_explosion3');
        }        
        else if (this.random == 4)
        {
          this.sound.play('sfx_explosion4');
        }

        
      }
      
      createExplosion(x,y) 
      {
       this.emitterfunc = this.add.particles(x, y, 'sparks', {
        speed: 100,
        lifespan: 300,
        gravityY: 200
    });
      return this.emitterfunc;
  }
      
    
}