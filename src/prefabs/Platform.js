// Character prefab
class Platform extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
    }

    update()
    {
        this.x = 200;
        this.y = 200;
    }
    reset()
    {
        //idrk what goes in here
    }
  }
  