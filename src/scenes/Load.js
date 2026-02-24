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
        //this.load.image("runner", "RunnerTEMP.png");

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