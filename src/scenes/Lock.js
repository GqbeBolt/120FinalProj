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

        this.oneUp = this.add.image(407, 199, "arrowUp").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 14, 32, 18),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {

        })
        .on("pointerover", () => {this.oneUp.setTint(blueHex)})
        .on("pointerout", () => {this.oneUp.setTint(0xFFFFFF)});
    }
}