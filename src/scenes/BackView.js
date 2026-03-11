class BackView extends Phaser.Scene {
    constructor() {
        super("backScene");
    }

    init() {
        this.input.setPollAlways();
    }

    create() {
        // setting BG
        setBG(this);

        // scene image
        this.add.image(0, 0, "backScene").setOrigin(0);

        // red card
        this.cardButton = this.add.sprite(709, 465, "smallRedCard").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 18, 11), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.scene.start("imageScene", {image: "1152Card", prevScene: this.scene.key,
                addGraderText: graderMode ? () => {this.scene.get("imageScene").add.bitmapText(width/2, height/2 + 50, "handwrittenFont", "red notes are always false", 22).setOrigin(0.5).setTint(pinkHex)} : undefined
            });
        })
        .on("pointerover", () => {this.cardButton.setTint(grayHex)})
        .on("pointerout", () => {this.cardButton.setTint(0xFFFFFF)});

        // handle
        this.handleButton = this.add.sprite(550, 305, "handle").setOrigin(1, 0.5).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 29, 10), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.tweens.add({
                targets: this.handleButton,
                angle: -5,
                ease: 'Linear',
                duration: 100,
                repeat: 0,         
                yoyo: true,
            })
            .on("start", () => {
                this.handleButton.disableInteractive();
                this.handleButton.setTint(0xFFFFFF)
            })
            .on("complete", () => {
                this.handleButton.setInteractive();
            })
        })
        .on("pointerover", () => {this.handleButton.setTint(grayHex)})
        .on("pointerout", () => {this.handleButton.setTint(0xFFFFFF)});

        // small safe
        this.safeButton = this.add.sprite(764, 269, "smallSafe").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 107, 70), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.scene.start("safeScene");
        })
        .on("pointerover", () => {this.safeButton.setTint(grayHex)})
        .on("pointerout", () => {this.safeButton.setTint(0xFFFFFF)});

        // left & right buttons
        this.leftButton = this.add.image(32, height - 64, "arrowButton").setOrigin(0).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32), 
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            useHandCursor: true
        })
        .on("pointerdown", () => {
            this.sound.play("uiButtonSFX");
            this.scene.start("rightScene");
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
            this.scene.start("leftScene");
        })
        .on("pointerover", () => {this.rightButton.setTint(blueHex)})
        .on("pointerout", () => {this.rightButton.setTint(0xFFFFFF)});
    }
}