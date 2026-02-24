class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    init() {

    }

    create() {
        this.cameras.main.setBackgroundColor(blackHex);

        this.add.bitmapText(width/2, height/2, "typedFont", "PLAYING", 24).setOrigin(0.5);
    }

    update() {
                 

    }
}