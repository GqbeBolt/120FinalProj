class LeftView extends Phaser.Scene {
    constructor() {
        super("leftScene");
    }


    create() {
        // setting BG
        setBG(this);

        // adding the scene art
        this.add.image(0, 0, "leftScene").setOrigin(0);

        // clickable spinner
        this.spinnerButton = this.add.image(406, 330, "spinner").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 148, 64), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            if (!sigilComplete) {
                this.scene.start("sigilScene");
            } else {
                this.scene.start("imageScene", {image: "23Card", prevScene: this.scene.key})
            }
            
        })
        .on("pointerover", () => {this.spinnerButton.setTint(grayHex)})
        .on("pointerout", () => {this.spinnerButton.setTint(0xFFFFFF)});

        // left & right buttons
        this.leftButton = this.add.image(32, height - 64, "arrowButton").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.scene.start("backScene");
        })
        .on("pointerover", () => {this.leftButton.setTint(blueHex)})
        .on("pointerout", () => {this.leftButton.setTint(0xFFFFFF)});

        this.rightButton = this.add.image(width - 64, height - 64, "arrowButton").setOrigin(0).setFlipX(true).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.scene.start("frontScene");
        })
        .on("pointerover", () => {this.rightButton.setTint(blueHex)})
        .on("pointerout", () => {this.rightButton.setTint(0xFFFFFF)});
    }
}