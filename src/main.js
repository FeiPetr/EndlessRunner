/*
Sofia Petrova

Game Name: Chapa's Great Zoomie

Approximate hours: 20 hours

Creative tilt: In terms of artistic merit, I'm particularly proud of how obnoxiously cat-themed this game is.
The constant meowing effects are an intentional feature and I based the food items 
off my friend's cat's food preferences. I like to think the overall style is cute and fun and that
my assets reflect this as well. You even have nine lives.

Here is a picture of the creature in question, for your viewing pleasure: https://i.imgur.com/7Ti2Yip.jpg

In terms of technically interesting, I did some messing around with the clock to make some of the 
collectables move across the screen the way they do. It's essentially a movement delay that gives
the illusion of items moving across the screen.

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
    scene: [Menu,Play]

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
