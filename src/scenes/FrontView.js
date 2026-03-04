class FrontView extends Phaser.Scene {
    constructor() {
        super("frontScene");
    }

    init() {

    }

    create() {
        this.cameras.main.setBackgroundColor(blackHex);
        this.add.image(0, 0, "noiseBG").setOrigin(0).setAlpha(0.5);

        this.leftText = this.add.bitmapText(width/2, height/2, "typedFont", "LEFT", 36).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.scene.start("safeScene"); 
        })
        .on("pointerover", () => {this.leftText.setTint(blueHex)})
        .on("pointerout", () => {this.leftText.setTint(0xFFFFFF)});

        his.leftText = this.add.bitmapText(width/2, height/2, "typedFont", "RIGHT", 36).setOrigin(0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(-5, 10, 125, 35), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.scene.start("safeScene"); 
        })
        .on("pointerover", () => {this.rightText.setTint(blueHex)})
        .on("pointerout", () => {this.rightText.setTint(0xFFFFFF)});
    }

    update() {
                 

    }
}