/*
Name: Gabriel Rybolt
Game Name: 
Time Spent: 20
Citations:  
Creative Tilt: 
    
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
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    fps: 60,
    scene: [ Load, Menu, Play, FrontView, RightView, LeftView, BackView, Sigil, Lock, Safe, DisplayImage],
};

let game = new Phaser.Game(config);
let {width, height} = game.config;

let blueHex = 0x5fcde4;
let redHex = 0xDC143C;
let blackHex = 0x111111;
let whiteHex = 0xFFFFFF;
let grayHex = 0xAAAAAA;


let lockOpened = false;
let sigilComplete = false;