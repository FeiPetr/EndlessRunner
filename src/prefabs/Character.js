// Character prefab
class Character extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
    }

    update()
    {
        if(keyUP.isDown)
        {
            // MAKE MY LIL GUY JUMP!!!!
      }

    }
    reset()
    {
        //idrk what goes in here
    }
  }
  