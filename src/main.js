/*
Name: Gabriel Rybolt
Title: ...
Hours: ~45
Citations: True Modulo: https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
           Used in Lock.js
Five Major Components:
    Tween Manager: Used in Sigil.js for the spinners & in other places as well

    Timers: Used to "animate" the background by moving and flipping the background sprite
    periodically

    Text Objects: Used for the start screen (for all other text, I found it easier to bake
    into an image so that background works easier). Also used in grader mode hints

    Mouse Interaction: This is used throughout the entire project, mainly as buttons
    (whether it be an actual button like the UI or clickable objects). The buttons
    also change color when hovered over

    Particles: Used in letter scene, particles behind the final red letter
    

Creative Tilt: 
    I really wanted to focus on making an experience with this game. With these types of projects,
    I would usually try to do something technically challenging, but for this project I wanted to
    focus on design and crafting a specific experience for the player. Since my friend and I have a
    lot of time in the game "Blue Prince", I wanted to create a similar feeling in the player that 
    that games gives. I did this by using the very limited color pallete, and by having clues put on
    specific scenes so that they player discovers more as they "look around".
    
*/
let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 600,
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    fps: 60,
    scene: [ Load, Menu, FrontView, RightView, LeftView, BackView, Sigil, Lock, Safe, DisplayImage, Letter, Credits, FinalMessage ]
};

let game = new Phaser.Game(config);
let {width, height} = game.config;

// color vars
let blueHex = 0x5fcde4;
let redHex = 0xDC143C;
let pinkHex = 0xFACADE;
let darkPinkHex = 0x8f747f;
let blackHex = 0x111111;
let whiteHex = 0xFFFFFF;
let grayHex = 0xAAAAAA;

// universal variables
let lockOpened = false;
let sigilComplete = false;
let graderMode = false;

// background function used for every scene
function setBG(scene) {
    scene.cameras.main.setBackgroundColor(blackHex);
    scene.bgImage = scene.add.image(0, 0, "noiseBG").setOrigin(0).setAlpha(0.4);
    scene.bgImage.setDepth(-10000);
    scene.time.addEvent({
        delay: 700,
        callback: () => {
            if (scene.bgImage.y < 0) {
                scene.bgImage.y = 0;
                scene.bgImage.setFlipY(true);
            } else {
                scene.bgImage.y = -50;
                scene.bgImage.setFlipY(false);
            }
        },
        callbackScope: scene,
        repeat: -1
    })
}