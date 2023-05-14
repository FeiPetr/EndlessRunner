/*
Sofia Petrova

*/


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height:480,
    physics: {
        default: 'arcade',
        arcade: {
            gravity:{y:300},
            debug: false
        }
    },
    scene: [Menu,Tutorial,Play]

}
// create function in config

let game = new Phaser.Game(config);
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard variables
let keyUP;

//Track a high score that persists across scenes and display it in the UI (5)
//global variable
