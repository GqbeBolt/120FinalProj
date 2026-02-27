/*
Name: Gabriel Rybolt
Game Name: 
Time Spent: 
Citations:  
Creative Tilt: 
    
*/
let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 600,
    pixelArt: true,
    zoom: 1,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    fps: 60,
    scene: [ Load, Menu, Play, BluePrincePuzzle ],
};

let game = new Phaser.Game(config);
let {width, height} = game.config;

let blueHex = 0x5fcde4;
let redHex = 0xDC143C;
let blackHex = 0x111111;


