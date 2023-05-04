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
            // I'll have to add a bool to safeguard against double jumps.
            // Only tapping it can make it jump
            // Probably I should take a look at the FSM thing again
            this.setVelocityY(-100); //idk if this.x is right but yk...
            //maybe i have to create the object and reference it?
      }

    }
    reset()
    {
        //idrk what goes in here
    }
  }
  