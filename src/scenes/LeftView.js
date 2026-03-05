class LeftView extends Phaser.Scene {
    constructor() {
        super("leftScene");
    }

    init() {

    }

    create() {
        this.cameras.main.setBackgroundColor(blackHex);
        this.add.image(0, 0, "noiseBG").setOrigin(0).setAlpha(0.5);

        // left & right buttons
        this.leftButton = this.add.image(32, height - 64, "arrowButton").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.scene.start("backScene");
        })
        .on("pointerover", () => {this.leftButton.setTint(blueHex)})
        .on("pointerout", () => {this.leftButton.setTint(0xFFFFFF)});

        this.rightButton = this.add.image(width - 64, height - 64, "arrowButton").setOrigin(0).setFlipX(true).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.scene.start("frontScene");
        })
        .on("pointerover", () => {this.rightButton.setTint(blueHex)})
        .on("pointerout", () => {this.rightButton.setTint(0xFFFFFF)});

        this.add.bitmapText(width/2, height/2, "handwrittenFont", "LEFT", 36).setOrigin(0.5);
    }

    update() {
                 

    }
}