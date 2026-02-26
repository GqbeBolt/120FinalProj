class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                              // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);               // (color, alpha)
            loadingBar.fillRect(0, width/2, width * value, 10);   // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        this.load.path = "./assets/images/";
        this.load.image("noiseBG", "noiseBG.png");

        this.load.path = "./assets/images/bluePrince/";
        this.load.image("outerCircle", "OuterCircle.png");
        this.load.image("centerSymbol", "CenterSymbol.png");
        this.load.image("colorCircle", "ColorCircle.png");

        //color rings
        this.load.image("black-ring", "black-ring.png");
        this.load.image("red-ring", "red-ring.png");
        this.load.image("violet-ring", "violet-ring.png");
        this.load.image("pink-ring", "pink-ring.png");
        this.load.image("green-ring", "green-ring.png");
        this.load.image("yellow-ring", "yellow-ring.png");
        this.load.image("orange-ring", "orange-ring.png");
        this.load.image("white-ring", "white-ring.png");

        //rays
        this.load.image("normal-ray", "normal-ray.png");
        this.load.image("foggy-ray", "foggy-ray.png");
        this.load.image("hot-ray", "hot-ray.png");
        this.load.image("rainy-ray", "rainy-ray.png");
        this.load.image("stormy-ray", "stormy-ray.png");
        this.load.image("snow-ray", "snow-ray.png");
        this.load.image("windy-ray", "windy-ray.png");

        //motes
        this.load.image("tribal-mote", "tribal-mote.png");
        this.load.image("agricultural-mote", "agricultural-mote.png");
        this.load.image("martial-mote", "martial-mote.png");
        this.load.image("metropolitan-mote", "metropolitan-mote.png");
        this.load.image("academic-mote", "academic-mote.png");
        this.load.image("industrial-mote", "industrial-mote.png");
        this.load.image("spiritual-mote", "spiritual-mote.png");
        this.load.image("poetic-mote", "poetic-mote.png");

        // this.load.spritesheet("runner", "runner.png", {
        //     frameWidth: 30,
        //     frameHeight: 36
        // })

        this.load.path = "./assets/sounds/";
        //this.load.audio("glassBreak", "glassBreak.wav");    // Rosebugg (Freesound)

        this.load.path = "./assets/fonts/";
        this.load.bitmapFont("pixelFont", "PixeledFont.png", "PixeledFont.xml"); // OmegaPC777 
        this.load.bitmapFont("typedFont", "typewriterFont.png", "typewriterFont.xml");  // GGBotNet
        this.load.bitmapFont("handwrittenFont", "handwritten.png", "handwritten.xml");  // Shaped Fonts
    }

    create() {
        this.scene.start("menuScene")
    }
}