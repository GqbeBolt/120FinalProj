class Lock extends Phaser.Scene {
    constructor() {
        super("lockScene");
    }

    init() {

    }

    create() {
        this.cameras.main.setBackgroundColor(blackHex);
        this.add.image(0, 0, "noiseBG").setOrigin(0).setAlpha(0.5);

        this.add.image(width/2, height/2, "lockTemp").setOrigin(0.5);
    }
}