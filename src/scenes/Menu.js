class Menu extends Phaser.Scene{ //creating js class 'menu' that extends phaser's predef scene object
    constructor() // The constructor (a special method for creating and initializing an object) uses
    {             // the "super" keyword to call the constructor of the super class
        super("menuScene");
    }

    preload() {
        this.load.audio('bgm', './assets/scifi.mp3');
        // Replace with with new bgm

        this.load.audio('sfx_select', './assets/explosion1.wav');
        // sfx for starting

        this.load.image('menuscreen', './assets/rocketpatrolmenu.png');
        // replace with new menu image

        this.load.image('bgtile', './assets/starfield.png');
        // replace with new background tile

        
    }
      
    create(){
       // this.add.text(20,20,"Rocket Patrol Menu");
        // menu text configuration
        this.newmenu = new Image(this, game.config.width/2, game.config.width/2, 'menuscreen');
        this.add.image(0, 0, 'menuscreen').setOrigin(0);
      
        //// i don't necessarily need this but i'll keep it in case i need a font
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        /// 
        this.sound.play('bgm');

        // show menu text

        // define keys, space for jump mayhaps
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
          // Novice mode
          this.sound.play('sfx_select'); // probably add one of these
          this.scene.start("tutorialScene");    
        }
      }
}
